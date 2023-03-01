import { NavBar } from "./components/layout";

import { About, Contact, Home, Portifolio, Skills } from "./pages";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portifolio />
      <Skills />
      <Contact />
      
    </div>
  );
}

export default App;
