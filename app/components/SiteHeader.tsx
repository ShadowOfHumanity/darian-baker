import { navigation, profile } from "@/app/content/portfolio";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="site-header__inner site-shell" aria-label="Primary">
        <a className="site-header__mark" href="#about">
          {profile.name}
        </a>
        <ul className="site-header__navigation">
          {navigation.map((item) => (
            <li key={item.href}>
              <a className="text-link" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
