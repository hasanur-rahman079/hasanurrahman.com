import Link from "next/link";
import { HiOutlineArrowDownTray } from "react-icons/hi2";

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-700 dark:text-neutral-300">
        Hey, I’m MD. Hasanur Rahman, Welcome to my digital garden, where I share
        my thoughts, projects, and other things that I’d like to share with the
        world.
        <br />
        <br />
        Check out the{" "}
        <Link className="font-semibold hover:underline" href="/research">
          research page
        </Link>{" "}
        for all the research articles I’ve worked on. Most of my working areas
        are on Cancer, Alzheimer’s Disease and In-silico Drug designing.
        <br />
        <br />
        My sole motivation for creating this website is to connect with new
        individuals while also documenting my learnings for future references.
        There are no advertisements or affiliate connections on my website.
        <br />
        <br />
        To say hello, send me an email. Additionally, you can follow me on
        social medias. All of the links can be found on the home page. I enjoy
        getting to know new individuals.
      </p>
      <h3 className="font-bold text-xl font-serif" id="academic_life">
        Academic Life
      </h3>
      <hr />
      <p className="my-5 text-neutral-700 dark:text-neutral-300">
        Following my exceptional academic performance in high school, it seems
        that my educational progress is now experiencing a decline. The reason
        behind this decline might be attributed to my difficulty in grasping the
        correlation between classroom lectures and their practical
        implementation in real-world scenarios. My primary focus has always been
        on applying what I learn in a practical manner. Consequently, I devoted
        time to exploring bioinformatics and acquiring proficiency in
        programming languages such as Python and JavaScript.
        <br />
        <br />
        In August 2015, I concluded my secondary college education specializing
        in science at{" "}
        <span className="font-semibold">Cantonment College in Jessore</span>.
        Initially, I aspired to pursue a medical degree, but my aspirations led
        me towards the field of Biotechnology and Genetic Engineering.
        Consequently, I enrolled in the department of{" "}
        <span className="font-semibold">
          Biotechnology and Genetic Engineering at Bangabandhu Sheikh Mujibur
          Rahman Science and Technology University
        </span>{" "}
        in Gopalganj, Bangladesh. Due to the impact of the COVID-19 pandemic, my
        BSc graduation, which was originally planned for December 2020, was
        delayed and eventually completed in February 2022, achieving a CGPA of
        2.86/4.00.
        {/* <br />
        <br />
        <span className="text-xs italic">last updated: May 25, 23.</span> */}
      </p>
      <a
        className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all mb-8"
        rel="noopener noreferrer"
        target="_blank"
        href="/cv_hasanur.pdf"
      >
        <HiOutlineArrowDownTray />
        <p className="h-7 ml-1">download my academic resume</p>
      </a>

      <h3 className="font-bold text-xl font-serif" id="career_path">
        Career Path
      </h3>
      <hr />
      <p className="my-5 text-neutral-700 dark:text-neutral-300">
        I faced a significant loss of motivation during my bachelor's degree due
        to the disconnection between classroom lectures and their practical
        application in real-world situations. This led me to consider changing
        my career path. However, in my third year of undergraduate studies, I
        discovered a strong interest in the field of human disease research.
        Determined to learn and contribute to the scientific community, I sought
        guidance from my academic institution and various organizations. Over
        the course of several years, I gained valuable experience in the field
        of human disease research and began dreaming of pursuing higher studies
        abroad.
        <br />
        <br />
        An opportunity presented itself when I received an offer to pursue an{" "}
        <span className="font-semibold">
          MSc degree at Kyung Hee University in South Korea
        </span>
        . The offer included full funding for research in{" "}
        <span className="font-semibold">Cancer Material Development</span>,
        specifically for Korean Cancer Patients. Unfortunately, my plans were
        hindered as the Korean Embassy in Bangladesh denied my visa application
        twice, preventing me from entering Korea. Despite this setback, I
        persevered and completed a six-month-long thesis semester online but
        unable to continue the rest semesters.
        <br />
        <br />
        Now, I find myself facing new challenges as I strive to find a more
        suitable place to further my research career.
        <br />
        <br />
        <span className="text-xs italic">last updated: May 25, 23.</span>
      </p>

      <h3 className="font-bold text-xl font-serif" id="achievements">
        Achievements
      </h3>
      <hr />
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
        Here's some of my notable accomplishments from my little contributions
        in science.
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <ul>
          <li>CompBio-Bangladesh Fellow 2023</li>
          <li>
            7th Position out of Top 10 Researchers List 2022, Bangabandhu Sheikh
            Mujibur Rahman Science and Technology University, according to
            Scopus Database
          </li>
          <li>
            4th Position out of Top 15 Researchers List 2021, Bangabandhu Sheikh
            Mujibur Rahman Science and Technology University, according to
            Scopus Database
          </li>
          <li>
            Best Performing Research Assistant Award of 2020, ABEx Bio-Research
            Center, East Azampur, Dhaka-1230, Bangladesh.
          </li>
          <li>
            6th Position out of 14th Team in Bangladesh, International Hult
            Prize on campus 2019.
          </li>
        </ul>
      </div>
    </section>
  );
}
