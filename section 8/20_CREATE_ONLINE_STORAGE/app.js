
















import http from "http";
import { createWriteStream } from "fs";
import { open, readdir, rm, rename } from "fs/promises";
import path from "path";
import mime from "mime-types";

const STORAGE_PATH = "./storage";

const server = http.createServer(async (req, res) => {
 
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.end();
  }

  console.log(req.method, req.url);

  if (req.method === "GET") {
    if (req.url === "/favicon.ico") return res.end();

    if (req.url === "/") {
      return serveDirectory(res);
    }

    try {
      const [url, queryString] = req.url.split("?");
      const queryParams = {};

      queryString?.split("&").forEach((pair) => {
        const [key, value] = pair.split("=");
        queryParams[key] = value;
      });

      const safePath = path.join(STORAGE_PATH, path.basename(url));
      const fileHandle = await open(safePath);
      const stats = await fileHandle.stat();

      if (stats.isDirectory()) {
        return serveDirectory(res);
      }

      const readStream = fileHandle.createReadStream();

      res.setHeader(
        "Content-Type",
        mime.contentType(path.basename(url)) || "application/octet-stream"
      );

      res.setHeader("Content-Length", stats.size);

      if (queryParams.action === "download") {
        res.setHeader(
          "Content-Disposition",
          `attachment; filename="${path.basename(url)}"`
        );
      }

      readStream.pipe(res);
    } catch (err) {
      res.statusCode = 404;
      res.end("File Not Found");
    }
  }


  else if (req.method === "POST") {
    const filename = req.headers.filename;

    if (!filename) {
      res.statusCode = 400;
      return res.end("Filename header missing");
    }

    const safePath = path.join(STORAGE_PATH, path.basename(filename));
    const writeStream = createWriteStream(safePath);

    req.pipe(writeStream);

    req.on("end", () => {
      res.end("File uploaded successfully");
    });

    req.on("error", (err) => {
      res.statusCode = 500;
      res.end(err.message);
    });
  }


else if (req.method === "DELETE") {
  try {
    const [url, queryString] = req.url.split("?");
    const queryParams = {};

    queryString?.split("&").forEach((pair) => {
      const [key, value] = pair.split("=");
      queryParams[key] = value;
    });

    const filename = queryParams.filename;

    if (!filename) {
      res.statusCode = 400;
      return res.end("Filename query param required");
    }

    const safePath = path.join(
      STORAGE_PATH,
      path.basename(decodeURIComponent(filename))
    );

    await rm(safePath, { recursive: true, force: true });

    res.end("Deleted successfully");
  } catch (err) {
    res.statusCode = 500;
    res.end(err.message);
  }
}

else if (req.method === "PATCH") {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", async () => {
    try {
      if (!body) {
        res.statusCode = 400;
        return res.end("Body missing");
      }

      const data = JSON.parse(body);

      if (!data.oldFilename || !data.newFilename) {
        res.statusCode = 400;
        return res.end("Both filenames required");
      }

      const oldPath = path.join(
        STORAGE_PATH,
        path.basename(data.oldFilename)
      );

      const newPath = path.join(
        STORAGE_PATH,
        path.basename(data.newFilename)
      );

      await rename(oldPath, newPath);

      res.end("File renamed successfully");
    } catch (err) {
      res.statusCode = 500;
      res.end(err.message);
    }
  });
}
  
});

async function serveDirectory(res) {
  try {
    const items = await readdir(STORAGE_PATH);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(items));
  } catch (err) {
    res.statusCode = 500;
    res.end(err.message);
  }
}

server.listen(2200, () => {
  console.log("Server running");
});