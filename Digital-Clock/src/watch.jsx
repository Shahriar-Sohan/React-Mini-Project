import React, { useEffect, useState } from "react";
import KakashiImage from "./assets/Kakashi.jpg";

function Watch() {
  const Styles = {
    bg: {
      backgroundImage: `url(${KakashiImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      width: "100vw",
      paddingTop: "1vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    clock: {
      color: "white",
      fontSize: "12vw",
      padding: "10px",
      textShadow: "10px 10px 10px #000000",
    },
  };

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  let hour = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const period = hour >= 12 ? "PM" : "AM";

  
  hour = hour % 12 || 12;
 
  return (
    <div style={Styles.bg}>
      <h1 style={Styles.clock}>
        {hour.toString().padStart(2, "0")}:{minutes}:{seconds} {period}
      </h1>
    </div>
  );
}

export default Watch;