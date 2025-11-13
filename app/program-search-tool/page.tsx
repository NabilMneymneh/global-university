"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ProgramSearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");

  const allPrograms = [
    { name: "Bachelor of Business Administration", level: "Undergraduate", category: "Business" },
    { name: "Master of Business Administration", level: "Graduate", category: "Business" },
    { name: "Medicine", level: "Undergraduate", category: "Health Sciences" },
    { name: "Nursing", level: "Undergraduate", category: "Health Sciences" },
    { name: "Computer Engineering", level: "Undergraduate", category: "Engineering" },
    { name: "Civil Engineering", level: "Undergraduate", category: "Engineering" },
    { name: "English Literature", level: "Undergraduate", category: "Arts & Humanities" },
    { name: "History", level: "Undergraduate", category: "Arts & Humanities" },
  ];

  const filteredPrograms = allPrograms.filter((program) => {
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "all" || program.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Program Search Tool"
          description="Find the perfect program for you"
          eyebrow="Explore Programs"
        />

        <section className="py-16">
          <Container>
            <div className="mb-8 space-y-4">
              <Input
                type="text"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md"
              />
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedLevel === "all" ? "default" : "outline"}
                  onClick={() => setSelectedLevel("all")}
                >
                  All Levels
                </Button>
                <Button
                  variant={selectedLevel === "Undergraduate" ? "default" : "outline"}
                  onClick={() => setSelectedLevel("Undergraduate")}
                >
                  Undergraduate
                </Button>
                <Button
                  variant={selectedLevel === "Graduate" ? "default" : "outline"}
                  onClick={() => setSelectedLevel("Graduate")}
                >
                  Graduate
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPrograms.map((program, index) => (
                <Card
                  key={index}
                  className="rounded-2xl border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-2xl"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{program.name}</CardTitle>
                    <CardDescription>
                      {program.level} • {program.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPrograms.length === 0 && (
              <div className="rounded-2xl border border-dashed border-border bg-muted/40 py-12 text-center">
                <p className="text-muted-foreground">No programs found matching your criteria.</p>
              </div>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
