// React
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import ShortStories from './components/ShortStories';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
// Styling
import './App.css';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/short-stories" component={ShortStories} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
