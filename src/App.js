import './App.css';
import Navbar from './components/Navbar'
import Body from './components/Body';
import Resume from './components/Resume';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <div className="has-background-primary p-6">
        <h1 className="title has-text-centered has-text-white">About Me</h1>
        <Resume />
      </div>
      
    </div>
  );
}

export default App;
