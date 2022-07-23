import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Button from "../button";
import Parallax from "parallax-js";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Intro = ({ data }) => {
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        });

        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    }, []);
    return (
        <div className="hero-slider">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-slide-content">
                            <div className="">
                                {/* <h2
                                    className="title animated"
                                    dangerouslySetInnerHTML={{
                                        __html: data.title,
                                    }}
                                >
                                    {/* <span>
                                        <Typewriter
                                            className="title"
                                            options={{
                                                strings: [
                                                    "Growth Capital",
                                                    "Insurance",
                                                    "investments",
                                                    "Linkage ",
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                delay: 40,
                                            }}
                                        />
                                    </span> 
                                </h2> */}
                                <h2
                                    className="title animated"
                                    style={{ marginBottom: "2rem" }}
                                >
                                    Empowering
                                    <div className="buti">
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
                                    {/* Entrepreneurs  */}
                                    through
                                    <div className="buti">
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
                                </h2>
                            </div>
                            <p
                                className="es-sty-cust animated delay1 custom-font"
                                // style={{ marginBottom: "3rem" }}
                            >
                                Oldest &amp; Proven online marketplace
                                infrastructure for debt funding
                            </p>
                            {/* <Button
                                classOption="btn btn-lg animated delay1 btn-dark btn-hover-dark me-4 mb-3 mb-sm-0"
                                text="Get Started"
                                path="/about"
                            />
                            <Button
                                classOption="btn btn-lg animated delay2 btn-secondary btn-hover-secondary mb-3 mb-sm-0"
                                text="Book a Meeting"
                                path="/contact"
                            /> */}
                            {/* <Link
                                to="/#"
                                className="btn btn-lg animated delay1 btn-dark-app-e btn-hover-dark-app-e me-4 mb-3 mb-sm-0"
                            >
                                <i className="icofont-brand-apple size-icon"></i>
                            </Link>
                            <Link
                                to="/#"
                                className="btn btn-lg animated delay1 btn-dark-andr-e btn-hover-dark-andr-e me-4 mb-3 mb-sm-0"
                            >
                                <i className="icofont-brand-android-robot size-icon"></i>
                            </Link> */}
                            {/* <div className="eswrap d-flex">
                                <Link
                                    to="/#"
                                    className="es-sty animated delay1 me-4 mb-3 mb-sm-0"
                                >
                                    <img src="images\appIcon\play.png" alt="" />
                                </Link>
                                <Link
                                    to="/#"
                                    className="es-sty animated delay1 me-4 mb-3 mb-sm-0"
                                >
                                    <img
                                        src="images\appIcon\appstore.png"
                                        alt=""
                                    />
                                </Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div
                            className="hero-img scene mt-10 mt-lg-0"
                            id="scene"
                            ref={sceneEl}
                        >
                            <div
                                data-depth="0.2"
                                className="d-flex justify-content-center"
                            >
                                <img
                                    className="animated"
                                    src={`${process.env.PUBLIC_URL}/${data.image}`}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-12">
                    <span className="border-line d-flex w-100"></span>
                </div> */}
            </div>
        </div>
    );
};

Intro.propTypes = {
    data: PropTypes.object,
};

export default Intro;
