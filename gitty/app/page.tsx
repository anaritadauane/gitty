import Navbar from "./components/Navbar";
import { AboutSection } from "./components/AboutSection";
import Sidebar from "./components/Sidebar";
import { RepoLists } from "./components/RepoLists";

export default function Home() {
  return (
    <div>
      <Navbar />
      <AboutSection />
      <Sidebar />
      <RepoLists />
    </div>
  );
}
