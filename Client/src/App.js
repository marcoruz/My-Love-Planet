import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage2 from "./pages/LandingPage2";
import LandingPage3 from "./pages/LandingPage3";
import LandingPage4 from "./pages/LandingPage4";
import { useEffect } from "react";

/*
Die Komponenten Routes und Route werden aus "react-router-dom" importiert. Diese Komponenten werden verwendet, um die Routing-Struktur der Anwendung zu definieren.
*/
/*
Diese Imports werden verwendet, um die Routing- und Navigationsstruktur für die Anwendung festzulegen.
*/

/*
Die Hooks useNavigationType und useLocation werden ebenfalls aus "react-router-dom" importiert. Diese Hooks liefern Informationen über Navigationsaktionen und die aktuelle Position im Routing.
*/



function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page-3":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page-4":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage2 />} />
      <Route path="/landing-page-3" element={<LandingPage3 />} />
      <Route path="/landing-page-4" element={<LandingPage4 />} />
    </Routes>
  );
}
export default App;
