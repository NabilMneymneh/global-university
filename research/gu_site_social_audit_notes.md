# Global University social and website audit notes

## Verified on 2026-08-24

### Official website
- URL: https://www.gu.edu.lb/
- Site positioning: "Quality Education Within Reach"; accredited university in Beirut, Lebanon.
- Public funnel: homepage offers Apply Now, Explore Programs, Contact Admissions, Start Application, Admissions Overview, and Request Information paths.
- Program framing: 3 faculties and 10 departments across Administrative Sciences, Health Sciences, and Literature & Humanities; English and Arabic delivery is stated.
- Admissions journey on homepage: choose a program, check requirements, placement test, submit application, and financial aid.
- Contact paths visible: phone +961 1 358 058 and WhatsApp; website also exposes an admissions contact route.
- Official social links found in website footer:
  - LinkedIn: https://www.linkedin.com/school/globaluniversity
  - Facebook: https://www.facebook.com/GlobalUniversityLebanon
  - Instagram: https://www.instagram.com/globaluniversitylebanon/
  - YouTube: https://www.youtube.com/@globaluniversitylebanon

### Official Facebook page
- URL: https://www.facebook.com/GlobalUniversityLebanon
- Page title: الجامعة العالمية Global University | Beirut
- Public signal: 38K followers and 1 following.
- Category/location: Page · University; Beirut - Patrakyieh Street, Beirut, Lebanon.
- Public contact signals: +961 1 358 058 and info@gu.edu.lb; website link points to https://www.gu.edu.lb/.
- Visible public content is partially login-gated; the latest visible page asset/post appears current, with visible reactions of 17 likes and 2 loves plus one additional reaction/comment indicator. Do not treat this as a complete engagement dataset.

## Implementation implication
The repository has a Next.js 14 App Router source under /home/ubuntu/global-university, plus legacy/static HTML folders. The live homepage at gu.edu.lb is a Next.js-rendered site and its social links confirm the official account handles. Pixel implementation should cover the Next.js root layout and conversion paths, then be verified against the deployed Hostinger site and the /apply flow.

### AUB benchmark validation
- Official URL opened: https://www.aub.edu.lb/
- Public site signals: founded in 1866; over 8,000 students and 800 faculty members; six faculties; more than 130 programs; main language of instruction is English. These are claims displayed on the official homepage and should be treated as AUB-provided claims.
- Admissions architecture: the site exposes Admissions, Financial Aid, Tuition and Fees Calculator, Visiting Student, Majors and Programs, Graduate Council, Scholarships, and LEAD scholarship opportunities. Useful benchmark: reduce friction by making financial aid and cost estimation visible alongside application.
- Public conversion links on the homepage include Browse our Majors and Programs, Apply Now!, and Check the Academic Calendar.
- The page shows a strong institutional-content mix: academic/research, outreach/community engagement, admissions, campus, and major campaign/event content. Official page URL: https://www.aub.edu.lb/

### Research caveat
Follower and engagement figures from public social pages are snapshots and may change. Where pages are login-gated or visual content is incomplete, the audit records the limitation rather than inferring performance.

### LAU benchmark validation
- Official admissions page opened: https://www.lau.edu.lb/apply/
- LAU organizes the admissions funnel by applicant type, including Freshman, Sophomore, Graduate, Transfer, International/Exchange, Visiting/Study Abroad, Returning, and Additional Degree Seekers.
- Public conversion mechanisms include Undergraduate Majors, Deadlines, Tuition and Costs, Housing, Financial Aid, Scholarships, Sign Up for Information, Student Recruitment Office, Admissions Office, Help with choosing your major, and Schedule a campus visit.
- LAU’s page explicitly offers a low-commitment information signup in addition to direct application paths. This is a strong benchmark for Global University’s proposed mid-funnel lead capture rather than sending every prospect immediately to a long application.
- Official page also links Facebook, YouTube, Twitter, LinkedIn, Instagram, and Snapchat: https://www.lau.edu.lb/apply/
- Content and proof cues visible on the page include international student participation, campus experience, costs/financial aid, academic pathways, and a prominent embedded “Why Choose LAU” video.

### Additional comparator validation from official admissions pages

**Saint Joseph University of Beirut (USJ).** The official Student Information and Orientation Office page (https://www.usj.edu.lb/sio/index.php?lang=2) positions orientation as a dedicated gateway, offering information, free individual orientation and reorientation sessions, school presentations, open doors, shadowing sessions, virtual events, a newsletter, a contact form, and a direct WhatsApp line (+961 81 510 243). This validates the high-converting value of a low-friction, human guidance offer rather than relying only on an application CTA.

**University of Balamand (UOB).** The official undergraduate admissions page (https://www.balamand.edu.lb/ProspectiveStudents/Pages/UndergraduateAdmissions.aspx) places “Apply now,” “Have An Enquiry?,” and a weekday live orientation officer chat together with detailed requirements and deadlines. This is a benchmark for combining immediate support, direct application, and decision-stage information on one admissions surface.

**Modern University for Business and Science (MUBS).** The official admissions page (https://www.mubs.edu.lb/en/admission.aspx) presents “Apply Now,” six campuses, 17 international partnerships, and a compact set of supporting sections for requirements, majors, application steps, tuition and fees, webinars, and placement dates. This validates pairing a concise value proposition with an application CTA and practical decision-support content.

**Middle East University (MEU).** The official Pathway Leadership Program page (https://meu.edu.lb/pathway-leadership-program/) uses a defined scholarship and leadership offer, a limited Founders Cohort, a clear application sequence, a tablet and AI academic assistant, potential tuition coverage, and WhatsApp follow-up. It is a strong urgency-and-value benchmark, but Global University should use only verified, approved scholarship terms and should not copy scarcity claims without an actual capacity constraint.

### Meta Events Manager verification
- Connected computer browser successfully opened the Global University business portfolio in Meta Business Suite: Facebook page @globaluniversitylebanon and Instagram account, with public account signals of 38.4K Facebook followers and 6.1K Instagram followers at the time of inspection.
- In Events Manager, the existing data source is named **Global University** with Dataset/Pixel ID **877982820870158**.
- Meta currently reports **No integrations**, **No activity was received in the selected time frame**, and **No websites found** for this data source (date range shown: Jul 27, 2026 – Aug 23, 2026). This supports implementing the base Pixel code and events in the website repository rather than creating a duplicate asset.
- Events Manager displayed an available setup option for installing and configuring the Meta Pixel for WordPress, but the website repository is a Next.js application, so manual code integration is the appropriate implementation path.
- The selected Meta business portfolio is the Global University asset under business ID 520240918439567. The Meta ad account identified through the connected Meta account is **Nabil GU**, account ID **act_1543090775835994**, currency USD, with timezone reported as America/Los_Angeles; campaign schedules should therefore be checked against Lebanon time before launch.
