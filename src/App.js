

import { NavBar, SocialLinks } from "./components/layout";

import { About, Contact, Home, Portifolio, Skills } from "./pages";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portifolio />
      <Skills/>
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
