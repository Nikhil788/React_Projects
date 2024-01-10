
import './App.css';
import CountdownTimer from './Components.js/CountdownTimer';
import Header from './Components.js/Header';
import Jumbotron from './Components.js/Jumbotron';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Jumbotron/>
        <CountdownTimer/>
       
      </header>
    </div>
  );
}

export default App;
