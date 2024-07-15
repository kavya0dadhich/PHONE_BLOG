import React from 'react'
import { Link } from 'react-router-dom'
// import { FaHome } from "react-icons/fa";

function Sidebar() {
  return (
    <div>
        <nav>
            <ul>
                <li className='f64 textC fw-bold'><Link to={"/"}>BLO<span className='show_color'>GS.</span></Link></li>
                <li className='fs-3 cursorP p-2 liHover'><Link to={"/home"}> Home</Link></li>
                <li className='fs-3 cursorP p-2 liHover'><Link to={"/uplode"}>Upload Data</Link></li>
                <li className='cursorP fs-3 p-2 liHover'><Link to={"/"}>Home</Link></li>
                {/* <li className='fs-3 cursorP p-2 liHover'><Link to={"/"}></Link></li> */}
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar