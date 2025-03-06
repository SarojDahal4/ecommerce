import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./components.css";


const Banner = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, // Fixed the typo
    autoplay: true, // Changed 'auto' to 'autoplay'
    autoplaySpeed: 5000,
    arrows: true,
  };

  const images = [
    "/image/banner1.avif",
    "/image/banner2.avif",
    "/image/banner3.jpg",
    "/image/banner5.webp",
  ];

  return (
    <div className="bannerContainer">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
