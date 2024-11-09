import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./home/Home";


function App() {



  return (
    <div>
      <Header />
    <div>
      <Routes>
        <Route path="/" element={ <Home />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
