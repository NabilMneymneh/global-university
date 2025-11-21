import Link from "next/link";
import { FadeIn, StaggerContainer } from "@/components/ui/motion";

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
    <footer className="bg-[#0B1120] text-white border-t border-white/10 mt-20">
      <div className="container-shell py-16">
        <StaggerContainer className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <FadeIn delay={0.1}>
            <h3 className="text-xl font-bold mb-6 text-white">Global University</h3>
            <p className="text-base text-gray-400 leading-relaxed">
              A premier institution of higher education in Lebanon, committed to excellence in teaching, research, and community engagement.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-primary">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-primary">Academics</h4>
            <ul className="space-y-3">
              {footerLinks.academics.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-primary">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>
        </StaggerContainer>

        <FadeIn delay={0.5} className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-center text-sm text-gray-500">
              Powered by Global University
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/school/globaluniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/GlobalUniversityLebanon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/globaluniversitylebanon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@globaluniversitylebanon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                aria-label="YouTube"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.997 2.997 0 0 0-2.112-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.386.566a2.997 2.997 0 0 0-2.112 2.12C0 8.08 0 12 0 12s0 3.92.502 5.814a2.997 2.997 0 0 0 2.112 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.386-.566a2.997 2.997 0 0 0 2.112-2.12C24 15.92 24 12 24 12s0-3.92-.502-5.814ZM9.75 15.568V8.432L15.818 12l-6.068 3.568Z" />
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}

