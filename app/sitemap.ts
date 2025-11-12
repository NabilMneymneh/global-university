import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gu.edu.lb";

  const routes = [
    "",
    "/about",
    "/academics",
    "/admissions",
    "/student-life",
    "/programs-&-degrees",
    "/program-search-tool",
    "/research-&-innovation",
    "/faculties-&-schools",
    "/academic-calendar",
    "/academic-catalogue",
    "/history-&-mission",
    "/leadership-&-governance",
    "/accreditation-&-affiliations",
    "/rankings-&-recognition",
    "/continuing-education-&-professional-development",
    "/social-development-&-sustainability-initiatives",
    "/strategic-plan",
    "/facts-&-figures",
    "/campuses-&-maps",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}

