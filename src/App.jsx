import "./App.css";
import LineChart from "./Coponents/LineChart/LineChart";
import Navbar from "./Coponents/Navbar/Navbar";
import Phones from "./Coponents/Phones/Phones";
import PriceOptions from "./Coponents/PriceOptions/PriceOptions";

// import DaisyNav from "./Coponents/DaisyNav/DaisyNav";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-4xl bg-rose-600">Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  );
}

export default App;
