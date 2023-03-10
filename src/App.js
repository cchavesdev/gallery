import { Routes, Route } from "react-router-dom";
import { getAllUsers } from "./services/userService.js";
import "./App.css";
import Users from "./components/Users/Users";
import VideoGallery from "./components/VideoGallery";

function App() {
  //Generating dyniamic path for each user
  let usersUrls = getAllUsers().map((user, index) => {
   return (
    <Route key={index} path={`/${user.guid}`} element={<Users userData={user} />} />
   )
  });

  return (
    <Routes>
      <Route path="/" element={<VideoGallery />} />
      
      {usersUrls}
    </Routes>
  );
}

export default App;
