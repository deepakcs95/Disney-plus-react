import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Slider from "./Components/Slider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-full overflow-x-auto bg-[#17181c] text-white  flex gap-2 md:flex-col ">
      <Header />
      <div>
        <Slider />
      </div>
    </div>
  );
}

export default App;
