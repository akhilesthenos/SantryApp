import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/button";
import MasteryContainer from "../../components/VianTechContainer/mastery-container";

const MasteryBody = () => {
    return (
        <React.Fragment>
            <div className={`feature-section position-relative bg-white `}>
                <div className="container custom-container">
                    <div className="row g-0 align-items-center">
                        <div className="col-xl-9 col-lg-9 mx-auto my-4 text-center">
                            <MasteryContainer />
                            <div className="title-section d-flex justify-content-center">
                                <p className="mb-10">
                                    We are expanding our tech team. Please visit{" "}
                                    <NavLink
                                        className="hover-color"
                                        to={
                                            process.env.PUBLIC_URL + "/viantech"
                                        }
                                    >
                                        tech.vian.com
                                    </NavLink>{" "}
                                    for details.
                                </p>
                            </div>
                            <Button
                                classOption="btn btn-lg btn-dark btn-hover-dark"
                                text="Apply Now"
                                path="/viantech"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MasteryBody;
