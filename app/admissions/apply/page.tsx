"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";

const applicationSchema = z.object({
  // Personal Information
  firstName: z.string().min(1, "First name is required"),
  fathersName: z.string().min(1, "Father's name is required"),
  lastName: z.string().min(1, "Last name is required"),
  mothersMaidenName: z.string().min(1, "Mother's maiden name is required"),
  email: z.string().email("Invalid email address"),
  cellPhone: z.string().min(1, "Cell phone is required"),
  placeOfBirth: z.string().min(1, "Place of birth is required"),
  countryOfCitizenship: z.string().min(1, "Country of citizenship is required"),

  // Address
  city: z.string().min(1, "City is required"),
  area: z.string().min(1, "Area is required"),
  street: z.string().min(1, "Street is required"),
  building: z.string().optional(),
  floor: z.string().optional(),
  landline: z.string().optional(),

  // Academic Information
  faculty: z.string().min(1, "Faculty is required"),
  major: z.string().min(1, "Major is required"),
  state: z.string().min(1, "State is required"),
  county: z.string().min(1, "County is required"),
  section: z.string().min(1, "Section is required"),
  schoolName: z.string().min(1, "School or institute name is required"),
  year: z.string().min(1, "Year is required"),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

export default function ApplyPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });


  const selectedFaculty = watch("faculty");

  const onSubmit = async (data: ApplicationFormData) => {
    setLoading(true);
    try {
      // In a real application, you would send this data to your backend
      // await submitApplication(data);

      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
      setSubmitted(true);
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("There was an error submitting your application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const faculties = [
    {
      value: "administrative",
      label: "Faculty of Administrative Sciences",
      majors: [
        { value: "accounting", label: "Accounting / المحاسبة" },
        { value: "hr", label: "Human Resources Management / إدارة الموارد البشرية" },
        { value: "management", label: "Management / الإدارة" },
        { value: "marketing", label: "Marketing / التسويق" },
        { value: "mba", label: "Masters of Business Administration / ماجستير في إدارة الأعمال" },
      ],
    },
    {
      value: "health",
      label: "Faculty of Health Sciences",
      majors: [
        { value: "medical-lab", label: "Medical Lab Sciences / علوم المختبرات الطبية" },
        { value: "nursing", label: "Nursing / تمريض" },
        { value: "nutrition", label: "Nutrition and Dietetics / التغذية وتنظيم الوجبات" },
        { value: "physical-therapy", label: "Physical Therapy / العلاج الفيزيائي" },
      ],
    },
    {
      value: "literature",
      label: "Faculty of Literature & Humanities",
      majors: [
        { value: "arabic", label: "Arabic Language and Literature / اللغة العربية وآدابها" },
        { value: "english-education", label: "English Education / تعليم اللغة الانجليزية" },
        { value: "english-early", label: "English and Early Childhood Education / تعليم اللغة الانجليزية والطفولة المبكرة" },
        { value: "math-education", label: "Math Education / تعليم الرياضيات" },
        { value: "science-education", label: "Science Education / تعليم العلوم" },
        { value: "teaching-diploma", label: "Teaching Diploma / دبلوم في التعليم" },
        { value: "masters-education", label: "Masters in Education / ماجستير في التربية والتعليم" },
        { value: "masters-arabic", label: "Masters in Arabic Language and Literature / ماجستير في اللغة العربية وآدابها" },
      ],
    },
  ];

  const selectedFacultyData = faculties.find((f) => f.value === selectedFaculty);

  const countries = [
    "Lebanon", "Syria", "Jordan", "Palestine", "Egypt", "Saudi Arabia", "United Arab Emirates",
    "Kuwait", "Qatar", "Bahrain", "Oman", "Yemen", "Iraq", "United States", "Canada",
    "United Kingdom", "France", "Germany", "Australia", "Other",
  ];

  const states = [
    "محافظة بيروت", "محافظة جبل لبنان", "محافظة لبنان الشمالي",
    "محافظة لبنان الجنوبي", "محافظة البقاع", "محافظة النبطية",
    "محافظة بعلبك الهرمل", "محافظة عكار", "محافظة كسروان جبيل",
  ];

  const sections = [
    { value: "ls", label: "Life Sciences (LS) / علوم الحياة" },
    { value: "gs", label: "General Sciences (GS) / علوم عامة" },
    { value: "lh", label: "Literature and Humanities / الآداب والإنسانيات" },
    { value: "es", label: "Economics and Sociology (ES) / اقتصاد واجتماع" },
    { value: "bt", label: "Technical Baccalaureate Diploma (B.T.) / بكالوريا مهنية" },
    { value: "other", label: "Other / غير ذلك" },
  ];

  if (submitted) {
    return (
      <>
        <Header />
        <main>
          <PageHero
            title="Application Submitted"
            description="Thank you! We received your details and will be in touch soon."
            eyebrow="Admissions"
            align="center"
          />
          <section className="py-16">
            <Container className="max-w-2xl text-center">
              <div className="mb-8 flex flex-col items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-muted-foreground">
                  Your application has been submitted successfully. We will review your application and contact you soon.
                </p>
              </div>
              <Button asChild size="lg">
                <a href="/">Return to Home</a>
              </Button>
            </Container>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Application"
          description="Submit your details to join Global University."
          eyebrow="Admissions"
        />

        <section className="py-16 bg-muted/40">
          <Container className="max-w-5xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Card className="border border-border/60 shadow-lg">
                <CardHeader>
                  <CardTitle>Personal Information / المعلومات الشخصية</CardTitle>
                  <CardDescription>
                    Write your full name in English as it appears on your passport or identity card.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <FormInput
                      id="firstName"
                      placeholder="First Name / الاسم الأول *"
                      register={register("firstName")}
                      error={errors.firstName?.message}
                    />
                    <FormInput
                      id="fathersName"
                      placeholder="Father’s Name / اسم الأب *"
                      register={register("fathersName")}
                      error={errors.fathersName?.message}
                    />
                    <FormInput
                      id="lastName"
                      placeholder="Last Name / الشهرة *"
                      register={register("lastName")}
                      error={errors.lastName?.message}
                    />
                  </div>
                  <FormInput
                    id="mothersMaidenName"
                    placeholder="Mother’s Maiden Name / اسم الأم قبل الزواج *"
                    register={register("mothersMaidenName")}
                    error={errors.mothersMaidenName?.message}
                  />
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormInput
                      id="email"
                      type="email"
                      placeholder="Email / البريد الإلكتروني *"
                      register={register("email")}
                      error={errors.email?.message}
                    />
                    <FormInput
                      id="cellPhone"
                      placeholder="Cell Phone / الهاتف الخلوي *"
                      register={register("cellPhone")}
                      error={errors.cellPhone?.message}
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormInput
                      id="placeOfBirth"
                      placeholder="Place of Birth / مكان الولادة *"
                      register={register("placeOfBirth")}
                      error={errors.placeOfBirth?.message}
                    />
                    <FormSelect
                      id="countryOfCitizenship"
                      placeholder="Country of Citizenship / بلد المواطنة *"
                      register={register("countryOfCitizenship")}
                      options={countries.map((country) => ({
                        value: country,
                        label: country,
                      }))}
                      error={errors.countryOfCitizenship?.message}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border/60 shadow-lg">
                <CardHeader>
                  <CardTitle>Permanent Address / عنوان السكن</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormInput
                      id="city"
                      placeholder="City / المدينة *"
                      register={register("city")}
                      error={errors.city?.message}
                    />
                    <FormInput
                      id="area"
                      placeholder="Area / المنطقة *"
                      register={register("area")}
                      error={errors.area?.message}
                    />
                  </div>
                  <FormInput
                    id="street"
                    placeholder="Street / الشارع *"
                    register={register("street")}
                    error={errors.street?.message}
                  />
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormInput
                      id="building"
                      placeholder="Building / المبنى"
                      register={register("building")}
                    />
                    <FormInput
                      id="floor"
                      placeholder="Floor / الطابق"
                      register={register("floor")}
                    />
                  </div>
                  <FormInput
                    id="landline"
                    placeholder="Landline / الهاتف الثابت"
                    register={register("landline")}
                  />
                </CardContent>
              </Card>

              <Card className="border border-border/60 shadow-lg">
                <CardHeader>
                  <CardTitle>Academic Information / المعلومات الأكاديمية</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <FormSelect
                    id="faculty"
                    placeholder="Faculty / الكلية *"
                    register={register("faculty")}
                    options={faculties.map((faculty) => ({
                      value: faculty.value,
                      label: faculty.label,
                    }))}
                    error={errors.faculty?.message}
                  />
                  {selectedFacultyData && (
                    <FormSelect
                      id="major"
                      placeholder="Major / الاختصاص *"
                      register={register("major")}
                      options={selectedFacultyData.majors.map((major) => ({
                        value: major.value,
                        label: major.label,
                      }))}
                      error={errors.major?.message}
                    />
                  )}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormSelect
                      id="state"
                      placeholder="State / المحافظة *"
                      register={register("state")}
                      options={states.map((state) => ({
                        value: state,
                        label: state,
                      }))}
                      error={errors.state?.message}
                    />
                    <FormInput
                      id="county"
                      placeholder="County / القضاء *"
                      register={register("county")}
                      error={errors.county?.message}
                    />
                  </div>
                  <FormSelect
                    id="section"
                    placeholder="Section / الفرع *"
                    register={register("section")}
                    options={sections.map((section) => ({
                      value: section.value,
                      label: section.label,
                    }))}
                    error={errors.section?.message}
                  />
                  <FormInput
                    id="schoolName"
                    placeholder="School or Institute Name / اسم المدرسة أو المعهد *"
                    register={register("schoolName")}
                    error={errors.schoolName?.message}
                  />
                  <FormSelect
                    id="year"
                    placeholder="Year / السنة *"
                    register={register("year")}
                    options={Array.from({ length: 126 }, (_, i) => 2025 - i).map((year) => ({
                      value: year.toString(),
                      label: year.toString(),
                    }))}
                    error={errors.year?.message}
                  />
                </CardContent>
              </Card>

              <div className="flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 sm:flex-row">
                <p className="text-sm text-muted-foreground">
                  Fields marked with an asterisk (*) are required.
                </p>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <Button type="button" variant="outline" onClick={() => window.history.back()} className="sm:px-6">
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading} className="sm:px-8">
                    {loading ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </div>
            </form>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

type FormInputProps = {
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  type?: string;
  error?: string;
};

function FormInput({ id, placeholder, register, type = "text", error }: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className={cn(
          "h-12 rounded-xl border border-border bg-background/80 px-4 text-sm placeholder:text-muted-foreground shadow-sm transition focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1",
          error && "border-red-500 focus-visible:ring-red-500"
        )}
        {...register}
      />
      {error ? <p className="mt-1 text-xs text-red-500">{error}</p> : null}
    </div>
  );
}

type Option = { value: string; label: string };

type FormSelectProps = {
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  options: Option[];
  error?: string;
};

function FormSelect({ id, placeholder, register, options, error }: FormSelectProps) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <select
        id={id}
        className={cn(
          "h-12 w-full rounded-xl border border-border bg-background/80 px-4 text-sm text-foreground shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1",
          error && "border-red-500 focus-visible:ring-red-500"
        )}
        defaultValue=""
        {...register}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? <p className="mt-1 text-xs text-red-500">{error}</p> : null}
    </div>
  );
}

