import DirectoryItem from "./DirectoryItem";
import PropTypes from "prop-types";

function DirectoryList({
  items,
  handleRowClick,
  activeContextMenu,
  contextMenuPos,
  handleContextMenu,
  getFileIcon,
  isUploading,
  progressMap,
  handleCancelUpload,
  handleDeleteFile,
  handleDeleteDirectory,
  openRenameModal,
  BASE_URL,
}) {
  return (
    <div className="directory-list">
      {items.map((item) => {
        const uploadProgress = progressMap[item.id] || 0;

        return (
          <DirectoryItem
            key={item.id}
            item={item}
            handleRowClick={handleRowClick}
            activeContextMenu={activeContextMenu}
            contextMenuPos={contextMenuPos}
            handleContextMenu={handleContextMenu}
            getFileIcon={getFileIcon}
            isUploading={isUploading}
            uploadProgress={uploadProgress}
            handleCancelUpload={handleCancelUpload}
            handleDeleteFile={handleDeleteFile}
            handleDeleteDirectory={handleDeleteDirectory}
            openRenameModal={openRenameModal}
            BASE_URL={BASE_URL}
          />
        );
      })}
    </div>
  );
}

DirectoryList.propTypes = {
  items: PropTypes.array.isRequired,
  handleRowClick: PropTypes.func.isRequired,
  activeContextMenu: PropTypes.any,
  contextMenuPos: PropTypes.object,
  handleContextMenu: PropTypes.func.isRequired,
  getFileIcon: PropTypes.func.isRequired,
  isUploading: PropTypes.bool,
  progressMap: PropTypes.object,
  handleCancelUpload: PropTypes.func,
  handleDeleteFile: PropTypes.func,
  handleDeleteDirectory: PropTypes.func,
  openRenameModal: PropTypes.func,
  BASE_URL: PropTypes.string,
};

export default DirectoryList;