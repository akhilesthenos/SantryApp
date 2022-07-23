import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import ContactContainer from "../containers/contact";
import NewsletterArea from "../containers/global/newsletter";
import RoadMap from "../containers/home/roadmap1";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import CareerContainer from "../containers/career";
import MasteryBody from "../containers/mastery-body";

const CareerPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="VIAN – Contact" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Join Us"
                        excerpt="We offer you the opportunity to solve some of 
                        the most interesting challenges our society have which 
                        will be equally compensated by our team-driven culture 
                        and rewards for individual talent. Send your profile at 
                        career@viancapital.com"
                        image="./images/career/1.png"
                    />
                    <CareerContainer />
                    <MasteryBody />
                    {/* <RoadMap /> */}
                    {/* <ContactContainer /> */}
                    {/* <NewsletterArea /> */}
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default CareerPage;
