import { useState } from "react";
import { osName } from "react-device-detect";

const Home = () => {
  const [osSpan, setOsSpan] = useState("HOVER ME");

  return (
    <div className="home">
      <h1>Kathleen Kidder</h1>
      <h2>Writer, artist, cat and lizard fanatic</h2>
      <p>
        Your operating system is{" "}
        <span id="os-name" onMouseEnter={() => setOsSpan(osName)}>
          {osSpan}
        </span>
        .
      </p>
    </div>
  );
};

export default Home;
