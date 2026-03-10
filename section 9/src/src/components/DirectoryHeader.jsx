import { FaFolderPlus, FaUpload } from "react-icons/fa";
import PropTypes from "prop-types";

function DirectoryHeader({
  directoryName,
  onCreateFolderClick,
  onUploadFilesClick,
  fileInputRef,
  handleFileSelect,
}) {
  return (
    <header className="directory-header">
      <h1>{directoryName}</h1>

      <div className="header-links">
        {/* Create Folder */}
        <button
          className="icon-button"
          title="Create Folder"
          onClick={onCreateFolderClick}
        >
          <FaFolderPlus />
        </button>

        {/* Upload Files */}
        <button
          className="icon-button"
          title="Upload Files"
          onClick={onUploadFilesClick}
        >
          <FaUpload />
        </button>

        <input
          ref={fileInputRef}
          id="file-upload"
          type="file"
          style={{ display: "none" }}
          multiple
          onChange={handleFileSelect}
        />
      </div>
    </header>
  );
}

DirectoryHeader.propTypes = {
  directoryName: PropTypes.string.isRequired,
  onCreateFolderClick: PropTypes.func.isRequired,
  onUploadFilesClick: PropTypes.func.isRequired,
  fileInputRef: PropTypes.object.isRequired,
  handleFileSelect: PropTypes.func.isRequired,
};

export default DirectoryHeader;