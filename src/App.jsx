import Header from "./components/nav/Header";
import Footer from "./components/nav/Footer";

import "./App.css";

// TODO:
// DONE Add scraper and things that are needed for it
// SORT OF DONE (update/30m) Make the scraper update API/DB on Reacts useEffect, that way it updates automatically
// DONE Change React to use API/DB instead of static data "http://localhost:3000/competitions"
// DONE Hide MongoDB connection string to .env file
// HALF DONE Add the functionalities in README.md
// DONE Publish frontend to GitHub Pages
// DONE Publish backend to Heroku or AWS or something
// - FIX render.com that backend runs scraper
// - Add a area selector that shows the narrows down the competitions to the selected area
// FOR PASSING THE COURSE:
// - Add function to add competition to favourites, display these in favourites page
// - Fix CSS, after adding navigation, styling is broken, compare to published version.

function App() {


  // Render the page
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
