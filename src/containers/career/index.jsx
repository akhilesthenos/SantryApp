import React from "react";
import Button from "../../components/button";
import IconBox from "../../components/icon-box";
import ScrollToTop from "../../components/scroll-to-top";
import SectionTitle from "../../components/section-title";
import SEO from "../../components/seo";
import Layout from "../../layouts";
import Footer from "../../layouts/footer";
import Header from "../../layouts/header";
import NewsletterArea from "../global/newsletter";
import PageBanner from "../global/page-banner";
import ServiceDetailsContainer from "../service/service-details";
import { NavLink } from "react-router-dom";
import MasteryContainer from "../../components/VianTechContainer/mastery-container";

const CareerContainer = () => {
    return (
        <React.Fragment>
            <div className={`feature-section position-relative bg-white `}>
                {/* <img
                    className="path-img"
                    // src={`${process.env.PUBLIC_URL}/images/feature/shape.png`}
                    alt="images_not_found"
                /> */}
                <div className="container custom-container">
                    <div className="row g-0 align-items-center">
                        <div className="col-xl-9 col-lg-9 mx-auto my-4 text-center">
                            <SectionTitle
                                classOption="title-section mt-5"
                                // subTitle="Career"
                                // title="We are <span class='text-primary'>different</span> because..."
                                title="Building the Future of Payments <br/><span class='text-primary'>&amp;</span> Lending"
                                excerptClassOption="mb-10"
                                excerpt="We are building a movement to empower and enable millions of merchants 
                                to start accepting digital payments and get easy access to credit.<br/><br/>
                                We are a highly motivated team, and the culture is open
                                and collaborative. We are committed towards building a
                                culture that brings everyone together, nurtures
                                creativity and encourages growth. We take ownership of
                                our work and get results!<br/>
                              
                                <br/>
                                And yes! Coffee is on the house!"
                            />
                            {/* <MasteryContainer />
                            <p className="mb-10">
                                We are expanding our tech team. Please visit{" "}
                                <NavLink
                                    to={process.env.PUBLIC_URL + "/vianTech"}
                                >
                                    About
                                </NavLink>{" "}
                                for details.
                            </p>
                            <Button
                                classOption="btn btn-lg btn-dark btn-hover-dark"
                                text="Get Started"
                                path="/vianTech"
                            /> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="row">
                <div className="col-12">
                    <h4 className="bg-white d-flex justify-content-center center-head">
                        Building the Future of Payments &amp; Lending
                    </h4>
                    <hr className="hr-style" />
                    <p className="bg-white custom-p">
                        We are building a movement to empower and enable
                        millions of merchants to start accepting digital
                        payments and get easy access to credit.
                    </p>
                    <p className="bg-white custom-p">
                        We are a highly motivated team, and the culture is open
                        and collaborative. We are committed towards building a
                        culture that brings everyone together, nurtures
                        creativity and encourages growth. We take ownership of
                        our work and get results!
                    </p>
                    <p className="bg-white custom-p">
                        And yes! Coffee is on the house!
                    </p>
                </div>
            </div> */}
            {/* </div> */}
        </React.Fragment>
    );
};

export default CareerContainer;
