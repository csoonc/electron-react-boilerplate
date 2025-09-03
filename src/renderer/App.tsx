import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
        <div>
          <p>Hello From Member C</p>
          <img
            src="https://th.bing.com/th/id/R.d2e66be4233b0492525670c83259120e?rik=4fbG6NZQPHSFCQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fa%2f3%2f3%2f9625.jpg&ehk=NOH3uXyGuW%2fMGsQLmAs9Qs9DKRygRCs10U52HGYh4rI%3d&risl=&pid=ImgRaw&r=0"
            alt="memes dog"
            width="150"
            height="130"
          />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
