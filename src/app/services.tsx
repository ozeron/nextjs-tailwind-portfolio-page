"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
  ClockIcon,
  BanknotesIcon
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SIGNUP_URL ='https://docs.google.com/forms/d/1qNX6rtI7gfPV6LdZFwYy8XdLP27yQfh1YvVs0dQ0xj0/viewform?fbclid=IwAR2WJXdbtIc37CHkHaTS-iCNXju3xvi2oYTVJQ3XGa1lrClX86KZsPWUw7M&edit_requested=true'

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development:",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      " I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children:
      "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.",
  },
  {
    icon: HashtagIcon,
    title: " Web Optimization",
    children:
      "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  },
  {
    icon: EyeIcon,
    title: "User-Centric Design",
    children:
      "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality Assurance",
    children:
      "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  },
];

export function Services() {
  return (
    <>
    <section className="px-8">
      <div className="container mx-auto mb-20 mt-20 text-cente flex flex-start ">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Кар'єрні консультації
        </Typography>
      </div>
      <div className="px-8 grid grid-cols-1 md:grid-cols-10">
        <div  className="col-span-3 mx-auto mb-5 text-left">
          <Typography variant="lead">
            Разова консультація
          </Typography>
          <Typography variant="lead">
            <ClockIcon className="inline-block mr-1 h-5 w-5" /> 90 хв
          </Typography>
          <Typography variant="lead" className="pb-5">
            <BanknotesIcon className="inline-block mr-1 h-5 w-5" /> 4000 грн
          </Typography>
          <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
            <Button className="w-full md:w-32" color="gray" size="sm">
              Записатися
            </Button>
          </a>
        </div>

        <div className="col-span-7 mx-auto mb-20 text-left">
          <Typography variant="paragraph" className="mb-5">
            За одну консультацію ми можемо з вами пропрацювати якісно один кар'єрний запит. Спочатку ми проведемо короткий discovery-call, де обговоримо очікування та потреби. Я дам вам домашнє завдання(pre-work), яке потрібно зробити перед консультацією.
          </Typography>
          <Typography variant="paragraph" className="mb-5">
            Приклади точкових кар'єрних запитів:
          </Typography>
          <ul className="list-disc list-inside">
            {/* <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Стратегія пошуку роботи
            </li> */}
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Аналіз чому пошук не дає бажаних результатів
            </li>
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Проходження performance review. Як підготуватися до перегляду ЗП
            </li>
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Підготовка до співбесіди і репетиція розповіді про себе
            </li>
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Допомога з формуванням резюме, аналіз готового резюме та супровідного листа
            </li>
            {/* <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Робота зі страхами під час пошуку роботи
            </li> */}
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              План карʼєрного розвитку на поточному місці роботи
            </li>
            {/* <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Старт кар'єри в IT
            </li> */}
            {/* <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Прийняття карʼєрного рішення (піти з поточного місця роботи чи залишитись)
            </li>
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Розбір ваших кейсів
            </li> */}
          </ul>
          <Typography variant="lead" className="mb-5">
            Що включено:
          </Typography>
          <ul className="list-disc list-inside">
              <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
                90 хв консультації в Googel Meet
              </li>
              <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
                Підтримка протягом тижня в месенджерах
              </li>
              <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
                Шаблон CV рекомендований
              </li>
              <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
                Гайд по тому, як пройти інтерв'ю
              </li>
              <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
                  <strong>Важливо:</strong> зробити pre-work перед консультацією, щоб заняття було ефективне.
              </li>
            </ul>

          </div>
      </div>
      <div className="px-8 grid grid-cols-1 md:grid-cols-10">

        <div  className="col-span-3 mx-auto mb-5 text-left">
          <Typography variant="lead">
            Пакет консультації
          </Typography>
          <Typography variant="lead">
            5 х <ClockIcon className="inline-block mr-1 h-5 w-5" /> 90 хв
          </Typography>
          <Typography variant="lead" className="pb-5">
            <BanknotesIcon className="inline-block mr-1 h-5 w-5" /> 20000 грн
          </Typography>
          <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
            <Button className="w-full md:w-32" color="gray" size="sm">
              Записатися
            </Button>
          </a>
        </div>
        <div className="col-span-7 mx-auto mb-20 text-left">
          <Typography variant="paragraph" className="mb-5">
            Пакет консультацій допомагає вам комплексно пропрацювати тему пошуку роботи, або опрацювати складнішу тему(зміна карʼєрного напрямку). Зазвичай ми структуруємо консультації в такому форматі:
          </Typography>
          <ol className="list-decimal list-inside">
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Aналіз себе, своїх сильних сторін та ринку.
            </li>
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Адаптація CV / LinkedIN до бажаної вакансії
            </li>
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Підготовка до інтерв'ю
            </li>
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Аналіз проходження інтерв'ю
            </li>
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Як правильно вести переговори, та обговорювати зарплату.
            </li>
          </ol>
          <Typography variant="paragraph" className="mb-5">
            За потреби я можу змінити темпи, та підлаштувати програму під ваш кар'єрний запит.
          </Typography>
          <Typography variant="lead" className="mb-5">
            Що включено:
          </Typography>
          <ul className="list-disc list-inside">
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              5 зустрічей по 90 хв в Googel Meet
            </li>
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Підтримка протягом тижня в месенджерах
            </li>
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Шаблон CV рекомендований
            </li>
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Гайд по тому, як пройти інтерв'ю
            </li>
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Реферинг по нетвокру, якщо є змога
            </li>
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
                <strong>Важливо:</strong> робити pre-work перед консультаціями, щоб заняття були ефективні.
            </li>
          </ul>
        </div>

      </div>
      { /*<div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
        </div> */ }
    </section >
    {/* <section className="px-8">
    <div className="container mx-auto mb-20 mt-20 text-cente flex flex-start ">
      <Typography variant="h1" color="blue-gray" className="mb-4">
        Тренінги та воркшопи
      </Typography>
    </div>
    <div className="container mx-auto mb-20  text-cente flex flex-start ">
      <Typography variant="paragraph" className="mb-5">
            Я допоможу вашій команді опанувати нові навички, покращити продуктивність та ефективно вирішувати складні питання через проведення тренінгів та фасилітаційних сесій. Ви отримаєте структуровані знання, практичні навички та чіткі результати для досягнення цілей.
          </Typography>
    </div>

    <div className="px-8 grid grid-cols-1 md:grid-cols-10">
      <Typography variant="lead" className="col-span-3 mx-auto mb-5 text-left">
        Проведення тренінгу
      </Typography>
      <div className="col-span-7 mx-auto mb-20 text-left">
        <ul className="list-disc list-inside">
          <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
            Провести тренінг на певну тему( Тайм-менеджмент, Софт-скіли, Онлайн-інструменти)
          </li>
          <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
            Розробка тренінгу/адаптація під потреби команди
          </li>
          <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
            Проведення Фасилітації ( Брейншторминг, SWOT-аналіз, Розробка місаї, візії, цінностей)
          </li>

        </ul>
        <Typography variant="lead" className="mb-5">
          Процес:
        </Typography>
        <ul className="list-disc list-inside">
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Виявлення ваших потреб. Спілкування з вами, замовниками, командою.
            </li>
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Написання тренінгу
            </li>
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Проведення тренінгу чи кількох тренінгів
            </li>
            <li className="mb-2 antialiased font-sans text-base font-light leading-relaxed text-inherit">
              Збір фідбеку, замір до/після тренінгу.
            </li>
          </ul>
        </div>
    </div>
  </section > */}
  </>
  );
}

export default Services;
