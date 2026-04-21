import { BrowserRouter, Route, Routes } from "react-router-dom";
import Airlingo from "./components/Airlingo.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Airlingo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
