import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function MovieBannerCarousel({ banners = [] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
  }

  if (!banners || banners.length === 0) {
    return (
      <div className="flex items-center justify-center h-[60vh] sm:h-[90vh] bg-black text-white">
        Loading banners...
      </div>
    )
  }

  return (
    <div className="relative w-full h-[48vh] sm:h-[70vh] lg:h-[90vh] overflow-hidden">
      <Slider {...settings} className="h-full">
        {banners.map((banner) => (
          <div key={banner.id} className="relative w-full h-[48vh] sm:h-[70vh] lg:h-[90vh]">
            {/* Banner Image */}
            <img
              src={banner.backdropPath}
              alt={banner.title}
              className="w-full h-full object-cover object-center"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-4 sm:bottom-16 left-4 sm:left-12 max-w-[85%] sm:max-w-xl">
              <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-4 drop-shadow-lg">
                {banner.title}
              </h1>
              <p className="text-xs sm:text-base md:text-lg text-gray-200 mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                {banner.overview}
              </p>
              <button className="bg-white text-black px-3 sm:px-6 py-1.5 sm:py-2 rounded-md font-semibold hover:bg-gray-200 transition">
                Play
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default MovieBannerCarousel
