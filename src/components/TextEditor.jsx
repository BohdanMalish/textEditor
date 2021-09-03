import React, { useEffect, createRef } from "react";
import "../App.css";
import DropdownMenu from "./DropdownMenu";
import backColor from "../constants/BackColor";
import fontColor from "../constants/FontColor";
import fontsize from "../constants/FontSize";
import bold from "../images/Bold.png"
import italic from "../images/Italic.png";
const TextEditor = () => {
  const myContainer = createRef();
  useEffect(() => {
    myContainer.current.contentEditable = "true";
  });
  const changeToBoldStyle = async () => {
    document.execCommand("bold", false, null);
  };
  const changeToItalicStyle = async () => {
    document.execCommand("italic", false, null);
  };
  const changeBackColor = async (color) => {
    document.execCommand("backColor", false, color);
  };
  const changeColor = async (color) => {
    document.execCommand("foreColor", false, color);
  };
  const resizeText = async (size) => {
    document.execCommand("fontSize", false, size);
  };
  /* const convertToJson = () => {
    const Json = document.getElementById("editorSpace");
    const elements = Json.children;
    const nodes = [];
    if (elements.length == 0) {
      nodes.push({ text: Json.innerHTML, size: "default", color: "default" });
    } else {
      console.log(elements[1]);
      let el = {};
      if (elements[0].tagName == "FONT") {
        el.size = elements[0].getAttribute("size");
      }
      if (elements[0].tagName == "div") {
        el.color = elements[0].getAttribute("style").split(": ");
        console.log(el);
      }
      const b = elements[0].getElementsByTagName("b");
      const font = elements[1].getElementsByTagName("font");
      const i = elements[0].getElementsByTagName("i");
      const div = elements[0].getElementsByTagName("div");
      console.log(b, font, i, div);
    }
    console.log(nodes);
  };*/
  return (
    <div className={"container"}>
      <div className={"tools-bar"}>
        <ul>
          <li
            onClick={() => {
              changeToBoldStyle();
            }}
          >
            <img src={bold} alt="bold"></img>
          </li>
          <li
            onClick={() => {
              changeToItalicStyle();
            }}
          >
            <img src={italic} alt="Italic"></img>
          </li>
          <li>
            <DropdownMenu
              lstData={fontsize}
              onchange={resizeText}
              defaultValue={"3"}
            ></DropdownMenu>
          </li>
          <li>
            <DropdownMenu
              lstData={fontColor}
              onchange={changeColor}
              defaultValue={"black"}
            ></DropdownMenu>
          </li>
          <li>
            <DropdownMenu
              lstData={backColor}
              onchange={changeBackColor}
              defaultValue={"white"}
            ></DropdownMenu>
          </li>
          <li>Convert to Json</li>
        </ul>
      </div>
      <div ref={myContainer} id="editorSpace"></div>
    </div>
  );
};
export default TextEditor;
