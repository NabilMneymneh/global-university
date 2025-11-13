import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alumni | Global University",
  description: "Connect with Global University alumni network and stay engaged with your alma mater.",
  openGraph: {
    title: "Alumni | Global University",
    description: "Join our vibrant alumni community.",
  },
};

export default function AlumniPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="container-shell">
            <h1 className="text-4xl font-bold sm:text-5xl">Alumni</h1>
            <p className="mt-4 text-lg text-gray-100">
              Stay connected with your alma mater
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-shell">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Alumni Network</h2>
              <p className="text-lg text-muted-foreground">
                Join our vibrant community of Global University alumni. Stay connected, network with fellow graduates, 
                and continue to be part of the Global University family.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              <Card className="hover:shadow-xl transition-shadow border-2">
                <CardHeader>
                  <CardTitle>Alumni Events</CardTitle>
                  <CardDescription>Join us for networking and social events</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    Attend annual reunions, networking events, and professional development workshops designed for alumni.
                  </p>
                  <Button variant="outline" className="w-full">
                    View Events
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-2">
                <CardHeader>
                  <CardTitle>Alumni Benefits</CardTitle>
                  <CardDescription>Exclusive perks for graduates</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    Access to library resources, career services, and continuing education programs at special rates.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-2">
                <CardHeader>
                  <CardTitle>Stay Connected</CardTitle>
                  <CardDescription>Update your information</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    Keep your contact information up to date to receive news, event invitations, and alumni communications.
                  </p>
                  <Button variant="outline" className="w-full">
                    Update Profile
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary-dark/10 p-8 rounded-lg border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Share Your Success Story</h3>
              <p className="text-muted-foreground mb-6">
                We love hearing from our alumni! Share your achievements, career milestones, or how Global University 
                has impacted your life.
              </p>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

