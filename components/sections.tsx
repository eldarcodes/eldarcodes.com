"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export function Sections() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: document.getElementById("content"),
      }
    );

    const sections = [
      document.getElementById("about"),
      document.getElementById("experience"),
      document.getElementById("projects"),
    ];

    sections.forEach((section) => {
      if (!section) return;

      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const sections = [
    {
      title: "About",
      id: "about",
    },
    {
      title: "Experience",
      id: "experience",
    },
    {
      title: "Projects",
      id: "projects",
    },
  ];

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {sections.map((section) => {
          const href = `#${section.id}`;

          const isActive = activeSection === href;

          return (
            <li key={section.id}>
              <a className="group flex items-center py-3" href={href}>
                <span
                  className={cn(
                    "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none",
                    isActive && "w-16 bg-slate-200"
                  )}
                />
                <span
                  className={cn(
                    "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
                    isActive && "text-slate-200"
                  )}
                >
                  {section.title}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
