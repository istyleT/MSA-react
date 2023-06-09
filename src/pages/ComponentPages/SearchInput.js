import React from "react";

const SearchInput = (props) => {
  const { value, onValueChange } = props;
  return (
    <div
      className="d-flex p-2 position-relative start-50 translate-middle-x"
      style={{ maxWidth: 1000 + "px" }}
    >
      <input
        type="text"
        className="form-control text-center searchinput"
        placeholder="ค้นหารายการสินค้า"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
      {/* <button type="button" className="ms-2 bg-light rounded-circle border-0">
        <img
          src="images/icons8-shopping-cart.gif"
          alt="..."
          style={{ width: 27 + "px", height: 27 + "px" }}
        />
      </button> */}
    </div>
  );
};
export default SearchInput;
