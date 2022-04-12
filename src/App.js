import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Page/Header/Header";

function App() {
  return (
    <div className="bg-bgimg App">
      <Header></Header>
      <Routes>
        <Route path="/news" element={} />
        <Route path="/destination" element={} />
        <Route path="/news" element={} />
        <Route path="/news" element={} />
       
      </Routes>
    </div>
  );
}

export default App;
