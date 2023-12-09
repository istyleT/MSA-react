import PropTypes from "prop-types";
ButtonDelete.propTypes = {
  onClickDelete: PropTypes.func,
  accessdelete: PropTypes.bool,
};

export default function ButtonDelete({ onClickDelete, accessdelete }) {
  return (
    <button
      type="button"
      className="mx-1 btn p-0 rounded-circle border-0"
      onClick={onClickDelete}
      style={{ display: accessdelete ? "block" : "none" }}
    >
      <img
        src="../images/icon-btn/icons8-delete-200.png"
        style={{ width: 42 + "px" }}
        alt="btn-delete"
      />
    </button>
  );
}
