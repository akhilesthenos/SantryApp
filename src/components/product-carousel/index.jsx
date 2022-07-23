import PropTypes from "prop-types";

const ProductCarouselDetails = ({ data }) => {
    return (
        <div className="testimonial-slide-item swiper-slide row">
            {/* <span className="quote zmdi zmdi-quote"></span> */}
            {/* <h1 className="products-head"></h1> */}
            <div className="products-head-space"></div>
            <div className="col-6 col-sm-12 col-md-6  d-flex justify-content-center align-items-center">
                <p className="testimonial-text mt-2 mb-5 products-one">
                    {data.excerpt}
                </p>
            </div>
            <div className="col-6 col-sm-12 col-md-6">
                <div className="avater-info">
                    <div className="avater d-flex">
                        <div className="avater-profile">
                            <img
                                src={process.env.PUBLIC_URL + data.authorThumb}
                                alt="avater"
                            />
                        </div>
                    </div>
                    {/* <p>{data.name}</p>
                    <span>{data.designation}</span> */}
                </div>
            </div>
            {/* <p className="testimonial-text mt-2 mb-5">{data.excerpt}</p> */}
            {/* <div className="avater d-flex">
                 <div className="avater-profile">
                    <img
                        src={process.env.PUBLIC_URL + data.authorThumb}
                        alt="avater"
                    />
                </div> 
                <div className="avater-info">
                    <p>{data.name}</p>
                    <span>{data.designation}</span>
                </div>
            </div> */}
        </div>
    );
};

ProductCarouselDetails.propTypes = {
    data: PropTypes.object,
};

export default ProductCarouselDetails;
