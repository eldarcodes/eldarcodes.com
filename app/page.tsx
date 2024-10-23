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

            <div className="pt-8 lg:pt-24">
              <Footer />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
