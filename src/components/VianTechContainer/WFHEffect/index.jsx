import React from "react";
import TypewriterComponent from "typewriter-effect";
import "./style.scss";
const WFHEffect = () => {
    return (
        <React.Fragment>
            <div className="animated-title">
                <div className="text-top">
                    <div className="tech-head-title">
                        <span>We are creators, technologists </span>
                        <span> and trailblazers</span>
                    </div>
                </div>
                <div className="text-bottom vt-buti">
                    <TypewriterComponent
                        wrapperClassName="title tech-head-title-tw"
                        options={{
                            strings: [
                                "who think big ",
                                "who act bold ",
                                "plan big ",
                                "create miracles",
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 40,
                        }}
                    />
                </div>
            </div>
            {/* <div className="container">
                <div className="shadows">
                    <span>V</span>
                    <span>I</span>
                    <span>A</span>
                    <span>N</span>
                </div>
            </div> */}
        </React.Fragment>
    );
};

export default WFHEffect;
