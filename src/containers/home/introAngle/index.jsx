import React from "react";
import Intro from "../../../components/introAngle";
import HomeData from "../../../data/home.json";

const IntroContainerAngle = () => {
    return (
        <>
            <div className="section position-relative">
                <Intro data={HomeData[0].slider[0]} />
            </div>
        </>
    );
};

export default IntroContainerAngle;
