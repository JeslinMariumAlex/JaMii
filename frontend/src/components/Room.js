import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Room() {
  const { roomCode } = useParams();
  const [roomDetails, setRoomDetails] = useState({
    votesToSkip: 2,
    guestCanPause: false,
    isHost: false,
  });

  useEffect(() => {
    const getRoomDetails = () => {
      fetch("/api/get-room" + "?code=" + roomCode)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch room details");
          }
          return response.json();
        })
        .then((data) => {
          setRoomDetails({
            votesToSkip: data.votes_to_skip,
            guestCanPause: data.guest_can_pause,
            isHost: data.is_host,
          });
        })
        .catch((error) => {
          console.error("Error fetching room details:", error);
          // Optionally handle the error state here
        });
    };

    getRoomDetails();
  }, [roomCode]); // Dependency array ensures the effect runs when roomCode changes

  return (
    <div>
      <h3>Room Code: {roomCode}</h3>
      <p>Votes: {roomDetails.votesToSkip}</p>
      <p>Guest Can Pause: {roomDetails.guestCanPause.toString()}</p>
      <p>Host: {roomDetails.isHost.toString()}</p>
    </div>
  );
}
