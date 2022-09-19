import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import About from "./Page/About";
import MyCourse from "./Page/MyCourse";
import ContactUs from "./Page/ContactUs";
import BecomeInstractor from "./Page/BecomeInstractor";
import SignIn from "./Page/SignIn";
import SingUp from "./Page/SingUp";
import Cart from "./Page/Cart";
import InstructorDetails from "./Component/InstructorDetails/InstructorDetails";
import CourseDetails from "./Page/CourseDetails";
import Profile from "./Page/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<MyCourse />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/become-instructor" element={<BecomeInstractor />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SingUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/instructor-course" element={<InstructorDetails />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
