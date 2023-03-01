import { NavBar } from "./components/layout";

import { About, Contact, Home, Portifolio, Skills } from "./pages";
import Payment from "./pages/Payment";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portifolio />
      <Skills />
      <Contact />
      <Payment />
    </div>
  );
}

export default App;
