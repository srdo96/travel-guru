import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Page/Blog/Blog";
import Booking from "./Page/Booking/Booking";
import Header from "./Page/Header/Header";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import News from "./Page/News/News";
import NotFound from "./Page/NotFound/NotFound";
import Registration from "./Page/Registration/Registration";

function App() {
  return (
    <div className=" App">
      <Header></Header>
      {/* <Home></Home> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
