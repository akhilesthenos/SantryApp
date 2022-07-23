import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Button from "../button";
import Parallax from "parallax-js";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Intro = ({ data }) => {
    const sceneEl = useRef(null);

    // useEffect(() => {
    //     const parallaxInstance = new Parallax(sceneEl.current, {
    //         relativeInput: true,
    //     });

    //     parallaxInstance.enable();

    //     return () => parallaxInstance.disable();
    // }, []);
    return (
        <>
            <div className="hero-slider">
                <div id="angle-bg"></div>
                <div className="container ">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="hero-slide-content mb-5">
                                <div className="d-flex justify-content-center flex-column w-auto">
                                    <h2 className="title animated d-flex justify-content-center m-0 p-0  text-white">
                                        Empowering
                                    </h2>
                                    <div className="title animated buti d-flex justify-content-center m-0 p-0">
                                        <Typewriter
                                            options={{
                                                strings: [
                                                    "Businesses",
                                                    "Entrepreneurs",
                                                    "Individuals",
                                                    "Family ",
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                delay: 60,
                                            }}
                                        />
                                    </div>
                                    <h2 className="title animated d-flex justify-content-center m-0 p-0 text-white">
                                        through
                                    </h2>
                                    <div className="title animated buti d-flex justify-content-center m-0 p-0">
                                        <Typewriter
                                            options={{
                                                strings: [
                                                    "Growth Capital",
                                                    "Insurance",
                                                    "Investments",
                                                    "Linkage ",
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                delay: 60,
                                            }}
                                        />
                                    </div>
                                </div>
                                <p className="es-sty-cust animated delay1 text-center custom-font d-flex justify-content-center m-0 p-0">
                                    Oldest &amp; Proven online marketplace
                                    infrastructure for debt funding
                                </p>
                                <p className="es-sty-cust animated delay1 text-center custom-font d-flex justify-content-center m-0 p-0">
                                    Discover the best of both worlds
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Intro.propTypes = {
    data: PropTypes.object,
};

export default Intro;
