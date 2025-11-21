import Container from "@/components/layout/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, FileText } from "lucide-react";
import { FadeIn, StaggerContainer } from "@/components/ui/motion";

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

export default function Campuses() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <FadeIn className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            Visit Global University
          </div>
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl tracking-tight">
            Our <span className="text-primary">Campuses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience our world-class facilities at one of our convenient locations in the heart of Lebanon.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {campuses.map((campus, index) => (
            <FadeIn
              key={index}
              delay={index * 0.2}
              className="h-full"
            >
              <Card className="group h-full overflow-hidden rounded-3xl border-border/50 bg-surface shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 bg-muted relative overflow-hidden">
                  {/* Placeholder for Campus Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-muted-foreground font-medium">
                    {campus.name} Image
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>

                <CardHeader className="pb-2">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="p-2.5 rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{campus.name}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed pl-12">
                    {campus.address}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 pt-4 pl-12">
                  <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-3 transition-colors hover:text-primary">
                      <Phone className="h-4 w-4" />
                      <span className="font-medium">Tel: {campus.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4" />
                      <span>Fax: {campus.fax}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
