import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { name: "History & Mission", href: "/history-&-mission" },
      { name: "Leadership & Governance", href: "/leadership-&-governance" },
      { name: "Accreditation & Affiliations", href: "/accreditation-&-affiliations" },
      { name: "Rankings & Recognition", href: "/rankings-&-recognition" },
    ],
    academics: [
      { name: "Faculties & Schools", href: "/faculties-&-schools" },
      { name: "Programs & Degrees", href: "/programs-&-degrees" },
      { name: "Academic Calendar", href: "/academic-calendar" },
      { name: "Academic Catalogue", href: "/academic-catalogue" },
    ],
    resources: [
      { name: "Student Life", href: "/student-life" },
      { name: "Research & Innovation", href: "/research-&-innovation" },
      { name: "Continuing Education", href: "/continuing-education-&-professional-development" },
      { name: "Program Search Tool", href: "/program-search-tool" },
    ],
  };

  return (
    <footer className="bg-secondary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Global University</h3>
            <p className="text-sm text-gray-300">
              A premier institution of higher education in Lebanon, committed to excellence in teaching, research, and community engagement.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Academics</h4>
            <ul className="space-y-2">
              {footerLinks.academics.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} Global University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

