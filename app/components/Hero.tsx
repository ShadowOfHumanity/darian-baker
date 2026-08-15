import Image from "next/image";
import { contactLinks, profile } from "@/app/content/portfolio";
import { Badge } from "@/components/ui/Badge";

export default function Hero() {
  const linkedIn = contactLinks.find((link) => link.label === "LinkedIn");

  return (
    <section id="about" className="hero" aria-labelledby="hero-title">
      <Image
        src="/darian-baker.jpg"
        alt={profile.name}
        width={112}
        height={112}
        priority
        className="hero__portrait"
      />
      <Badge className="hero__role evidence-stitch">{profile.role}</Badge>
      <h1 id="hero-title">{profile.headline}</h1>
      <p className="hero__intro">{profile.intro}</p>
      <div className="hero__actions">
        <a className="button-link" href="#work">
          View selected work
        </a>
        {linkedIn ? (
          <a
            className="text-link"
            href={linkedIn.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {linkedIn.label}
          </a>
        ) : null}
      </div>
      <p className="hero__about">
        <strong>About me —</strong> {profile.about} {profile.location}.
      </p>
    </section>
  );
}
