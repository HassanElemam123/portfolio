import React, { useState } from "react";

const profile = {
  name: "Hassan El-Emam",
  fullName: "Hassan Mohamed Hassan El-Emam",
  role: "Junior Front-End Developer",
  email: "hassannnelemammm@gmail.com",
  github: "https://github.com/HassanElemam123",
  phone1: "01142462480",
  phone2: "01028187615",
  whatsapp: "https://wa.me/201142462480",
  phoneLink: "tel:+201028187615",
  image: "/images/hassan.jpg",
  cv: "/Hassan_El-Emam_Front-End_Developer_CV.pdf",
  summary:
    "Junior Front-End Developer focused on building responsive and user-friendly web interfaces using HTML5, CSS3, JavaScript, React, Vite, and Tailwind CSS.",
};

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript ES6",
  "React",
  "Vite",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Responsive Design",
  "Flexbox",
  "CSS Grid",
  "DOM Manipulation",
  "API Integration",
  "Formik",
  "Yup",
  "React Router",
  "Git",
  "GitHub",
];

const projects = [
  {
    title: "Mexemy For Courses",
    description:
      "Responsive course platform front-end built with React + Vite. Includes reusable components, routing, forms, validation, notifications, and API integration.",
    tech: [
      "React",
      "Vite",
      "Bootstrap",
      "React Router",
      "Formik",
      "Yup",
      "React Toastify",
      "API Integration",
    ],
    live: "https://mexemy-for-courses.vercel.app/",
    github: "https://github.com/HassanElemam123",
  },
  {
    title: "Photo Search Model",
    description:
      "Responsive photo search application using React + Vite. Users can search and browse API-driven image results through a clean state-driven interface.",
    tech: ["React", "Vite", "JavaScript", "CSS", "API Integration"],
    live: "https://photo-search-model-by-react.vercel.app/",
    github: "https://github.com/HassanElemam123",
  },
];

const education = [
  {
    title: "Bachelor of Commerce",
    place: "Mansoura University",
  },
];

const courses = [
  "Eraasoft — Front-End Developer Track",
  "Creativo Mansoura — Front-End Course",
  "Self-learning — YouTube tutorials and practice projects",
];

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-120px] top-20 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-[-160px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <header className="fixed left-0 top-0 z-40 w-full border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowProfile(true)}
              className="group relative h-14 w-14 overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 ring-2 ring-cyan-400/40 shadow-lg shadow-cyan-500/20 transition hover:scale-105"
              title="Open profile"
            >
              {!imageError ? (
                <img
                  src={profile.image}
                  alt={profile.name}
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="flex h-full w-full items-center justify-center text-lg font-black text-slate-950">
                  HE
                </span>
              )}

              <span className="absolute inset-0 bg-slate-950/20 opacity-0 transition group-hover:opacity-100" />
            </button>

            <div>
              <h1 className="text-sm font-black sm:text-base">
                {profile.name}
              </h1>
              <p className="text-xs font-medium text-slate-400">
                Front-End Developer
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-300">
              About
            </a>
            <a href="#skills" className="transition hover:text-cyan-300">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-cyan-300">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-cyan-300">
              Contact
            </a>
          </div>

          <a
            href={profile.cv}
            download="Hassan_El-Emam_Front-End_Developer_CV.pdf"
            className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-1 hover:bg-cyan-300"
          >
            Download CV
          </a>
        </nav>
      </header>

      <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-200">
              Available for Front-End Opportunities
            </div>

            <h2 className="max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Building clean,
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                responsive web apps.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {profile.summary} Experienced in reusable components, client-side
              routing, form validation, debugging, GitHub workflow, and modern
              responsive UI.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-sm font-black text-white shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              <Stat number="2+" label="Live Projects" />
              <Stat number="15+" label="Skills" />
              <Stat number="100%" label="Responsive" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-400/20 to-violet-500/20 blur-2xl" />

            <div className="relative rounded-[40px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur">
              <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowProfile(true)}
                    className="h-20 w-20 overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-400 to-violet-500 ring-2 ring-cyan-400/40 transition hover:scale-105"
                  >
                    {!imageError ? (
                      <img
                        src={profile.image}
                        alt={profile.name}
                        onError={() => setImageError(true)}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center text-2xl font-black text-slate-950">
                        HE
                      </span>
                    )}
                  </button>

                  <div>
                    <h3 className="text-2xl font-black">{profile.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-cyan-300">
                      {profile.role}
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <InfoCard
                    title="Focus"
                    text="React, Vite, Tailwind, UI Components"
                  />
                  <InfoCard
                    title="Strength"
                    text="Clean Code, Debugging, Responsive Design"
                  />
                  <InfoCard
                    title="Workflow"
                    text="Git, GitHub, API Integration"
                  />
                </div>

                <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                  <p className="text-sm leading-7 text-cyan-100">
                    “I care about building interfaces that are simple, fast,
                    modern, and easy for users to understand.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-24">
        <SectionTitle
          label="About"
          title="A Front-End Developer who loves clean UI."
          text="Focused on writing maintainable code, creating reusable components, and building responsive interfaces that work smoothly across devices."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <FeatureCard
            title="Responsive Interfaces"
            text="Creating layouts that look good on mobile, tablet, and desktop using Flexbox, CSS Grid, Tailwind, and Bootstrap."
          />
          <FeatureCard
            title="React Components"
            text="Building reusable, organized, and scalable React components with clean state management and routing."
          />
          <FeatureCard
            title="Forms & APIs"
            text="Working with form validation, API-driven interfaces, notifications, and browser DevTools debugging."
          />
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-24">
        <SectionTitle
          label="Skills"
          title="Technical toolkit"
          text="Core technologies and tools used to build modern front-end applications."
        />

        <div className="mt-12 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-bold text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-24">
        <SectionTitle
          label="Projects"
          title="Selected work"
          text="Real projects built with React, Vite, APIs, routing, forms, and responsive layouts."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-[32px] border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-slate-950/20 transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.07]"
            >
              <div className="mb-6 h-48 rounded-[26px] border border-white/10 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-violet-500/20 p-5">
                <div className="flex h-full flex-col justify-between rounded-[22px] bg-slate-950/60 p-5">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-cyan-300">
                      React Project
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-black">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800 px-3 py-2 text-xs font-bold text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
              Training
            </p>
            <h2 className="mt-4 text-3xl font-black">Courses & Practice</h2>

            <div className="mt-8 space-y-4">
              {courses.map((course) => (
                <div
                  key={course}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-slate-300"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
              Education
            </p>
            <h2 className="mt-4 text-3xl font-black">Academic Background</h2>

            <div className="mt-8 space-y-4">
              {education.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-slate-400">{item.place}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <h3 className="font-black text-white">Languages</h3>
              <p className="mt-2 text-slate-400">
                Arabic Native — English Conversational / Professional Basics
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24">
        <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-violet-500/10 p-8 text-center shadow-2xl shadow-cyan-500/10 sm:p-12">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Let’s build something great.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Open for junior front-end opportunities, internships, freelance
            tasks, and collaborative web projects.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-cyan-400 px-7 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Send Email
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              GitHub Profile
            </a>
          </div>

          <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
            <ContactCard
              title="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />

            <ContactCard
              title="WhatsApp"
              value={profile.phone1}
              href={profile.whatsapp}
              external
            />

            <ContactCard
              title="Phone"
              value={profile.phone2}
              href={profile.phoneLink}
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Hassan El-Emam. Built with React & Tailwind
        CSS.
      </footer>

      {showProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-3xl border border-white/10 bg-slate-900 p-6 text-center shadow-2xl shadow-cyan-500/20">
            <button
              onClick={() => setShowProfile(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white transition hover:bg-white/20"
              aria-label="Close profile"
            >
              ×
            </button>

            <div className="mx-auto h-28 w-28 overflow-hidden rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 ring-4 ring-cyan-400/40">
              {!imageError ? (
                <img
                  src={profile.image}
                  alt={profile.name}
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="flex h-full w-full items-center justify-center text-3xl font-black text-slate-950">
                  HE
                </span>
              )}
            </div>

            <h2 className="mt-5 text-2xl font-black text-white">
              {profile.name}
            </h2>

            <p className="mt-2 text-sm font-semibold text-cyan-300">
              {profile.role}
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Front-End Developer focused on building responsive, clean and
              user-friendly web interfaces using React, Vite and Tailwind CSS.
            </p>

            <div className="mt-6 flex justify-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                GitHub
              </a>

              <a
                href="#contact"
                onClick={() => setShowProfile(false)}
                className="rounded-full border border-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function SectionTitle({ label, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
        {label}
      </p>
      <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-300">{text}</p>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <p className="text-3xl font-black text-cyan-300">{number}</p>
      <p className="mt-1 text-sm font-semibold text-slate-400">{label}</p>
    </div>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <p className="text-sm font-black text-white">{title}</p>
      <p className="mt-2 text-sm text-slate-400">{text}</p>
    </div>
  );
}

function FeatureCard({ title, text }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.07]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl">
        ✦
      </div>
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-4 leading-7 text-slate-300">{text}</p>
    </div>
  );
}

function ContactCard({ title, value, href, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 p-5 transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-cyan-500/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-violet-500/10 opacity-0 transition group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-black text-cyan-300 transition group-hover:text-cyan-200">
            {title}
          </p>

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300 opacity-0 transition group-hover:opacity-100">
            ↗
          </span>
        </div>

        <p className="mt-2 break-words text-sm font-semibold text-slate-200 transition group-hover:text-white">
          {value}
        </p>
      </div>
    </a>
  );
}

export default App;
