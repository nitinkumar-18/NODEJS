const form=document.querySelector("form")
const p=document.querySelector("p");

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const formData=new FormData(form);


    formData.append("parentDirId" ,"tansidhf")
    formData.append("name" ,"TANISH TANDON")
    formData.append("age" ,"19")
     



     const xhr = new XMLHttpRequest();
    xhr.open("POST", `http://localhost:2800/upload`, true);
    // xhr.setRequestHeader("filename", file.name);
    xhr.responseType="json";
    xhr.addEventListener("load", () => {
      console.log(xhr.response);

    });
    xhr.upload.addEventListener("progress", (e) => {
      const totalProgress = (e.loaded / e.total) * 100;
      p.innerText=`Progress : ${totalProgress.toFixed(2)}%`;

    });
    xhr.send(formData);


})