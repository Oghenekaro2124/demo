import React, { useState, useEffect } from "react";
import "../styles/App.css";

function Profile() {
  const [person] = useState({
    fullName: "Kelvin Boniface",
    bio: "Software developer with a passion for open-source projects.",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Full Stack Developer",
  });

  const [mountedTime, setMountedTime] = useState(null);
  const [intervalTime, setIntervalTime] = useState(0);

  useEffect(() => {
    const now = new Date();
    setMountedTime(now);

    const timer = setInterval(() => {
      const secondsSinceMount = Math.floor((new Date() - now) / 1000);
      setIntervalTime(secondsSinceMount);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="profile-container">
      <img src={person.imgSrc} alt={person.fullName} className="profile-img" />
      <h1 className="profile-name">{person.fullName}</h1>
      <h2 className="profile-profession">{person.profession}</h2>
      <p className="profile-bio">{person.bio}</p>
      <p className="profile-timer">
        Component mounted {intervalTime} seconds ago.
      </p>
    </div>
  );
}

export default Profile;
