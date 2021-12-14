import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    //const [isOpen, setOpen] = useState(false);
    return(
    <nav>
        <NavLink to="/" id="app-header">Home</NavLink>
        <NavLink to="/uploadfiles" id="file-upload-link">Upload Files</NavLink>
    </nav>
    );
}

export default Navbar;