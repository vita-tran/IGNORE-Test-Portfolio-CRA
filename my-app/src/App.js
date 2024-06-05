import './App.css';
import * as React from 'react';

// Image Imports
import linkedinIcon from './images/linkedin.png';
import githubIcon from './images/github.png';
import slackIcon from './images/slack.png';
import gmailIcon from './images/gmail.png';
import xIcon from './images/x.png';
import holopinIcon from './images/holopin.png';
import handwaveIcon from './images/wave.png';
import helloWorld from './images/august.jpg';

// Component Imports
import ProjectSlideCarousel from './components/Carousel';
import NavBar from './components/HeaderNavBar';
import SkillGrid from './components/SkillsGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header" id='backToTop'>
        <NavBar />
      </header>

    </div>
  );
}

export default App;
