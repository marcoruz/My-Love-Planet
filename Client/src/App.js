import React, { useEffect } from "react";
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

    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home Page Title";
        metaDescription = "Description for the home page.";
        break;

      case "/landing-page-2":
        title = "Landing Page 2 Title";
        metaDescription = "Description for landing page 2.";
        break;
      default:
        // Add a default case or set values for other paths

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
  }, [action, pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage2 />} />
      <Route path="/landing-page-3" element={<LandingPage3 />} />
      <Route path="/landing-page-4" element={<LandingPage4 />} />
    </Routes>
  );
}


// frontend.js
fetch('http://localhost:3000/api/map')
  .then(response => response.json())
  .then(data => {
    // Verarbeiten Sie die erhaltenen Daten
    console.log(data);
  })
  .catch(error => {
    // Behandeln Sie Fehler
    console.error('Error:', error);
  });

// Server-Antworten verarbeiten:
// javascript
// Copy code


// HTTP-Anfragen vom Frontend senden

fetch('http://localhost:8080/api/map') 
  .then(response => response.json())
  .then(data => {
    // Verarbeiten Sie die erhaltenen Daten
    console.log(data);
  })
  .catch(error => {
    // Behandeln Sie Fehler
    console.error('Error:', error);
  });


  // Server-Antworten verarbeiten

  fetch('http://localhost:8080/api/map')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Verarbeiten Sie die erhaltenen Daten
    const { lat, lon } = data;

    // Verwenden Sie lat und lon, um OpenStreetMap im Frontend anzuzeigen
    console.log('Latitude:', lat);
    console.log('Longitude:', lon);
    
    // Hier können Sie OpenStreetMap-Code oder andere Funktionen aufrufen, um die Karte anzuzeigen
  })
  .catch(error => {
    // Behandeln Sie Fehler
    console.error('Error:', error);
  });







export default App;
