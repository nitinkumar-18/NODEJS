import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function RenameModal({
  renameType,
  renameValue,
  setRenameValue,
  onClose,
  onRenameSubmit,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();

      const dotIndex = renameValue.lastIndexOf(".");
      if (dotIndex > 0) {
        inputRef.current.setSelectionRange(0, dotIndex);
      } else {
        inputRef.current.select();
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [renameValue, onClose]);

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={handleContentClick}>
        <h2>Rename {renameType === "file" ? "File" : "Folder"}</h2>

        <form onSubmit={onRenameSubmit}>
          <input
            ref={inputRef}
            type="text"
            className="modal-input"
            placeholder="Enter new name"
            value={renameValue}
            onChange={(e) => setRenameValue(e.target.value)}
          />

          <div className="modal-buttons">
            <button className="primary-button" type="submit">
              Save
            </button>

            <button
              className="secondary-button"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

RenameModal.propTypes = {
  renameType: PropTypes.string.isRequired,
  renameValue: PropTypes.string.isRequired,
  setRenameValue: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onRenameSubmit: PropTypes.func.isRequired,
};

export default RenameModal;