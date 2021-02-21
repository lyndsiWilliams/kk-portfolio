// React
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/short-stories">Short Stories</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
};

export default NavBar;