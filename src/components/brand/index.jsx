import PropTypes from "prop-types";

const Brand = ({ data }) => {
    return (
        <div className="single-brand">
            <img
                src={process.env.PUBLIC_URL + data.image}
                className="hover-effect"
                alt="brand logo"
            />
        </div>
    );
};

Brand.propTypes = {
    data: PropTypes.object,
};

export default Brand;
