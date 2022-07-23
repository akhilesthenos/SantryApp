import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "./NavLinkCust";

const MasteryContainer = () => {
    return (
        <div className="MasteryContainer">
            <NavLink
                className="hover-color"
                to={process.env.PUBLIC_URL + "/viantech"}
            >
                <span className="MasteryBodySpan">Android</span>
            </NavLink>
            {/* <NavLinkCust url="viantech" clsName="MasteryBodySpan"/> */}{" "}
            <NavLink
                className="hover-color"
                to={process.env.PUBLIC_URL + "/viantech"}
            >
                <span className="MasteryBodySpan">Backend</span>
            </NavLink>{" "}
            <NavLink
                className="hover-color"
                to={process.env.PUBLIC_URL + "/viantech"}
            >
                <span className="MasteryBodySpan">Web</span>
            </NavLink>{" "}
            <NavLink
                className="hover-color"
                to={process.env.PUBLIC_URL + "/viantech"}
            >
                <span className="MasteryBodySpan">iOS</span>
            </NavLink>{" "}
            <NavLink
                className="hover-color"
                to={process.env.PUBLIC_URL + "/viantech"}
            >
                <span className="MasteryBodySpan">DevSecOps</span>
            </NavLink>{" "}
            <NavLink
                className="hover-color"
                to={process.env.PUBLIC_URL + "/viantech"}
            >
                <span className="MasteryBodySpan">Data Engineering</span>
            </NavLink>{" "}
            <NavLink
                className="hover-color"
                to={process.env.PUBLIC_URL + "/viantech"}
            >
                <span className="MasteryBodySpan">PoS/IoT</span>
            </NavLink>{" "}
            <NavLink
                className="hover-color"
                to={process.env.PUBLIC_URL + "/viantech"}
            >
                <span className="MasteryBodySpan">QA &#40;automation&#41;</span>
            </NavLink>
        </div>
    );
};

export default MasteryContainer;
