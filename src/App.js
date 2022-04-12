import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Page/Blog/Blog";
import Header from "./Page/Header/Header";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import News from "./Page/News/News";

function App() {
  return (
    <div className="bg-bgimg App">
      <Header></Header>
      <Home></Home>
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
