import { selectedWork } from "@/app/content/portfolio";

export default function SelectedWork() {
  return (
    <section aria-labelledby="selected-work-heading" className="section site-shell" id="work">
      <h2 className="section-label" id="selected-work-heading">
        Selected work
      </h2>

      <div className="work-grid">
        {selectedWork.map((item) => (
          <article className="work-item" key={item.title}>
            <p className="section-label">{item.eyebrow}</p>
            <h3>{item.title}</h3>
            {"role" in item && "period" in item ? (
              <p className="work-item__meta">
                <span>{item.role}</span>
                <span>{item.period}</span>
              </p>
            ) : null}
            <p>{item.summary}</p>

            <ul className="evidence-list">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>

            <ul aria-label={`${item.title} technologies`} className="technology-list">
              {item.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>

            {"href" in item && "linkLabel" in item ? (
              <a
                className="text-link"
                href={item.href}
                rel="noreferrer noopener"
                target="_blank"
              >
                {item.linkLabel}
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
