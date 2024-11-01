import Link from "next/link";

import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Spotlight } from "@/components/spotlight";

export default function HomePage() {
  return (
    <div className="relative">
      <Spotlight />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />

          <main id="content" className="pt-10 lg:w-1/2 lg:py-24">
            <About />

            <div className="my-5">
              <Link
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="View Résumé (opens in a new tab)"
              >
                <span>
                  View Full{" "}
                  <span className="inline-block">
                    Résumé
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
              </Link>
            </div>

            <div className="absolute bottom-10">
              <Footer />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
