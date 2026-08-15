import { contactLinks, profile } from "@/app/content/portfolio";

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section aria-labelledby="contact-label" className="contact-section" id="contact">
        <div className="contact-section__inner site-shell">
          <div>
            <p className="section-label" id="contact-label">
              Contact
            </p>
            <h2 id="contact-heading">{profile.headline}</h2>
            <p>{profile.intro}</p>
          </div>

          <nav aria-label="Contact links">
            <ul className="contact-links">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { rel: "noreferrer noopener", target: "_blank" }
                      : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__inner site-shell">
          <p>
            © {currentYear} {profile.name}
          </p>
        </div>
      </footer>
    </>
  );
}
