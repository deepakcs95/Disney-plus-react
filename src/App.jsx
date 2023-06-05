import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Channel from "./Components/Channel";
import MovieList from "./Components/MovieList";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-auto bg-[#17181c] text-white  flex gap-2 md:flex-col ">
      <Header />
      <div>
        <Slider />
        <Channel />
        <MovieList />
      </div>
    </div>
  );
}

export default App;
