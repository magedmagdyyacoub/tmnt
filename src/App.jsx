import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Episodes from "./pages/Episodes";
import FanZone from "./pages/FanZone";
import TurtleRace from "./pages/TurtleRace";
import MemoryGame from "./pages/MemoryGame";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import AdminDashboard from "./pages/AdminDashboard";
import AdminPostCreate from "./pages/AdminPost Create"; // ✅ تم تصحيح الاسم
import AdminMyPosts from "./pages/AdminMyPosts";
import AddAdmin from "./pages/AddAdmin";
import PostDetail from "./pages/PostDetail";
import Users from "./pages/UserList";
import FriendRequests from "./pages/FriendRequests";
import MyFriends from "./pages/MyFriends";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/fanzone" element={<FanZone />} />
          <Route path="/turtlerace" element={<TurtleRace />} />
          <Route path="/memory" element={<MemoryGame />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/posts" element={<AdminPostCreate />} />
          <Route path="/admin/myposts" element={<AdminMyPosts />} />
          <Route path="/admin/add-admin" element={<AddAdmin />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/users" element={<Users />} />
          <Route path="/friend-requests" element={<FriendRequests />} />
          <Route path="/my-friends" element={<MyFriends />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
