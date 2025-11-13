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
    id: "administrative",
    name: "Faculty of Administrative Sciences",
    description: "Comprehensive business education with a focus on leadership, innovation, and global perspectives. Prepare for success in today's competitive business environment.",
    programs: [
      "Accounting / المحاسبة",
      "Human Resources Management / إدارة الموارد البشرية",
      "Management / الإدارة",
      "Marketing / التسويق",
      "Masters of Business Administration / ماجستير في إدارة الأعمال",
    ],
    icon: "💼",
  },
  {
    id: "health",
    name: "Faculty of Health Sciences",
    description: "Cutting-edge programs in medicine, nursing, and allied health professions. Join the healthcare workforce with confidence and expertise.",
    programs: [
      "Medical Lab Sciences / علوم المختبرات الطبية",
      "Nursing / تمريض",
      "Nutrition and Dietetics / التغذية وتنظيم الوجبات",
      "Physical Therapy / العلاج الفيزيائي",
    ],
    icon: "❤️",
  },
  {
    id: "literature",
    name: "Faculty of Literature & Humanities",
    description: "Rich programs in literature, languages, and cultural studies. Explore the depth of human expression and communication.",
    programs: [
      "Arabic Language and Literature / اللغة العربية وآدابها",
      "English Education / تعليم اللغة الانجليزية",
      "English and Early Childhood Education / تعليم اللغة الانجليزية والطفولة المبكرة",
      "Math Education / تعليم الرياضيات",
      "Science Education / تعليم العلوم",
      "Teaching Diploma / دبلوم في التعليم",
      "Masters in Education / ماجستير في التربية والتعليم",
      "Masters in Arabic Language and Literature / ماجستير في اللغة العربية وآدابها",
    ],
    icon: "📚",
  },
];

export default function FacultiesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="container-shell">
            <h1 className="text-4xl font-bold sm:text-5xl">Faculties & Schools</h1>
            <p className="mt-4 text-lg text-gray-100">
              Excellence across disciplines
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-shell">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Faculties</h2>
              <p className="text-lg text-muted-foreground">
                Global University is organized into several faculties, each dedicated to excellence 
                in teaching and research within their respective fields.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {faculties.map((faculty, index) => (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary group overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-primary to-primary-dark"></div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl">{faculty.icon}</span>
                      <CardTitle className="text-xl">{faculty.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{faculty.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Programs Offered:</h4>
                      <ul className="space-y-2 text-sm">
                        {faculty.programs.map((program, programIndex) => (
                          <li key={programIndex} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-muted-foreground">{program}</span>
                          </li>
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

