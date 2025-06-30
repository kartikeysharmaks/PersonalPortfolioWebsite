import { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Appwrap, Motionwrap } from "../../Wrapper";
import { urlFor, client } from "../../client";
import "./Testimonials.scss";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';
    client.fetch(query).then(setTestimonials);
    client.fetch(brandsQuery).then(setBrands);
  }, []);

  const prevTestimonial = () =>
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  const nextTestimonial = () =>
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);

  return (
    <section aria-labelledby="testimonial-heading">
      {testimonials.length > 0 && (
        <div className="app__testimonial-item app__flex">
          <img
            src={urlFor(testimonials[currentIndex].imgurl)}
            alt={`DP of ${testimonials[currentIndex].name}`}
            loading="lazy"
            decoding="async"
            width="100"
            height="100"
            crossorigin="anonymous"
          />
          <div className="app__testimonial-content">
            <p className="p-text">"{testimonials[currentIndex].feedback}"</p>
            <div>
              <h3 className="bold-text">{testimonials[currentIndex].name}</h3>
              <h4 className="p-text">{testimonials[currentIndex].company}</h4>
            </div>
          </div>
        </div>
      )}
      <div className="app__testimonial-btns app__flex" aria-label="Testimonial navigation">
        <button
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
          className="app__flex nav-btn"
        >
          <HiChevronLeft />
        </button>
        <button
          onClick={nextTestimonial}
          aria-label="Next testimonial"
          className="app__flex nav-btn"
        >
          <HiChevronRight />
        </button>
      </div>
      <div
        className="app__testimonial-brands app__flex"
        // aria-label="Brands I've worked with"
      >
        {brands.map((brand) => (
          <div
            key={brand._id}
            className="app__brand-logo"
            aria-hidden="true"
          >
            <img
              src={urlFor(brand.imgUrl)}
              alt={`${brand.name} logo`}
              loading="lazy"
              decoding="async"
              width="100"
              height="50"
              crossorigin="anonymous"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Appwrap(
  Motionwrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
