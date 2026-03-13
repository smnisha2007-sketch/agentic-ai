const SCHEMES_DB = [
  // ===== CENTRAL GOVERNMENT SCHEMES =====
  {
    id: 1, name: "PM Kisan Samman Nidhi", government: "Central", category: "Agriculture",
    description: "Financial assistance of ₹6,000 per year to small and marginal farmer families.",
    benefits: "₹6,000 per year in 3 installments of ₹2,000 each directly to bank account.",
    eligibility: "Small and marginal farmers with cultivable land. Family income below ₹2 lakh.",
    documents: ["Aadhaar Card", "Land Records", "Bank Passbook", "Income Certificate"],
    link: "https://pmkisan.gov.in/",
    min_age: 18, max_age: 100, gender: "all", caste_category: "all", occupation: "farmer",
    income_limit: 200000, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["farmer", "agriculture"]
  },

  {
    id: 2, name: "PM Awas Yojana (PMAY)", government: "Central", category: "Housing",
    description: "Affordable housing for urban poor and rural families with subsidy on home loans.",
    benefits: "Interest subsidy up to ₹2.67 lakh on home loans. Assistance up to ₹1.5 lakh for house construction.",
    eligibility: "Economically weaker sections and low-income groups. Annual income below ₹3 lakh (EWS) or ₹6 lakh (LIG).",
    documents: ["Aadhaar Card", "Income Certificate", "Address Proof", "Bank Statement", "No-home Certificate"],
    link: "https://pmaymis.gov.in/",
    min_age: 18, max_age: 100, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 600000, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["housing"]
  },

  {
    id: 3, name: "Ayushman Bharat (PM-JAY)", government: "Central", category: "Health",
    description: "Health insurance coverage of ₹5 lakh per family per year for secondary and tertiary hospitalization.",
    benefits: "Free treatment up to ₹5 lakh per family per year at empanelled hospitals.",
    eligibility: "Families identified as deprived in SECC 2011. No income limit for listed families.",
    documents: ["Aadhaar Card", "Ration Card", "SECC Data", "Family ID"],
    link: "https://pmjay.gov.in/",
    min_age: 0, max_age: 100, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 500000, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["health", "insurance"]
  },

  {
    id: 4, name: "PM Ujjwala Yojana", government: "Central", category: "Women Welfare",
    description: "Free LPG connections to women from Below Poverty Line (BPL) households.",
    benefits: "Free LPG connection with ₹1,600 subsidy. First refill and stove provided free.",
    eligibility: "Women from BPL households aged 18+.",
    documents: ["BPL Certificate", "Aadhaar Card", "Bank Passbook", "Passport Photo", "Ration Card"],
    link: "https://www.pmujjwalayojana.com/",
    min_age: 18, max_age: 100, gender: "female", caste_category: "all", occupation: "all",
    income_limit: 300000, state: "all", student_status: false, disability_status: false,
    is_women: true, tags: ["women", "lpg", "bpl"]
  },

  {
    id: 5, name: "Sukanya Samriddhi Yojana", government: "Central", category: "Girl Child",
    description: "Savings scheme for girl child with high interest rate and tax benefits.",
    benefits: "Interest rate of 8.2% per annum. Tax benefits under Section 80C. Maturity at age 21.",
    eligibility: "Girl child below 10 years of age. Maximum 2 girl children per family.",
    documents: ["Birth Certificate", "Parent Aadhaar", "Parent PAN Card", "Address Proof"],
    link: "https://www.india.gov.in/sukanya-samriddhi-yojna",
    min_age: 0, max_age: 10, gender: "female", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["girl child", "savings", "child welfare"]
  },

  {
    id: 6, name: "PM Scholarship Scheme", government: "Central", category: "Education",
    description: "Scholarships for children of ex-servicemen and widows for professional and technical education.",
    benefits: "₹30,000/year for boys and ₹36,000/year for girls pursuing professional courses.",
    eligibility: "Children of ex-servicemen, students pursuing professional courses.",
    documents: ["Discharge Certificate", "Mark Sheets", "Bank Account", "Aadhaar Card", "College ID"],
    link: "https://scholarships.gov.in/",
    min_age: 17, max_age: 25, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "all", student_status: true, disability_status: false,
    is_women: false, tags: ["scholarship", "education", "student"]
  },

  {
    id: 7, name: "National Apprenticeship Promotion Scheme", government: "Central", category: "Employment",
    description: "Promote apprenticeship training by sharing 25% of stipend with employers.",
    benefits: "Government shares 25% of prescribed stipend up to ₹1,500/month per apprentice.",
    eligibility: "Youth aged 14+ enrolled in apprenticeship programs.",
    documents: ["Aadhaar Card", "Education Certificate", "Bank Account", "Passport Photo"],
    link: "https://www.apprenticeshipindia.gov.in/",
    min_age: 14, max_age: 35, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["employment", "skill", "training"]
  },

  {
    id: 8, name: "Pradhan Mantri Mudra Yojana", government: "Central", category: "Self Employment",
    description: "Loans up to ₹10 lakh for non-corporate, non-farm small/micro enterprises.",
    benefits: "Loans: Shishu (up to ₹50K), Kishore (₹50K-5L), Tarun (₹5L-10L). No collateral needed.",
    eligibility: "Small business owners, self-employed individuals, micro enterprises.",
    documents: ["Aadhaar Card", "PAN Card", "Business Plan", "Bank Statement", "Address Proof"],
    link: "https://www.mudra.org.in/",
    min_age: 18, max_age: 65, gender: "all", caste_category: "all", occupation: "self_employed",
    income_limit: 99999999, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["self employed", "business", "loan"]
  },

  {
    id: 9, name: "Atal Pension Yojana", government: "Central", category: "Pension",
    description: "Guaranteed minimum pension of ₹1,000 to ₹5,000/month after age 60.",
    benefits: "Monthly pension of ₹1,000-₹5,000 after 60. Government co-contributes 50%.",
    eligibility: "Indian citizens aged 18-40 with a bank account. Unorganized sector workers.",
    documents: ["Aadhaar Card", "Bank Account", "Mobile Number"],
    link: "https://www.npscra.nsdl.co.in/scheme-details.php",
    min_age: 18, max_age: 40, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["pension", "insurance"]
  },

  {
    id: 10, name: "Beti Bachao Beti Padhao", government: "Central", category: "Girl Child",
    description: "Campaign to address declining child sex ratio and empower the girl child.",
    benefits: "Awareness campaigns, institutional support, and financial incentives for girl child education.",
    eligibility: "Girl children across India.",
    documents: ["Birth Certificate", "Aadhaar Card", "School Certificate"],
    link: "https://wcd.nic.in/bbbp-schemes",
    min_age: 0, max_age: 18, gender: "female", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["girl child", "education", "child welfare"]
  },

  {
    id: 11, name: "National Means-cum-Merit Scholarship", government: "Central", category: "Education",
    description: "Scholarships for meritorious students from economically weaker sections to reduce dropouts at class 8.",
    benefits: "₹12,000 per year for students studying in class 9 to 12.",
    eligibility: "Students from class 8 with parental income below ₹3.5 lakh per annum. Min 55% marks.",
    documents: ["Income Certificate", "Mark Sheets", "Caste Certificate", "Bank Account", "School Certificate"],
    link: "https://scholarships.gov.in/",
    min_age: 12, max_age: 18, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 350000, state: "all", student_status: true, disability_status: false,
    is_women: false, tags: ["scholarship", "education", "student"]
  },

  {
    id: 12, name: "PM Vishwakarma Yojana", government: "Central", category: "Self Employment",
    description: "Support traditional artisans and craftspeople with training, tools, and credit.",
    benefits: "₹15,000 toolkit. Collateral-free loans up to ₹3 lakh. ₹500/day stipend during training.",
    eligibility: "Traditional artisans/craftspeople aged 18+. Working with hands and tools in unorganized sector.",
    documents: ["Aadhaar Card", "Caste Certificate", "Skill Certificate", "Bank Account", "Photos"],
    link: "https://pmvishwakarma.gov.in/",
    min_age: 18, max_age: 100, gender: "all", caste_category: "all", occupation: "self_employed",
    income_limit: 99999999, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["self employed", "artisan", "skill"]
  },

  {
    id: 13, name: "Stand-Up India Scheme", government: "Central", category: "Self Employment",
    description: "Bank loans between ₹10 lakh and ₹1 crore for SC/ST and women entrepreneurs.",
    benefits: "Loans from ₹10 lakh to ₹1 crore for greenfield enterprises. Composite loan with working capital.",
    eligibility: "SC/ST or women entrepreneurs aged 18+. For setting up greenfield enterprises.",
    documents: ["Aadhaar Card", "Caste Certificate", "Business Plan", "PAN Card", "Bank Statement"],
    link: "https://www.standupmitra.in/",
    min_age: 18, max_age: 65, gender: "all", caste_category: "all", occupation: "self_employed",
    income_limit: 99999999, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["self employed", "sc/st", "women", "business"]
  },

  {
    id: 14, name: "National Social Assistance Programme", government: "Central", category: "Pension",
    description: "Social pensions for elderly, widows, and persons with disabilities from BPL families.",
    benefits: "Monthly pension: ₹200-500 for elderly, ₹300 for widows, ₹300 for disabled persons.",
    eligibility: "BPL families. Elderly (60+), widows (40-79), disabled persons.",
    documents: ["BPL Card", "Age Certificate", "Aadhaar Card", "Disability Certificate", "Death Certificate of spouse"],
    link: "https://nsap.nic.in/",
    min_age: 40, max_age: 100, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 200000, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["pension", "bpl", "elderly", "widow", "disability"]
  },

  {
    id: 15, name: "Integrated Child Development Services (ICDS)", government: "Central", category: "Child Welfare",
    description: "Nutrition, health, and education for children under 6, pregnant women, and lactating mothers.",
    benefits: "Supplementary nutrition, immunization, health check-ups, pre-school education, referral services.",
    eligibility: "Children aged 0-6 years, pregnant and lactating women.",
    documents: ["Birth Certificate", "Aadhaar Card", "Immunization Card", "Ration Card"],
    link: "https://icds-wcd.nic.in/",
    min_age: 0, max_age: 6, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["child welfare", "nutrition", "health", "vaccination"]
  },

  {
    id: 16, name: "Poshan Abhiyaan", government: "Central", category: "Child Welfare",
    description: "National nutrition mission to reduce malnutrition among children, adolescents, and women.",
    benefits: "Improved nutrition outcomes, growth monitoring, community-based events, technology-driven monitoring.",
    eligibility: "Children under 6, pregnant women, lactating mothers, adolescent girls.",
    documents: ["Aadhaar Card", "Birth Certificate", "Health Card"],
    link: "https://poshanabhiyaan.gov.in/",
    min_age: 0, max_age: 6, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["child welfare", "nutrition", "health"]
  },

  {
    id: 17, name: "Universal Immunization Programme", government: "Central", category: "Child Welfare",
    description: "Free immunization against 12 vaccine-preventable diseases for all children.",
    benefits: "Free vaccines: BCG, OPV, Hepatitis B, Pentavalent, Measles, JE, Rotavirus, PCV.",
    eligibility: "All children from birth to 16 years.",
    documents: ["Birth Certificate", "Immunization Card", "Hospital Registration"],
    link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=824&lid=220",
    min_age: 0, max_age: 16, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["child welfare", "vaccination", "health"]
  },

  {
    id: 18, name: "PM Suraksha Bima Yojana", government: "Central", category: "Insurance",
    description: "Accidental death and disability insurance at ₹20/year premium.",
    benefits: "₹2 lakh for accidental death, ₹1 lakh for partial disability.",
    eligibility: "Indian citizens aged 18-70 with a bank account.",
    documents: ["Aadhaar Card", "Bank Passbook", "Nominee Details"],
    link: "https://www.jansuraksha.gov.in/",
    min_age: 18, max_age: 70, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["insurance"]
  },

  {
    id: 19, name: "PM Jeevan Jyoti Bima Yojana", government: "Central", category: "Insurance",
    description: "Life insurance cover of ₹2 lakh at ₹436/year premium.",
    benefits: "₹2 lakh life insurance cover in case of death due to any reason.",
    eligibility: "Indian citizens aged 18-50 with a bank and Aadhaar linked account.",
    documents: ["Aadhaar Card", "Bank Passbook", "Nominee Details", "Age Proof"],
    link: "https://www.jansuraksha.gov.in/",
    min_age: 18, max_age: 50, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["insurance"]
  },

  {
    id: 20, name: "Skill India Mission (PMKVY)", government: "Central", category: "Employment",
    description: "Free skill training and certification for Indian youth across various sectors.",
    benefits: "Free training, assessment and certification. ₹8,000 reward on certification. Placement assistance.",
    eligibility: "Indian youth with valid ID. School/college dropouts and unemployed youth.",
    documents: ["Aadhaar Card", "Education Certificate", "Bank Account", "Passport Photo"],
    link: "https://www.skillindiadigital.gov.in/",
    min_age: 15, max_age: 45, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["skill", "training", "employment"]
  },

  {
    id: 21, name: "Disability Pension Scheme", government: "Central", category: "Disability",
    description: "Monthly pension for persons with 80%+ disability from BPL families.",
    benefits: "Monthly pension of ₹300 from Central Government + State top-up.",
    eligibility: "Persons with 80%+ disability aged 18-79 from BPL families.",
    documents: ["Disability Certificate", "BPL Card", "Aadhaar Card", "Bank Account", "Medical Report"],
    link: "https://nsap.nic.in/",
    min_age: 18, max_age: 79, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 200000, state: "all", student_status: false, disability_status: true,
    is_women: false, tags: ["disability", "pension", "bpl"]
  },

  {
    id: 22, name: "Post Matric Scholarship for SC Students", government: "Central", category: "Education",
    description: "Scholarships for SC students studying post-matriculation courses.",
    benefits: "Full tuition fee, maintenance allowance of ₹550-1200/month, book allowance.",
    eligibility: "SC students in post-matric courses. Family income below ₹2.5 lakh.",
    documents: ["Caste Certificate", "Income Certificate", "Mark Sheets", "Bank Account", "College Admission Letter"],
    link: "https://scholarships.gov.in/",
    min_age: 14, max_age: 35, gender: "all", caste_category: "sc", occupation: "all",
    income_limit: 250000, state: "all", student_status: true, disability_status: false,
    is_women: false, tags: ["scholarship", "education", "student", "sc/st"]
  },

  {
    id: 23, name: "Post Matric Scholarship for OBC Students", government: "Central", category: "Education",
    description: "Scholarships for OBC students pursuing post-matric education.",
    benefits: "Tuition fee reimbursement, maintenance allowance, book allowance.",
    eligibility: "OBC students in post-matric courses. Family income below ₹1.5 lakh.",
    documents: ["OBC Certificate", "Income Certificate", "Mark Sheets", "Bank Account", "College Admission"],
    link: "https://scholarships.gov.in/",
    min_age: 14, max_age: 35, gender: "all", caste_category: "obc", occupation: "all",
    income_limit: 150000, state: "all", student_status: true, disability_status: false,
    is_women: false, tags: ["scholarship", "education", "student"]
  },

  {
    id: 24, name: "Mahatma Gandhi NREGA", government: "Central", category: "Employment",
    description: "100 days guaranteed wage employment per year to rural households.",
    benefits: "100 days work per year. Minimum wage guaranteed. Unemployment allowance if work not provided.",
    eligibility: "Adult members of rural households willing to do unskilled manual work.",
    documents: ["Job Card", "Aadhaar Card", "Bank Passbook", "Passport Photo"],
    link: "https://nrega.nic.in/",
    min_age: 18, max_age: 100, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["employment", "rural"]
  },

  {
    id: 25, name: "PM SVANidhi Scheme", government: "Central", category: "Self Employment",
    description: "Micro-credit facility for street vendors affected by COVID-19.",
    benefits: "Working capital loan up to ₹50,000. 7% interest subsidy. Cashback on digital transactions.",
    eligibility: "Street vendors with vending certificate or letter of recommendation.",
    documents: ["Vending Certificate", "Aadhaar Card", "Bank Account", "Passport Photo"],
    link: "https://pmsvanidhi.mohua.gov.in/",
    min_age: 18, max_age: 65, gender: "all", caste_category: "all", occupation: "self_employed",
    income_limit: 99999999, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["self employed", "vendor", "loan"]
  },

  // ===== TAMIL NADU STATE SCHEMES =====
  {
    id: 26, name: "TN Free Laptop Scheme", government: "Tamil Nadu", category: "Education",
    description: "Free laptops to students joining college after passing 12th standard in government schools.",
    benefits: "Free laptop with accessories to eligible students entering higher education.",
    eligibility: "Students who passed 12th from TN government/aided schools and joining college.",
    documents: ["12th Mark Sheet", "College Admission", "Community Certificate", "Income Certificate", "Aadhaar Card"],
    link: "https://www.tn.gov.in/",
    min_age: 15, max_age: 25, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "Tamil Nadu", student_status: true, disability_status: false,
    is_women: false, tags: ["education", "student", "laptop"]
  },

  {
    id: 27, name: "TN Free Bicycle Scheme", government: "Tamil Nadu", category: "Education",
    description: "Free bicycles to government school students studying in 11th standard.",
    benefits: "Free bicycle to attend school and reduce dropout rates.",
    eligibility: "11th standard students studying in TN government and government-aided schools.",
    documents: ["School ID", "Community Certificate", "Aadhaar Card", "Parent Income Certificate"],
    link: "https://www.tn.gov.in/",
    min_age: 14, max_age: 18, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "Tamil Nadu", student_status: true, disability_status: false,
    is_women: false, tags: ["education", "student", "bicycle"]
  },

  {
    id: 28, name: "Moovalur Ramamirtham Ammaiyar Marriage Assistance", government: "Tamil Nadu", category: "Women Welfare",
    description: "Marriage assistance of ₹25,000 and 8 grams gold for women graduates.",
    benefits: "₹25,000 cash + 8 grams gold coin for graduate women at the time of marriage.",
    eligibility: "Women graduates aged 18+ from Tamil Nadu. Family income limit applicable.",
    documents: ["Degree Certificate", "Community Certificate", "Income Certificate", "Aadhaar Card", "Marriage Invitation"],
    link: "https://www.tn.gov.in/",
    min_age: 18, max_age: 35, gender: "female", caste_category: "all", occupation: "all",
    income_limit: 500000, state: "Tamil Nadu", student_status: false, disability_status: false,
    is_women: true, tags: ["women", "marriage"]
  },

  {
    id: 29, name: "TN Cradle Baby Scheme", government: "Tamil Nadu", category: "Child Welfare",
    description: "cradles placed in government hospitals to prevent female infanticide and ensure child safety.",
    benefits: "Abandoned babies are provided care, nutrition, and adopted into loving families.",
    eligibility: "Any newborn baby abandoned or at risk. No conditions.",
    documents: ["None required at time of placement"],
    link: "https://www.tn.gov.in/",
    min_age: 0, max_age: 1, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "Tamil Nadu", student_status: false, disability_status: false,
    is_women: false, tags: ["child welfare", "girl child"]
  },

  {
    id: 30, name: "Chief Minister's Girl Child Protection Scheme", government: "Tamil Nadu", category: "Girl Child",
    description: "Financial assistance for families with girl children to promote their education and welfare.",
    benefits: "₹50,000 fixed deposit for one girl child family, ₹25,000 each for two girl child family. Maturity amount at age 18.",
    eligibility: "Girl children born in Tamil Nadu. Family income below ₹72,000/year. Parents willing to undergo family planning.",
    documents: ["Birth Certificate", "Income Certificate", "Family Planning Certificate", "Aadhaar Card", "Bank Account"],
    link: "https://www.tn.gov.in/",
    min_age: 0, max_age: 18, gender: "female", caste_category: "all", occupation: "all",
    income_limit: 72000, state: "Tamil Nadu", student_status: false, disability_status: false,
    is_women: false, tags: ["girl child", "child welfare"]
  },

  {
    id: 31, name: "TN Noon Meal Programme", government: "Tamil Nadu", category: "Child Welfare",
    description: "Nutritious mid-day meals for children in government schools and Anganwadi centres.",
    benefits: "Free nutritious lunch, eggs, fruits, and fortified nutrition for school children.",
    eligibility: "Children aged 2-15 attending government schools or Anganwadi centres in Tamil Nadu.",
    documents: ["School ID", "Aadhaar Card"],
    link: "https://www.tn.gov.in/",
    min_age: 2, max_age: 15, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "Tamil Nadu", student_status: false, disability_status: false,
    is_women: false, tags: ["child welfare", "nutrition", "education"]
  },

  {
    id: 32, name: "Kalaignar Magalir Urimai Thogai", government: "Tamil Nadu", category: "Women Welfare",
    description: "Monthly financial assistance of ₹1,000 for women heads of families.",
    benefits: "₹1,000 per month directly to women family heads' bank accounts.",
    eligibility: "Women aged 21+ who are head of family in Tamil Nadu. Income limit applies.",
    documents: ["Aadhaar Card", "Ration Card", "Bank Passbook", "Income Certificate", "Family Certificate"],
    link: "https://www.tn.gov.in/",
    min_age: 21, max_age: 100, gender: "female", caste_category: "all", occupation: "all",
    income_limit: 500000, state: "Tamil Nadu", student_status: false, disability_status: false,
    is_women: true, tags: ["women"]
  },

  {
    id: 33, name: "TN Uzhavar Pathukappu Thittam (Farmer Protection)", government: "Tamil Nadu", category: "Agriculture",
    description: "Crop insurance and financial assistance for farmers affected by natural calamities.",
    benefits: "Crop insurance coverage, input subsidy, and disaster relief for affected farmers.",
    eligibility: "Farmers in Tamil Nadu who have registered their crops with the agriculture department.",
    documents: ["Land Records", "Chitta/Adangal", "Aadhaar Card", "Bank Passbook", "Crop Registration"],
    link: "https://www.tn.gov.in/",
    min_age: 18, max_age: 100, gender: "all", caste_category: "all", occupation: "farmer",
    income_limit: 99999999, state: "Tamil Nadu", student_status: false, disability_status: false,
    is_women: false, tags: ["farmer", "agriculture", "insurance"]
  },

  {
    id: 34, name: "TN Free Bus Pass for Students", government: "Tamil Nadu", category: "Education",
    description: "Free bus passes for students to travel on government buses for educational purposes.",
    benefits: "Free travel on government buses between home and educational institution.",
    eligibility: "Students studying in schools and colleges in Tamil Nadu.",
    documents: ["Student ID", "School/College Bonafide Certificate", "Aadhaar Card", "Passport Photo"],
    link: "https://www.tn.gov.in/",
    min_age: 5, max_age: 25, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "Tamil Nadu", student_status: true, disability_status: false,
    is_women: false, tags: ["education", "student", "transport"]
  },

  {
    id: 35, name: "TN Chief Minister's Comprehensive Health Insurance", government: "Tamil Nadu", category: "Health",
    description: "Health insurance up to ₹5 lakh for families earning below ₹72,000/year.",
    benefits: "Free treatment up to ₹5 lakh at empanelled hospitals. Covers 1,027 procedures.",
    eligibility: "Families with annual income below ₹72,000 in Tamil Nadu.",
    documents: ["Aadhaar Card", "Ration Card", "Income Certificate", "Family Card"],
    link: "https://www.cmchistn.com/",
    min_age: 0, max_age: 100, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 72000, state: "Tamil Nadu", student_status: false, disability_status: false,
    is_women: false, tags: ["health", "insurance"]
  },

  {
    id: 36, name: "TN Employment Generation Programme", government: "Tamil Nadu", category: "Self Employment",
    description: "Financial assistance for unemployed youth to set up micro enterprises.",
    benefits: "Project cost up to ₹5 lakh with 25% subsidy (₹1.25 lakh). Special subsidy for SC/ST.",
    eligibility: "Unemployed youth aged 18-35 in Tamil Nadu. 8th pass minimum.",
    documents: ["Education Certificate", "Income Certificate", "Community Certificate", "Project Report", "Bank Account"],
    link: "https://www.tn.gov.in/",
    min_age: 18, max_age: 35, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 500000, state: "Tamil Nadu", student_status: false, disability_status: false,
    is_women: false, tags: ["self employed", "employment", "business"]
  },

  {
    id: 37, name: "Dr. Muthulakshmi Reddy Maternity Benefit Scheme", government: "Tamil Nadu", category: "Women Welfare",
    description: "Financial assistance for poor pregnant women for safe delivery and nutrition.",
    benefits: "₹18,000 in installments during pregnancy and after delivery.",
    eligibility: "Pregnant women from BPL families in Tamil Nadu. First two deliveries only.",
    documents: ["Pregnancy Certificate", "Income Certificate", "Aadhaar Card", "Bank Passbook", "Ration Card"],
    link: "https://www.tn.gov.in/",
    min_age: 18, max_age: 45, gender: "female", caste_category: "all", occupation: "all",
    income_limit: 200000, state: "Tamil Nadu", student_status: false, disability_status: false,
    is_women: true, tags: ["women", "health", "maternity"]
  },

  {
    id: 38, name: "TN SC/ST Students' Scholarship", government: "Tamil Nadu", category: "Education",
    description: "Scholarships for SC/ST students pursuing higher education in Tamil Nadu.",
    benefits: "Full tuition fee, book allowance, exam fee, and maintenance allowance.",
    eligibility: "SC/ST students in Tamil Nadu pursuing post-matric education.",
    documents: ["Community Certificate", "Income Certificate", "Mark Sheets", "College Admission", "Bank Account"],
    link: "https://www.tn.gov.in/",
    min_age: 14, max_age: 30, gender: "all", caste_category: "sc", occupation: "all",
    income_limit: 250000, state: "Tamil Nadu", student_status: true, disability_status: false,
    is_women: false, tags: ["scholarship", "education", "student", "sc/st"]
  },

  {
    id: 39, name: "TN Differently Abled Welfare Pension", government: "Tamil Nadu", category: "Disability",
    description: "Monthly pension for differently abled persons in Tamil Nadu.",
    benefits: "Monthly pension of ₹1,500 for persons with 40%+ disability.",
    eligibility: "Differently abled persons aged 18+ with 40%+ disability in Tamil Nadu.",
    documents: ["Disability Certificate", "Aadhaar Card", "Bank Account", "Income Certificate", "Medical Board Certificate"],
    link: "https://www.tn.gov.in/",
    min_age: 18, max_age: 100, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "Tamil Nadu", student_status: false, disability_status: true,
    is_women: false, tags: ["disability", "pension"]
  },

  {
    id: 40, name: "TN Old Age Pension", government: "Tamil Nadu", category: "Pension",
    description: "Monthly pension for senior citizens in Tamil Nadu with no income support.",
    benefits: "Monthly pension of ₹1,500 for senior citizens aged 60+.",
    eligibility: "Senior citizens aged 60+ in Tamil Nadu with BPL status.",
    documents: ["Age Proof", "Aadhaar Card", "BPL Card", "Bank Passbook", "Ration Card"],
    link: "https://www.tn.gov.in/",
    min_age: 60, max_age: 100, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 200000, state: "Tamil Nadu", student_status: false, disability_status: false,
    is_women: false, tags: ["pension", "elderly"]
  },

  {
    id: 41, name: "TN Widow Pension Scheme", government: "Tamil Nadu", category: "Women Welfare",
    description: "Monthly pension for widows and destitute women in Tamil Nadu.",
    benefits: "Monthly pension of ₹1,500 for widows and abandoned women.",
    eligibility: "Widows and deserted women aged 18+ in Tamil Nadu from BPL families.",
    documents: ["Death Certificate of Husband", "Aadhaar Card", "Income Certificate", "Bank Account", "Ration Card"],
    link: "https://www.tn.gov.in/",
    min_age: 18, max_age: 100, gender: "female", caste_category: "all", occupation: "all",
    income_limit: 200000, state: "Tamil Nadu", student_status: false, disability_status: false,
    is_women: true, tags: ["women", "pension", "widow"]
  },

  {
    id: 42, name: "TNSRLM - Pudhu Vaazhvu Project", government: "Tamil Nadu", category: "Self Employment",
    description: "Livelihood support for rural poor women through SHGs and micro-enterprises.",
    benefits: "SHG formation, skill training, micro-credit linkage up to ₹10 lakh, market access.",
    eligibility: "Women from BPL rural families in Tamil Nadu, aged 18+.",
    documents: ["Aadhaar Card", "BPL Card", "Bank Account", "SHG Membership", "Community Certificate"],
    link: "https://www.tn.gov.in/",
    min_age: 18, max_age: 60, gender: "female", caste_category: "all", occupation: "all",
    income_limit: 200000, state: "Tamil Nadu", student_status: false, disability_status: false,
    is_women: true, tags: ["women", "self employed", "rural"]
  },

  {
    id: 43, name: "TN Free Textbooks and Notebooks", government: "Tamil Nadu", category: "Education",
    description: "Free textbooks, notebooks, school bags, and education materials for government school students.",
    benefits: "Free textbooks, notebooks, school bag, geometry box, crayons, atlas for students.",
    eligibility: "Students studying in Tamil Nadu government and government-aided schools.",
    documents: ["School Admission Proof", "Aadhaar Card"],
    link: "https://www.tn.gov.in/",
    min_age: 5, max_age: 18, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "Tamil Nadu", student_status: true, disability_status: false,
    is_women: false, tags: ["education", "student"]
  },

  {
    id: 44, name: "Indira Gandhi National Widow Pension", government: "Central", category: "Women Welfare",
    description: "Monthly pension for widows from BPL families.",
    benefits: "₹300/month from Central, additional top-up from State government.",
    eligibility: "Widows aged 40-79 from BPL families.",
    documents: ["Husband's Death Certificate", "BPL Card", "Aadhaar Card", "Age Proof", "Bank Passbook"],
    link: "https://nsap.nic.in/",
    min_age: 40, max_age: 79, gender: "female", caste_category: "all", occupation: "all",
    income_limit: 200000, state: "all", student_status: false, disability_status: false,
    is_women: true, tags: ["women", "pension", "widow", "bpl"]
  },

  {
    id: 45, name: "Pre Matric Scholarship for Minorities", government: "Central", category: "Education",
    description: "Scholarships for minority community students studying in classes 1 to 10.",
    benefits: "Admission fee up to ₹500, tuition fee up to ₹350/month, maintenance allowance.",
    eligibility: "Minority students (Muslim, Christian, Sikh, Buddhist, Jain, Parsi) in classes 1-10. Income below ₹1 lakh.",
    documents: ["Minority Certificate", "Income Certificate", "Mark Sheets", "School Certificate", "Bank Account"],
    link: "https://scholarships.gov.in/",
    min_age: 5, max_age: 16, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 100000, state: "all", student_status: true, disability_status: false,
    is_women: false, tags: ["scholarship", "education", "student", "minority"]
  },

  {
    id: 46, name: "Startup India Seed Fund", government: "Central", category: "Self Employment",
    description: "Financial assistance for startups for proof of concept, prototype development, and market entry.",
    benefits: "Up to ₹50 lakh for startups through incubators for proof of concept and prototype.",
    eligibility: "DPIIT recognized startups not older than 2 years. Indian incorporated entity.",
    documents: ["DPIIT Certificate", "Incorporation Certificate", "PAN Card", "Business Plan", "Bank Statement"],
    link: "https://seedfund.startupindia.gov.in/",
    min_age: 18, max_age: 60, gender: "all", caste_category: "all", occupation: "self_employed",
    income_limit: 99999999, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["self employed", "startup", "business"]
  },

  {
    id: 47, name: "TN Marriage Assistance for SC/ST", government: "Tamil Nadu", category: "Women Welfare",
    description: "Marriage assistance for SC/ST community women in Tamil Nadu.",
    benefits: "₹50,000 cash and 8 grams gold for degree holders. ₹25,000 for non-graduates.",
    eligibility: "SC/ST women aged 18+ getting married in Tamil Nadu.",
    documents: ["Community Certificate", "Income Certificate", "Educational Certificates", "Aadhaar Card", "Marriage Invitation"],
    link: "https://www.tn.gov.in/",
    min_age: 18, max_age: 35, gender: "female", caste_category: "sc", occupation: "all",
    income_limit: 500000, state: "Tamil Nadu", student_status: false, disability_status: false,
    is_women: true, tags: ["women", "marriage", "sc/st"]
  },

  {
    id: 48, name: "PM Jan Dhan Yojana", government: "Central", category: "Banking",
    description: "Universal access to banking with zero-balance accounts and financial services.",
    benefits: "Zero balance account, RuPay debit card, ₹2 lakh accidental insurance, ₹30K life cover.",
    eligibility: "Any Indian citizen aged 10+ without a bank account.",
    documents: ["Aadhaar Card", "Address Proof", "Passport Photo"],
    link: "https://pmjdy.gov.in/",
    min_age: 10, max_age: 100, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "all", student_status: false, disability_status: false,
    is_women: false, tags: ["banking", "insurance"]
  },

  {
    id: 49, name: "TN Amma Unavagam (Subsidized Food)", government: "Tamil Nadu", category: "Food",
    description: "Subsidized meals at Amma Unavagam canteens across Tamil Nadu.",
    benefits: "Idli ₹1, meals ₹5, variety rice ₹5. Subsidized nutritious food for all.",
    eligibility: "All residents of Tamil Nadu. No restriction.",
    documents: ["No documents required"],
    link: "https://www.tn.gov.in/",
    min_age: 0, max_age: 100, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "Tamil Nadu", student_status: false, disability_status: false,
    is_women: false, tags: ["food", "nutrition"]
  },

  {
    id: 50, name: "National Education Policy Scholarship for Girls", government: "Central", category: "Education",
    description: "Scholarship for girl students from disadvantaged backgrounds pursuing STEM education.",
    benefits: "₹10,000-50,000/year for pursuing science, technology, engineering, and mathematics courses.",
    eligibility: "Girl students from economically weaker sections pursuing STEM in higher education.",
    documents: ["Mark Sheets", "College Admission", "Income Certificate", "Aadhaar Card", "Bank Account"],
    link: "https://scholarships.gov.in/",
    min_age: 16, max_age: 30, gender: "female", caste_category: "all", occupation: "all",
    income_limit: 800000, state: "all", student_status: true, disability_status: false,
    is_women: false, tags: ["scholarship", "education", "student", "girl child"]
  },

  {
    id: 51, name: "TN Free Sewing Machine Scheme", government: "Tamil Nadu", category: "Women Welfare",
    description: "Free sewing machines for women from economically weaker sections for self-employment.",
    benefits: "Free sewing machine with training for self-employment and income generation.",
    eligibility: "Women aged 20+ from BPL families in Tamil Nadu who have completed tailoring training.",
    documents: ["Aadhaar Card", "Income Certificate", "Tailoring Training Certificate", "BPL Card", "Bank Account"],
    link: "https://www.tn.gov.in/",
    min_age: 20, max_age: 55, gender: "female", caste_category: "all", occupation: "all",
    income_limit: 200000, state: "Tamil Nadu", student_status: false, disability_status: false,
    is_women: true, tags: ["women", "self employed"]
  },

  {
    id: 52, name: "Janani Suraksha Yojana", government: "Central", category: "Women Welfare",
    description: "Safe motherhood intervention promoting institutional delivery among poor pregnant women.",
    benefits: "₹1,400 for rural and ₹1,000 for urban mothers for institutional delivery. Free delivery.",
    eligibility: "Pregnant women from BPL families. All women in LPS states.",
    documents: ["Pregnancy Card", "BPL Card", "JSY Card", "Aadhaar Card", "Bank Passbook"],
    link: "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=841&lid=309",
    min_age: 19, max_age: 45, gender: "female", caste_category: "all", occupation: "all",
    income_limit: 300000, state: "all", student_status: false, disability_status: false,
    is_women: true, tags: ["women", "health", "maternity"]
  },

  {
    id: 53, name: "TN Innuyir Kaapom (Road Safety)", government: "Tamil Nadu", category: "Insurance",
    description: "Accident relief scheme for road accident victims in Tamil Nadu.",
    benefits: "Up to ₹1 lakh medical treatment. ₹5 lakh for death. Ambulance service.",
    eligibility: "All road accident victims in Tamil Nadu regardless of income or status.",
    documents: ["FIR Copy", "Hospital Records", "Aadhaar Card", "Bank Account"],
    link: "https://www.tn.gov.in/",
    min_age: 0, max_age: 100, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "Tamil Nadu", student_status: false, disability_status: false,
    is_women: false, tags: ["insurance", "health"]
  },

  {
    id: 54, name: "PM Matru Vandana Yojana", government: "Central", category: "Women Welfare",
    description: "Cash incentive of ₹5,000 for pregnant women and lactating mothers for first live birth.",
    benefits: "₹5,000 in installments for first pregnancy for nutrition and partial wage compensation.",
    eligibility: "Pregnant women aged 19+ for the first live birth. All categories.",
    documents: ["Pregnancy Certificate", "Aadhaar Card", "Bank Passbook", "MCP Card"],
    link: "https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana",
    min_age: 19, max_age: 45, gender: "female", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "all", student_status: false, disability_status: false,
    is_women: true, tags: ["women", "maternity", "health"]
  },

  {
    id: 55, name: "TN Free School Uniform Scheme", government: "Tamil Nadu", category: "Education",
    description: "Free school uniforms provided to all students studying in government schools.",
    benefits: "Free set of school uniforms and shoes for government school students annually.",
    eligibility: "All students studying in government and government-aided schools in Tamil Nadu.",
    documents: ["School Admission Proof", "Aadhaar Card"],
    link: "https://www.tn.gov.in/",
    min_age: 5, max_age: 18, gender: "all", caste_category: "all", occupation: "all",
    income_limit: 99999999, state: "Tamil Nadu", student_status: true, disability_status: false,
    is_women: false, tags: ["education", "student"]
  }
];

if (typeof module !== 'undefined') module.exports = SCHEMES_DB;
