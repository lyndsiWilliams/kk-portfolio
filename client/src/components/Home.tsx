import { osName } from 'react-device-detect';

const Home = () => {
  return (
    <div className="home">
      <h1>Kathleen Kidder</h1>
      <h2>Writer, artist, cat and lizard fanatic</h2>
      <p>Your operating system is {osName}.</p>
    </div>
  );
};

export default Home;