import "./Skeleton.scss";

export function AboutSkeleton() {
  return (
    <div className="skeleton-grid skeleton-grid--about">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton skeleton--rect skeleton-card__img" />
          <div className="skeleton skeleton-card__title" />
          <div className="skeleton skeleton-card__line" />
        </div>
      ))}
    </div>
  );
}

export function ProjectsSkeleton() {
  return (
    <div className="skeleton-grid skeleton-grid--projects">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton skeleton--rect skeleton-card__project-img" />
          <div className="skeleton skeleton-card__title" />
          <div className="skeleton skeleton-card__line" />
        </div>
      ))}
    </div>
  );
}

export function EducationSkeleton() {
  return (
    <div className="skeleton-grid skeleton-grid--education">
      {[1, 2].map((i) => (
        <div key={i} className="skeleton-card skeleton-card--tall" />
      ))}
    </div>
  );
}

export function WorkSkeleton() {
  return (
    <div className="skeleton-work">
      {[1, 2, 3].map((i) => (
        <div key={i} className="skeleton-card skeleton-card--work-row" />
      ))}
    </div>
  );
}

export function SkillsSkeleton() {
  return (
    <div className="skeleton-skills">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="skeleton-skills__card" />
      ))}
    </div>
  );
}

export function TestimonialSkeleton() {
  return <div className="skeleton-testimonial" aria-hidden="true" />;
}
