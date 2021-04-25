import './App.css';

import { RateApp } from "capacitor-rate-app";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => { RateApp.requestReview() }}
        >
          Request review
        </button>
      </header>
    </div>
  );
}

export default App;
