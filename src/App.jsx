import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Header } from "./layout/";
import { ScrollerMotion } from "scroller-motion";
function App() {
  return (
    <ScrollerMotion>
      <main className="relative h-full overflow-x-hidden bg-palette-900 ">
        <Header />
        <Hero />
        <Portfolio />
      </main>
    </ScrollerMotion>
  );
}

export default App;
