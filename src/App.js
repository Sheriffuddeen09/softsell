import { Route, Routes } from "react-router-dom";
import CatGallery from "./Catfetch";
import Header from "./Header";
import Favorite from "./Favorite";


function App() {



  return (
    <div>
      <Header />
    <div>
      <Routes>
          <Route path="/" element={
          <CatGallery />} />
          <Route path="/favorite" element={<Favorite />} />      
      </Routes>
    </div>
    </div>
  );
}

export default App;
