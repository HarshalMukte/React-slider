import React, { useState } from "react";
import { BsMenuButtonFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";

const Menu = ({customise, setCustomise}) => {
  const [menuActive, setMenuActive] = useState(false);

  const customiseFunction = (e) => {
    const target = e.target.name;
    const condition = e.target.getAttribute("data-condition") === "true" ? true : false 
    setCustomise((pre) => { return {...pre, [target]:condition} })
  }

  return (
    <div className={menuActive ? "navBar active" : "navBar"}>
     {menuActive && <div className="backWrapper" onClick={() => setMenuActive(false)}></div>}
     <div className={menuActive ? "navContainer active" : "navContainer"} >
          <div className="content">
            <h4>Show Dots: </h4>
            <input type="radio" name="dots" id="dotsYes" data-condition="true" onChange={(e) => customiseFunction(e)} checked={customise.dots ? true : false}/>
            <label htmlFor="dotsYes">Yes</label>
            <input type="radio" name="dots" id="dotsNo" data-condition="false" onChange={(e) => customiseFunction(e)} checked={customise.dots ? false : true}/>
            <label htmlFor="dotsNo">No</label>
          </div>
          {/* <div className="content">
            <h4>Slider Loop: </h4>
            <input type="radio" name="loop" id="loopYes" />
            <label htmlFor="loopYes">Yes</label>
            <input type="radio" name="loop" id="loopNo" />
            <label htmlFor="loopNo">No</label>
          </div> */}
          <div className="content">
            <h4>Slider Loop: </h4>
            <input type="radio" name="loop" id="loopYes" data-condition="true" onChange={(e) => customiseFunction(e)}  checked={customise.loop ? true : false}/>
            <label htmlFor="loopYes">Yes</label> 
            <input type="radio" name="loop" id="loopNo" data-condition="false" onChange={(e) => customiseFunction(e)}  checked={customise.loop ? false : true}/>
            <label htmlFor="loopNo">No</label>
          </div>
      </div>

      <div className="icon" onClick={() => setMenuActive((pre) => !pre)}>
        {menuActive ? <ImCross /> : <BsMenuButtonFill />}
      </div>
    </div>
  );
};

export default Menu;
