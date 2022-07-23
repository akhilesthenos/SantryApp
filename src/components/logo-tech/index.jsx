import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LogoTech = ({ image, classOption }) => {
    return (
        <Link className={`${classOption}`} to={process.env.PUBLIC_URL + "/"}>
            <img
                className="logo-main"
                src={process.env.PUBLIC_URL + image}
                alt="Logo"
            />
        </Link>
    );
};

LogoTech.propTypes = {
    image: PropTypes.string,
    classOption: PropTypes.string,
};

LogoTech.defaultProps = {
    classOption: "text-center",
};

export default LogoTech;
