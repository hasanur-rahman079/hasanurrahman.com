import { v4 as uuidv4 } from "uuid";
import {format} from "date-fns";

const khuLogo = "/org_logos/khu.png";
const abexLogo = "/org_logos/abex.png";
const jabetLogo = "/org_logos/JABET.jpg";
const siclLogo = "/org_logos/sicl.jpg";
const buhsLogo = "/org_logos/buhs.jpg";
const exomeitLogo = "/org_logos/exomeit.jpg";
const cobLogo = "/org_logos/cob.jpg";
const bsmiabfirstLogo = "/org_logos/fstconf.jpg";
const ibsLogo = "/org_logos/IBS.jpg";
const bsmiabSecondLogo = "/org_logos/secconf.jpg";

const date = new Date();
const currentDate = format(date, "dd MMM yyyy");

const experiencesData = {
  education: [
    // {
    //   id: uuidv4(),
    //   img: khuLogo,
    //   title: "MSc",
    //   institute:
    //     "Department of Biotechnology, Bangladesh Agricultural University",
    //   weblink: "https://btech.bau.edu.bd/",
    //   address: "Mymensingh, Bangladesh",
    //   time: " 1 Mar 2023 - Current",
    //   info: "Got admitted in the last winter semester",
    // },
    // {
    //   id: uuidv4(),
    //   img: khuLogo,
    //   title: "MSc",
    //   institute:
    //     "Department of Pathology, College of Korean Medicine, Kyung Hee University",
    //   weblink: "https://khu.elsevierpure.com/en/persons/bonglee-kim/network/",
    //   address: "Seoul, Republic of Korea",
    //   time: " 1 Sept 2022 - 28 Feb 2023",
    //   info: "Got full funded admission but unable to join because of visa difficulties. Continued 6 month through online.",
    // },
    {
      id: uuidv4(),
      img: khuLogo,
      title: "BSc",
      institute:
        "Department of Biotechnology and Genetic Engineering, Faculty of Life Sciences, Bangabandhu Sheikh Mujibur Rahman Science and Technology University",
      weblink: "https://www.bsmrstu.edu.bd/s/",
      address: "Gopalganj, Bangladesh",
      time: "1 Jan 2017 - 25 Jan 2022",
      info: "The degree was suppose to conferred in 31 December 2020 and because of pandemic it delayed 2 years",
    },
  ],

  research: [
    {
      id: uuidv4(),
      img: khuLogo,
      title: "Research Assistant II",
      institute: "Dr. Hannan’s Lab, Bangladesh Agricultural University,",
      weblink: "https://bau.edu.bd/profile/BMB1010",
      address: "Mymensingh, Bangladesh",
      time: `1 Apr 2023 – ${currentDate}`,
      focus:
        "Define research questions to estimate the potential prevention of Dementia, Alzheimer’s and Diabetes mellitus type 2 disease by molecular pathway analysis using network pharmacology and computational approaches, Perform molecular dynamic simulation and genome sequencing data analysis.",
    },

    {
      id: uuidv4(),
      img: khuLogo,
      title: "Research Assistant",
      institute:
        "Department of Pathology, College of Korean Medicine, Kyung Hee University",
      weblink: "https://khu.elsevierpure.com/en/persons/bonglee-kim/network/",
      address: "Seoul, Republic of Korea",
      time: "1 Feb 2022 – 31 Mar 2023",
      focus:
        "Extraction and study of korean plant (C. sappan) phytochemicals and their drug likeness activity to korean pancreatic cancer patients.",
    },

    {
      id: uuidv4(),
      img: abexLogo,
      title: "Research Associate",
      institute: "ABEx Bio-Research Center",
      weblink: "https://research.abexbio.com/research-groups/",
      address: "East Azampur, Dhaka-1230",
      time: "1 Aug 2019 – 30 Mar 2023",
      focus:
        "Establishment of a computational-biology facility within the lab and study the natural extract phytochemicals and their drug likeness activity in human diseases (Kidney and Alzheimer) by using molecular pharmacology strategies.",
    },

    {
      id: uuidv4(),
      img: jabetLogo,
      title: "Editorial Assistant",
      institute:
        "Journal of Advanced Biotechnology and Experimental Therapeutics",
      weblink: "https://www.bsmiab.org/jabet/editorial-board/",
      address: "Seoul, Republic of Korea",
      time: "1 Jun 2020 – 30 Apr 2023",
      focus: "Reviewing literatures",
    },

    {
      id: uuidv4(),
      img: siclLogo,
      title: "Bioinformatician and Designer",
      institute: "Swift Integrity Computational Lab",
      weblink: "https://www.facebook.com/siclab.bd",
      address: "Savar, Dhaka",
      time: "1 Nov 2019 – 31 Dec 2021",
      focus:
        "Designing and Development of Molecular Biology Pathways and Anticancer Phytochemicals Analysis.",
    },

    {
      id: uuidv4(),
      img: buhsLogo,
      title: "Research Fellow",
      institute: "Bangladesh University of Health Science (BUHS)",
      weblink: "https://www.researchgate.net/profile/Salima-Akter",
      address: "Dhaka, Bangladesh",
      time: "1 Mar 2021 – 30 Jun 2021",
      focus:
        "Under a Ministry of Education Research Project Titled: Effects of Insulin on Breast Cancer Growth and Proliferation Among Diabetic Patients in Bangladesh. Project Supervisor was Dr. Salima Akter. My responsibiities was Collection of breast cancer patients (diabetic) samples from Mohakhali Cancer Hospital, analysis, report generation and data collection.",
    },
  ],

  organizations: [
    {
      id: uuidv4(),
      img: exomeitLogo,
      title: "Founder and CEO",
      institute: "ExomeIT",
      weblink: "https://www.exomeit.com/about",
      time: `9 Dec 2020 - ${currentDate}`,
      address: "Dhaka, Bangladesh",
      focus: "Executing the overall operations",
    },

    {
      id: uuidv4(),
      img: cobLogo,
      title: "Chief Operating Officer",
      institute: "Community of Biotechnology (COB)",
      weblink: "https://www.cobt.org/about/leaders",
      time: `1 Sep 2020 – ${currentDate}`,
      address: "Dhaka, Bangladesh",
      focus:
        " Managing and Chief of Media and Communication Department, Department of Publication, Department of Visual Arts",
    },
    {
      id: uuidv4(),
      img: cobLogo,
      title: "Founding Licensee & Organizer",
      institute: "TEDx BSMRSTU",
      weblink: "https://www.ted.com/tedx/events/43364",
      time: "30 Sep 2020 - 28 Feb 2022",
      address: "Gopalganj, Bangladesh",
      focus:
        "TEDxBSMRSTUWomen Event organize, TEDxBSMRSTU Event organize, Team management",
    },
    {
      id: uuidv4(),
      img: cobLogo,
      title: "Founding Licensee & Organizer",
      institute: "TEDx BSMRSTUWomen",
      weblink: "https://www.ted.com/tedx/events/40422",
      time: "30 Jul 2020 - 30 Feb 2021",
      address: "Gopalganj, Bangladesh",
      focus: "Event organize, Team management",
    },
    {
      id: uuidv4(),
      img: cobLogo,
      title: "Chief of Visual Arts",
      institute: "TEDx JUniv",
      weblink: "https://www.ted.com/tedx/events/36132",
      time: " 1 Aug 2020 – 31 Jul 2021",
      address: "Savar, Dhaka",
      focus: "Leadership, Graphics designing and web application development",
    },
    {
      id: uuidv4(),
      img: cobLogo,
      title: "Chief of Visual Arts",
      institute: "TEDx SUST",
      weblink: "https://www.ted.com/tedx/events/35280",
      time: "1 Jun 2020 – 30 Jun 2021",
      address: "Savar, Dhaka",
      focus: "Leadership, Graphics designing and web application development",
    },
    {
      id: uuidv4(),
      img: cobLogo,
      title: "Core Member",
      institute: "ISCB RSG-Bangladesh",
      weblink: "http://rsg-bangladesh.iscbsc.org/",
      time: " 1 Apr 2020 – 15 Apr 2021",
      address: "Savar, Dhaka",
      focus: "Leadership, Graphics designing and web application development",
    },
    {
      id: uuidv4(),
      img: bsmiabfirstLogo,
      title: "Executive Member",
      institute: "1st BSMIAB-COB International Conference on COVID-19 Pandemic",
      weblink: "https://www.bsmiab.org/conference-2020/",
      time: "6 Nov 2020 - 8 Nov 2020",
      address: "Dhaka, Bangladesh",
      focus: "Executive member and organizing and managing the team operations",
    },

    {
      id: uuidv4(),
      img: ibsLogo,
      title: "Team Leader",
      institute: "International Biotech Symposium 2021",
      weblink:
        "https://www.cobt.org/events/international-biotech-symposium-2021/",
      time: "13 Feb 2021 - 20 Feb 2021",
      address: "Dhaka, Bangladesh",
      focus: "Organizer and team operations",
    },

    {
      id: uuidv4(),
      img: bsmiabSecondLogo,
      title: "Executive Member",
      institute: "2nd BSMIAB-COB International Conference on COVID-19 Pandemic",
      weblink:
        "https://www.cobt.org/events/2nd-bsmiab-cob-international-conference-on-covid-1/",
      time: "12 Nov 2021 - 14 Nov 2021",
      address: "Dhaka, Bangladesh",
      focus: "Executive member and organizing and managing the team operations",
    },
  ],
};

export default experiencesData;
