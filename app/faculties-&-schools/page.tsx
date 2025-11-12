import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Faculties & Schools | Global University",
  description: "Explore Global University's faculties and schools offering diverse academic programs.",
  openGraph: {
    title: "Faculties & Schools | Global University",
    description: "Explore our faculties and schools.",
  },
};

const faculties = [
  {
    name: "Faculty of Business Administration",
    description: "Comprehensive business education with a focus on leadership, innovation, and global perspectives.",
    programs: ["BBA", "MBA", "Accounting", "Finance"],
  },
  {
    name: "Faculty of Health Sciences",
    description: "Cutting-edge programs in medicine, nursing, and allied health professions.",
    programs: ["Medicine", "Nursing", "Public Health", "Pharmacy"],
  },
  {
    name: "Faculty of Engineering",
    description: "Innovative engineering programs with state-of-the-art laboratories and facilities.",
    programs: ["Computer Engineering", "Civil Engineering", "Electrical Engineering", "Mechanical Engineering"],
  },
  {
    name: "Faculty of Arts & Humanities",
    description: "Rich programs in literature, languages, and cultural studies.",
    programs: ["English Literature", "History", "Philosophy", "Languages"],
  },
];

export default function FacultiesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold sm:text-5xl">Faculties & Schools</h1>
            <p className="mt-4 text-lg text-gray-100">
              Excellence across disciplines
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Faculties</h2>
              <p className="text-lg text-muted-foreground">
                Global University is organized into several faculties, each dedicated to excellence 
                in teaching and research within their respective fields.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {faculties.map((faculty, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl">{faculty.name}</CardTitle>
                    <CardDescription>{faculty.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold mb-2">Programs Offered:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {faculty.programs.map((program, programIndex) => (
                          <li key={programIndex}>{program}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

