import PropTypes from "prop-types";
ButtonEdit.propTypes = {
  onClickEdit: PropTypes.func,
  accessedit: PropTypes.bool,
};

export default function ButtonEdit({ onClickEdit, accessedit }) {
  return (
    <button
      type="button"
      className="mx-1 btn p-0 rounded-circle border-0"
      onClick={onClickEdit}
      style={{ display: accessedit ? "block" : "none" }}
    >
      <img
        src="../images/icon-btn/icons8-edit-60.png"
        style={{ width: 35 + "px" }}
        alt="btn-edit"
      />
    </button>
  );
}
