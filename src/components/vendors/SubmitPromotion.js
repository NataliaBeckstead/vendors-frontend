import React from "react";
import Navbar from "./Navbar";

function SubmitPromotion() {

  return (
    <div>
        <Navbar />
        <p>Submit Promotion</p>
        <form>
          <label htmlFor="promoPeriod">Promo Period
            <select name="promoPeriod" id="promoPeriod">
              <option value="JANUARY">JANUARY</option>
              <option value="FABRUARY">FABRUARY</option>
              <option value="MARCH">MARCH</option>
              <option value="APRIL">APRIL</option>
              <option value="MAY">MAY</option>
              <option value="JUNE">JUNE</option>
              <option value="JULY">JULY</option>
              <option value="AUGUST">AUGUST</option>
              <option value="SEPTEMBER">SEPTEMBER</option>
              <option value="OCTOBER">OCTOBER</option>
              <option value="NOVEMBER">NOVEMBER</option>
              <option value="DECEMBER">DECEMBER</option>
            </select>
          </label>
          <label htmlFor="adFeature">AD Feature
            <select name="adFeature" id="adFeature">
              <option value="NEGOTIATED LOWER PRICE TAG">NEGOTIATED LOWER PRICE TAG</option>
              <option value="AD FEATURE">AD FEATURE</option>
              <option value="LARGE AD FEATURE">LARGE AD FEATURE</option>
            </select>
          </label>
          <label htmlFor="displayProgram">Display Program
            <select name="Display Program" id="Display Program">
              <option value="LARGE DISPLAY">LARGE DISPLAY</option>
              <option value="CHECK STAND DISPLAY">CHECK STAND DISPLAY</option>
              <option value="SIDE PANEL DISPLAY">SIDE PANEL DISPLAY</option>
              <option value="JUMP SHELF DISPLAY">JUMP SHELF DISPLAY</option>
              <option value="TABLE DISPLAY">TABLE DISPLAY</option>
              <option value="REFRIGERATED/DRY DISPLAY">REFRIGERATED/DRY DISPLAY</option>
              <option value="DIETITIANS CHECK STAND DISPLAY (MAIN)">DIETITIANS CHECK STAND DISPLAY (MAIN)</option>
              <option value="DIETITIANS CHECK STAND DISPLAY (JUMP SHELF)">DIETITIANS CHECK STAND DISPLAY (JUMP SHELF)</option>
              <option value="NEW ITEM DISPLAY">NEW ITEM DISPLAY</option>
              <option value="GET MORE DIGITAL DISPLAY">GET MORE DIGITAL DISPLAY</option>
              <option value="FEATURED ITEM DIGITAL DISPLAY">FEATURED ITEM DIGITAL DISPLAY</option>
              <option value="TORTILLA/BREAD TABLE DISPLAY">TORTILLA/BREAD TABLE DISPLAY</option>
            </select>
          </label>
          <label htmlFor="unfi">UNFI ITEM # (5 Digits Only)
            <input type="number" id="unfi" min="00000" max="99999" ></input>
          </label>
          <label htmlFor="upc">UPC - 11 NO CHECK DIGITS (enter first 11 Digits Only)
            <input type="number" id="upc" min="00000000000" max="99999999999"></input>
          </label>
          <label htmlFor="brand">BRAND
            <input type="text" id="brand" ></input>
          </label>
          <label htmlFor="description">DESCRIPTION OF ITEM
            <input type="text" id="description" ></input>
          </label>
          <label htmlFor="pack">PACK
            <input type="text" id="pack" ></input>
          </label>
          <label htmlFor="size">SIZE
            <input type="number" id="size" ></input>
          </label>
          <label htmlFor="uom">UNIT OF MEASURE
            <select name="uom" id="uom">
              <option value="OZ">OZ</option>
              <option value="CT">CT</option>
              <option value="EA">EA</option>
              <option value="LB">LB</option>
              <option value="CAP">CAP</option>
              <option value="CHEW">CHEW</option>
              <option value="GAL">GAL</option>
              <option value="GR">GR</option>
              <option value="LTR">LTR</option>
              <option value="ML">ML</option>
              <option value="PACK">PACK</option>
              <option value="PAIR">PAIR</option>
              <option value="PKT">PKT</option>
              <option value="SGEL">SGEL</option>
              <option value="TAB">TAB</option>
            </select>
          </label>
          <label htmlFor="oiDiscount">CASE OI DISCOUNT ( % only )
            <input type="number" id="oiDiscount" ></input>
          </label>
          <label htmlFor="mcbDiscount">CASE MCB DISCOUNT (% only)
            <input type="number" id="mcbDiscount" ></input>
          </label>
          {/* Should be displayed as OI + MCB discount */}
          <label htmlFor="totalDiscount">TOTAL % DISCOUNT
            <input type="number" id="totalDiscount" ></input>
          </label>
          <label htmlFor="unitScan">UNIT SCAN ($ only)
            <input type="number" id="unitScan" step="0.01"></input>
          </label>
          <label htmlFor="retailPrice">SUGGESTED RETAIL PRICE ($)
            <input type="number" id="retailPrice" step="0.01"></input>
          </label>
          {/* AD DOLLARS based on ad feature and display program */}
        </form>
    </div>
  )
  
}

export default SubmitPromotion