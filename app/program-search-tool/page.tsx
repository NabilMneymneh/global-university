"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold sm:text-5xl">Program Search Tool</h1>
            <p className="mt-4 text-lg text-gray-100">
              Find the perfect program for you
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 space-y-4">
              <Input
                type="text"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md"
              />
              <div className="flex gap-2">
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
                <Card key={index} className="hover:shadow-lg transition-shadow">
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
              <div className="text-center py-12">
                <p className="text-muted-foreground">No programs found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
