import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Music, Camera, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Student Life | Global University",
  description: "Discover student life at Global University - clubs, activities, services, and campus community.",
  openGraph: {
    title: "Student Life | Global University",
    description: "Experience vibrant student life at Global University.",
  },
};

const clubs = [
  {
    icon: Users,
    name: "Student Government",
    description: "Represent student interests and organize campus events.",
  },
  {
    icon: BookOpen,
    name: "Literary Society",
    description: "For students passionate about reading and writing.",
  },
  {
    icon: Music,
    name: "Music Club",
    description: "Join fellow musicians for performances and jam sessions.",
  },
  {
    icon: Camera,
    name: "Photography Club",
    description: "Capture campus life and explore your creative side.",
  },
  {
    icon: Heart,
    name: "Community Service",
    description: "Give back to the community through volunteer work.",
  },
];

export default function StudentLifePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold sm:text-5xl">Student Life</h1>
            <p className="mt-4 text-lg text-gray-100">
              A vibrant campus community awaits you
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Campus Activities</h2>
              <p className="text-lg text-muted-foreground">
                At Global University, student life extends beyond the classroom. Join clubs, 
                participate in events, and build lasting friendships.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {clubs.map((club, index) => {
                const Icon = club.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle>{club.name}</CardTitle>
                      <CardDescription>{club.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Student Services</CardTitle>
                  <CardDescription>Support for your success</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Academic advising</li>
                    <li>• Career counseling</li>
                    <li>• Health services</li>
                    <li>• Housing assistance</li>
                    <li>• Disability support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Campus Facilities</CardTitle>
                  <CardDescription>Modern amenities for students</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Library and study spaces</li>
                    <li>• Sports facilities</li>
                    <li>• Dining services</li>
                    <li>• Student lounges</li>
                    <li>• Computer labs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

