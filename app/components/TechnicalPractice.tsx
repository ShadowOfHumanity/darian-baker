import { supportingNotes, technicalPractice } from "@/app/content/portfolio";

export default function TechnicalPractice() {
  return (
    <section
      aria-labelledby="technical-practice-heading"
      className="section site-shell"
      id="practice"
    >
      <h2 className="section-label" id="technical-practice-heading">
        Technical practice
      </h2>

      <div className="practice-grid">
        {technicalPractice.map((group) => (
          <article className="practice-group" key={group.label}>
            <h3>{group.label}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <dl className="supporting-notes">
        <div>
          <dt>Education</dt>
          <dd>{supportingNotes.education}</dd>
        </div>
        <div>
          <dt>Open source</dt>
          <dd>{supportingNotes.openSource}</dd>
        </div>
      </dl>

      <p className="practice-background">{supportingNotes.gameDevelopment}</p>
    </section>
  );
}
