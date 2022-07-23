import { useEffect, useRef } from "react";
import SectionTitle from "../../../components/section-title";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/effect-fade/effect-fade";
import "swiper/modules/navigation/navigation";
import "swiper/modules/pagination/pagination";

import Testimonial from "../../../components/testimonial";
import HomeData from "../../../data/home.json";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import Parallax from "parallax-js";
import ProductCarouselDetails from "../../product-carousel";
import AOS from "aos";
import "aos/dist/aos.css";

SwiperCore.use([Navigation]);
const ProductCarousel = () => {
    const swiperOption = {
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        spaceBetween: 0,
        navigation: {
            nextEl: ".product-carousel .swiper-button-next",
            prevEl: ".product-carousel .swiper-button-prev",
        },
    };
    const sceneEl = useRef(null);
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    // useEffect(() => {
    //     const parallaxInstance = new Parallax(sceneEl.current, {
    //         relativeInput: true,
    //     });

    //     parallaxInstance.enable();

    //     return () => parallaxInstance.disable();
    // }, []);
    return (
        <div className="section position-relative">
            <div className="hero-shapeTech1">
                <img
                    src={`${process.env.PUBLIC_URL}/images/logo/icon-bgless.png`}
                    alt="shape"
                />
            </div>

            <div className="hero-shapeTech2">
                <h1 className="products-head">What&apos;s in it for you?</h1>
            </div>

            <div className="testimonial-section position-relative products-background">
                <div className="container">
                    <div className="row mb-n7">
                        <div className="col-12 mb-7">
                            <div className="product-carousel position-relative">
                                <Swiper {...swiperOption}>
                                    {HomeData[6].products &&
                                        HomeData[6].products.map(
                                            (single, key) => {
                                                return (
                                                    <SwiperSlide key={key}>
                                                        <ProductCarouselDetails
                                                            key={key}
                                                            data={single}
                                                        />
                                                    </SwiperSlide>
                                                );
                                            }
                                        )}
                                </Swiper>
                                <div
                                    data-aos="fade-left"
                                    data-aos-offset="300"
                                    // data-aos-easing="ease-in-sine"
                                >
                                    <div className="swiper-button-prev productCarouselBtn">
                                        <i className="icofont-rounded-left"></i>
                                    </div>
                                </div>
                                <div
                                    data-aos="fade-right"
                                    data-aos-offset="300"
                                    // data-aos-easing="ease-in-sine"
                                >
                                    <div className="swiper-button-next productCarouselBtn">
                                        <i className="icofont-rounded-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCarousel;
