import React from "react";
import Navbar from "./Navbar";

function SubmitItem() {

  return (
    <div>
        <Navbar />
        <p>Submit Item</p>
        <form>
          <label htmlFor="distributor">Distributor
            <select name="distributor" id="distributor">
              <option value="UNFI West - MORENO VALLEY">UNFI West - MORENO VALLEY</option>
              <option value="TONY'S FINE FOODS (Reed DC)">TONY'S FINE FOODS (Reed DC)</option>
              <option value="UNFI WELLNESS (Gilroy DC)">UNFI WELLNESS (Gilroy DC)</option>
            </select>
          </label>
          <label htmlFor="active">ACTIVE IN DC?
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <label htmlFor="code">UNFI or TONY'S ITEM CODE
            <input type="number" id="code" min="00000" max="999999" ></input>
          </label>
          <label htmlFor="upc">RETAIL UNIT UPC (11 Digits Only)
            <input type="number" id="upc" min="00000000000" max="99999999999"></input>
          </label>
          <label htmlFor="brand">BRAND
            <input type="text" id="brand" ></input>
          </label>
          <label htmlFor="description">DESCRIPTION
            <input type="text" id="description" ></input>
          </label>
          <label htmlFor="packSize">PACK SIZE
            <input type="number" id="packSize" ></input>
          </label>
          <label htmlFor="unitSize">UNIT SIZE
            <input type="number" id="unitSize" ></input>
          </label>
        </form>
    </div>
  )
  
}

export default SubmitItem;