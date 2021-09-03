import React from "react";
import "../App.css";
import PropTypes from "prop-types";

const DropdownMenu = ({ lstData, onchange, defaultValue }) => {
  const handleOnchange = (e) => {
    const value = e.target.value;
    onchange(value);
  };
  console.log(lstData);
  return (
    <>
      <form
        onChange={(e) => {
          handleOnchange(e);
        }}
      >
        <select defaultValue={defaultValue}>
          {lstData?.map((element) => {
            return <option value={element}>{element}</option>;
          })}
        </select>
      </form>
    </>
  );
};
DropdownMenu.propTypes = {
  lstData: PropTypes.array,
  onchange: PropTypes.func,
  defaultValue: PropTypes.string,
};
export default DropdownMenu;
