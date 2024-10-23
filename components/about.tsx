export function About() {
  return (
    <section
      id="about"
      // className="pb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>

      <div className="space-y-3">
        <div>
          With years of development experience, I excel in creating scalable,
          maintainable, and high-performing web applications that meet user and
          business needs. I prioritize industry best practices, accessibility,
          and intuitive design.
        </div>

        <div>
          I&apos;m a collaborative team player who values communication and
          accountability, ensuring projects are delivered on time and within
          budget. My passion for user-centered design drives me to build
          adaptable and accessible web apps.
        </div>

        <div>
          If you&apos;re seeking a dedicated frontend developer with strong
          expertise and a commitment to quality, let&apos;s connect and explore
          how I can contribute to your team&apos;s success.
        </div>
      </div>
    </section>
  );
}
