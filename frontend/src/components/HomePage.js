import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";

export default function HomePage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<p>This is the home page</p>} />
        <Route path="/join" element={<RoomJoinPage />} />
        <Route path="/create" element={<CreateRoomPage />} />
        <Route path="/room/:roomCode" element={<Room />} />
      </Routes>
    </Router>
  );
}
