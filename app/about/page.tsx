import { HiOutlineArrowDownTray } from "react-icons/hi2";

export default function AboutPage() {
  return (
    <section>
      {/* Intro Section */}
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-700 dark:text-neutral-300">
        Hi there! I am MD. Hasanur Rahman. This is my digital notebook, 
        where i share my thoughts, research projects, and random sparks of curiosity.
        <br/>
        <br/>
        As an young researcher, my research interests are on Genomics on Cancer, Alzheimer’s and their therapeutic options.
        <br/>
        <br/>
        My solo motivation for creating this website is to connect with new individuals while documenting my learning for future references.
        <br />
        <br />
        If you’d like to say hi, just send me an email 
        (<a className="font-semibold hover:underline" target="_blank" href="mailto:hasanurrahman.bge@gmail.com" title="Contact Hasanur Rahman via Email">hasanurrahman.bge@gmail.com</a>) 
        or find me on social medias, all links are on the homepage.
      </p>

      <a
        className="flex underline items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all mb-8"
        rel="noopener noreferrer"
        target="_blank"
        href="/cv_hasanur.pdf"
      >
        <HiOutlineArrowDownTray />
        <p className="h-7 ml-1">download my academic resume</p>
      </a>


      <br />
      <br />

      {/* Current Employment Section */}
      <h3 className="font-bold text-xl font-serif" id="academic_life">
        Current Employment
      </h3>
      <hr />
      <p className="my-5 text-neutral-700 dark:text-neutral-300">
        After completing a research assistant role at Dr. Bonglee Kim’s lab at Kyung Hee University, 
        Republic of Korea, I joined Dr. Hannan’s lab at Bangladesh Agricultural University. 
        Here, I am researching the identification of bioactive compounds as therapeutic targets for cancer 
        and Alzheimer’s disease.
        <br />
        <br />
        <span className="text-xs italic">last updated: Sep 14, 25.</span>
      </p>


      <br />
      <br />

      {/* Achievements Section */}  
      <h3 className="font-bold text-xl font-serif" id="achievements">
        Achievements
      </h3>
      <hr />
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
        Here's some of my notable accomplishments from the little contributions
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
        <span className="text-xs italic">last updated: Mar 20, 23.</span>
      </div>
    </section>
  );
}
