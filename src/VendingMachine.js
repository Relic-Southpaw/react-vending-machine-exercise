import React from "react";
import { NavLink } from "react-router-dom";

const VendingMachine = () => {
    return (
        <div>
            <nav>
                <NavLink exact to="/soda">
                    SODA
                </NavLink>
                <NavLink exact to="/diet">
                    DIET SODA
                </NavLink>
                <NavLink exact to="/">
                    WATER
                </NavLink>
            </nav>
        </div>
    )
}

export default VendingMachine;