/* import React, { Fragment } from "react";
import "../App2.css";
import { MdOutlineDeleteOutline, MdImportExport } from "react-icons/md";
import { BiExport, BiFilter } from "react-icons/bi";


import { useState } from "react";
import Importpop from "./Importpop";
function Navbar() {


  //for delete multiple button in navbar

  return (
    <Fragment>
      <div id="main-navbar">
        <div id="select">
          <input
            className="btn"
            type="date"
            name="entrydate"
            placeholder="select date"
          />
          <select className="btn" name="Filterby">
            <option>
              <BiFilter />
              Filter
            </option>
            <option>By Company</option>
            <option>By Designation</option>
            <option>By Country</option>
            <option>By Industry</option>
          </select>
        </div>
        <div id="mybtn">
          <button className="btn" onClick={deletebybtn}>
            <MdOutlineDeleteOutline />
            Delete
          </button>
          <button className="btn" type="submit" onClick={console.log("hii")}>
            <MdImportExport />
            Import
          </button>
          <button className="btn">
            <BiExport />
            Export
          </button>
        </div>
      </div>
    </Fragment>
  );
}
export default Navbar; */
