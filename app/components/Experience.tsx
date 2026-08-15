import { experience } from "@/app/content/portfolio";

export default function Experience() {
  return (
    <section aria-labelledby="experience-heading" className="section site-shell" id="experience">
      <h2 className="section-label" id="experience-heading">
        Experience
      </h2>

      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-item" key={`${item.company}-${item.period}`}>
            <div className="meta">
              <h3>{item.role}</h3>
              <p className="meta__company">{item.company}</p>
              <p>{item.period}</p>
              <p>{item.location}</p>
            </div>

            <div className="experience-item__evidence">
              <p>{item.summary}</p>

              <ul className="evidence-list">
                {item.evidence.map((evidenceItem) => (
                  <li key={evidenceItem}>{evidenceItem}</li>
                ))}
              </ul>

              <ul aria-label={`${item.company} technologies`} className="technology-list">
                {item.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
