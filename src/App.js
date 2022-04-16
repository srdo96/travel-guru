import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Page/Blog/Blog";
import Booking from "./Page/Booking/Booking";
import Header from "./Page/Header/Header";
import Home from "./Page/Home/Home";
import Registration from "./Page/Login/Registration/Registration";
import Login from "./Page/Login/Login/Login";
import News from "./Page/News/News";
import NotFound from "./Page/NotFound/NotFound";
import Test from "./Page/Test/Test";

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
        <Route path="/booking" element={<Booking></Booking>} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/test" element={<Test></Test>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
