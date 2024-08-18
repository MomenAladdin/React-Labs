import React, { useState } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComp from "./pages/home/homeComp";
import RegisterComp from "./pages/register/RegisterComp";
import LoginComp from "./pages/login/LoginComp";
import NotFoundComp from "./pages/notFound/notFound";
import NavbarComp from "./components/navbar/navbar";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import FavComp from "./pages/favourites/FavComp";
import { LanguageContext } from "./Context/LanguageContext";

function App() {
  const [langCont, setLangCont] = useState("En");
  return (
    <>
      <BrowserRouter>
        <LanguageContext.Provider value={{ langCont, setLangCont }}>
          <NavbarComp />
          <div className="container mt-5">
            <Routes>
              <Route path="/" element={<HomeComp />} />
              <Route path="/register" element={<RegisterComp />} />
              <Route path="/login" element={<LoginComp />} />
              <Route path="/movieDetails/:id" element={<MovieDetails />} />
              <Route path="/favourites" element={<FavComp />} />
              <Route path="*" element={<NotFoundComp />} />
            </Routes>
          </div>
        </LanguageContext.Provider>
      </BrowserRouter>
      {/* <Switch>
          <Route exact path="/" component={HomeComp} />
          <Route exact path="/register" component={RegisterComp} />
          <Route exact path="/login" component={LoginComp} />
        </Switch> */}
    </>
  );
}

export default App;
