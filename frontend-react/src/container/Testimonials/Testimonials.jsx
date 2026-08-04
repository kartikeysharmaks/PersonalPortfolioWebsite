import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { usePortfolio } from "../../context/PortfolioContext";
import { urlForImage } from "../../lib/sanity";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { TestimonialSkeleton } from "../../components/Skeleton/Skeleton";
import "./Testimonials.scss";

function Testimonials() {
  const { portfolio, loading } = usePortfolio();
  const testimonials = portfolio?.testimonials ?? [];
  const brands = portfolio?.brands ?? [];
  const [index, setIndex] = useState(0);

  const current = testimonials[index];
  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section
      id="testimonials"
      className="testimonials section"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <SectionHeader
          index="06"
          label="Testimonials"
          funk="Don't take my word for it."
          titleBefore="Kind"
          highlight="words"
          highlightVariant="blue"
          subtitle="What collaborators and clients have said about working together."
        />

        {loading && testimonials.length === 0 ? (
          <TestimonialSkeleton />
        ) : (
          testimonials.length > 0 && (
            <>
              <blockquote
                key={index}
                className="testimonials__quote brutal-card testimonials__quote--animate"
              >
                <img
                  src={urlForImage(current.imgurl, { width: 120, quality: 85 })}
                  alt=""
                  width="80"
                  height="80"
                  loading="lazy"
                />
                <div>
                  <p className="testimonials__text">
                    &ldquo;{current.feedback}&rdquo;
                  </p>
                  <footer>
                    <cite className="testimonials__name display">
                      {current.name}
                    </cite>
                    <span className="mono testimonials__company">
                      {current.company}
                    </span>
                  </footer>
                </div>
              </blockquote>

              {testimonials.length > 1 && (
                <div
                  className="testimonials__nav"
                  aria-label="Testimonial navigation"
                >
                  <button
                    type="button"
                    className="testimonials__btn"
                    onClick={prev}
                    aria-label="Previous testimonial"
                  >
                    <HiChevronLeft aria-hidden="true" />
                  </button>
                  <span
                    className="mono testimonials__counter"
                    aria-live="polite"
                  >
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(testimonials.length).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    className="testimonials__btn"
                    onClick={next}
                    aria-label="Next testimonial"
                  >
                    <HiChevronRight aria-hidden="true" />
                  </button>
                </div>
              )}
            </>
          )
        )}

        {brands.length > 0 && (
          <div
            className="testimonials__brands-section"
            aria-labelledby="brands-title"
          >
            <div className="testimonials__brands-header">
              <p className="testimonials__brands-kicker mono">
                / Selected brands
              </p>

              <h3
                id="brands-title"
                className="testimonials__brands-title display"
              >
                Brands I&apos;ve{" "}
                <span className="testimonials__brands-highlight">
                  worked with.
                </span>
              </h3>

              <p className="testimonials__brands-sub">
                A few brands and teams I&apos;ve worked with and contributed to.
              </p>
            </div>

            <div className="testimonials__brands">
              {brands.map((brand) => (
                <div
                  key={brand._id}
                  className="testimonials__brand brutal-card"
                  title={brand.name || undefined}
                >
                  <img
                    src={urlForImage(brand.imgUrl, {
                      width: 180,
                      quality: 85,
                    })}
                    alt={brand.name ? `${brand.name} logo` : "Brand logo"}
                    loading="lazy"
                    width="140"
                    height="48"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;
