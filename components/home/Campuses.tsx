import Container from "@/components/layout/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, FileText } from "lucide-react";

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
    <section className="py-16 bg-muted/30">
      <Container>
        <div className="text-center mb-12 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Visit Global University
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Our Campuses
          </h2>
          <p className="text-lg text-muted-foreground">
            Visit us at one of our convenient locations
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {campuses.map((campus, index) => (
              <Card
                key={index}
                className="feature-card rounded-2xl border border-border bg-background shadow-sm"
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
                <Button variant="outline" className="secondary-button mt-4 w-full">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

