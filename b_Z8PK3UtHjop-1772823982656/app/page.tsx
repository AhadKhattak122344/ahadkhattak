import { Header } from "@/components/Header";
import { Timeline } from "@/components/Timeline";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <Header />

        <hr className="border-t border-gray-100" />

        <Timeline />

        <hr className="border-t border-gray-100" />

        <Projects />

        <Footer />
      </div>
    </main>
  );
}
