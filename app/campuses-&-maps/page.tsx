import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Campuses & Maps | Global University",
  description: "Find Global University campus locations and maps.",
  openGraph: {
    title: "Campuses & Maps | Global University",
    description: "Campus locations and maps.",
  },
};

const campuses = [
  {
    name: "Batrakiyeh Campus",
    address: "Batrakiyeh street, Beirut P.O. Box 15-5085 Lebanon",
    phone: "(+961) 1358058",
    fax: "(+961) 1358059",
  },
  {
    name: "Doha Campus",
    address: "Dohat el Hoss, Beirut P.O. Box 15-5085 Lebanon",
    phone: "(+961) 1358058",
    fax: "(+961) 1358059",
  },
];

export default function CampusesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Campuses & Maps"
          description="Find our campus locations and plan your visit"
          eyebrow="Visit Us"
        />

        <section className="py-16">
          <Container>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {campuses.map((campus, index) => (
                <Card
                  key={index}
                  className="rounded-2xl border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-2xl"
                >
                  <CardHeader>
                    <div className="mb-3 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <CardTitle className="text-2xl">{campus.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {campus.address}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>Tel: {campus.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>Fax: {campus.fax}</span>
                    </div>
                    <Button variant="outline" className="mt-4 w-full">
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
