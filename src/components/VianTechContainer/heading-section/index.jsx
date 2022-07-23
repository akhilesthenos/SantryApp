import React from "react";
import TypewriterComponent from "typewriter-effect";
import LogoTech from "../../logo-tech";
import WFHEffect from "../WFHEffect";

const HeadingSection = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 tech-container">
                    <LogoTech
                        classOption="d-block img-es my-md-8"
                        image={`${process.env.PUBLIC_URL}/images/logo/new.png`}
                        // classOption="d-block img-es"
                        // image={`${process.env.PUBLIC_URL}/images/logo/vian-white.png`}
                    />
                    <WFHEffect />
                    {/* <h2 className="tech-head-title">Building next gen</h2>
                    <div className="title animated vt-buti d-flex justify-content-left m-0 p-0">
                        <TypewriterComponent
                            wrapperClassName="title tech-head-title-tw"
                            options={{
                                strings: [
                                    "Growth Capital ",
                                    "Insurance ",
                                    "Investments ",
                                    "Linkage ",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 40,
                            }}
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default HeadingSection;
