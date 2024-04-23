import Navbar from "./components/Navbar";
import { AboutSection } from "./components/AboutSection";
import Sidebar from "./components/Sidebar";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <AboutSection />
      <Sidebar />
      <Footer />
    </div>
  );
}
