import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function CreateDirectoryModal({
  newDirname,
  setNewDirname,
  onClose,
  onCreateDirectory,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    // focus input and place cursor at end
    if (inputRef.current) {
      inputRef.current.focus();
      const length = inputRef.current.value.length;
      inputRef.current.setSelectionRange(length, length);
    }

    // listen escape key
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={handleContentClick}>
        <h2>Create a new directory</h2>

        <form onSubmit={onCreateDirectory}>
          <input
            ref={inputRef}
            type="text"
            className="modal-input"
            placeholder="Enter folder name"
            value={newDirname}
            onChange={(e) => setNewDirname(e.target.value)}
          />

          <div className="modal-buttons">
            <button className="primary-button" type="submit">
              Create
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

CreateDirectoryModal.propTypes = {
  newDirname: PropTypes.string.isRequired,
  setNewDirname: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onCreateDirectory: PropTypes.func.isRequired,
};

export default CreateDirectoryModal;