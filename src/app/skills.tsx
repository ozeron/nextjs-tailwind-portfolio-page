"use client";

import { Typography } from "@material-tailwind/react";
import {
  UsersIcon,
  FingerPrintIcon,
  SwatchIcon,
  AcademicCapIcon,
  EyeIcon,
  DocumentTextIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: ClockIcon,
    title: "7 років досвіду",
    children:
      "3 роки досвіду як бізнес тренер та L&D спеціаліст. 4 роки досвіду в інших HR напрямках (рекрутинг, People Partner)",
  },
  {
    icon: UsersIcon,
    title: "300+ людей",
    children:
      "Я допомогла більш ніж 300+ людям знайти їх роботу мрії протягом останніх 4 років",
  },
  {
    icon: AcademicCapIcon,
    title: "100+ івентів",
    children:
      "Провела 100+ корпоративних тренінгів та навчань для SkyUp, Projector, Beetroot Academy, Rocco Practicum",
  },
  // {
  //   icon: HashtagIcon,
  //   title: " Web Optimization",
  //   children:
  //     "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  // },
  // {
  //   icon: EyeIcon,
  //   title: "User-Centric Design",
  //   children:
  //     "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
  // },
  // {
  //   icon: DocumentTextIcon,
  //   title: "Testing and Quality Assurance",
  //   children:
  //     "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  // },
];

export function Skills() {
  return (
    <section className="px-8 pt-20">
      {/* <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </Typography>
      </div> */}
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
