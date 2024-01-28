import React from 'react'
import './Drawer.css';
function Drawer({position, display}) {
  return (
    <>
    <div className={`drawer ${position== "top"  && display? "open" : 'close'}` }>
        <nav className="paper top">
        <h1>Drawer</h1>
        <ul className="menus">
         <li><a href="#">Menu Item</a></li>
         <li><a href="#">Menu Item</a></li>
         <li><a href="#">Menu Item</a></li>
         <li><a href="#">Menu Item</a></li>
      </ul>
        </nav> 
    </div>
    <div className={`drawer ${position== "left" && display?  "open" : 'close'} left` }>
        <nav className="paper left">
        <h1>Drawer</h1>
        <ul>
         <li><a href="#">Menu Item</a></li>
         <li><a href="#">Menu Item</a></li>
         <li><a href="#">Menu Item</a></li>
         <li><a href="#">Menu Item</a></li>
      </ul>
        </nav> 
    </div>
    <div className={`drawer ${position== "right" && display?  "open" : 'close'} right` }>
        <nav className="paper right">
        <h1>Drawer</h1>
        <ul>
         <li><a href="#">Menu Item</a></li>
         <li><a href="#">Menu Item</a></li>
         <li><a href="#">Menu Item</a></li>
         <li><a href="#">Menu Item</a></li>
      </ul>
        </nav> 
    </div>
    <div className={`drawer ${position== "bottom" && display?  "open" : 'close'} bottom` }>
        <nav className="paper bottom">
        <h1>Drawer</h1>
        <ul className="menus">
         <li><a href="#">Menu Item</a></li>
         <li><a href="#">Menu Item</a></li>
         <li><a href="#">Menu Item</a></li>
         <li><a href="#">Menu Item</a></li>
      </ul>
        </nav> 
    </div>
</>
)
}

export default Drawer