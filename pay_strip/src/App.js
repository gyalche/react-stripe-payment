import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import StripContainer from './components/StripContainer';
function App() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="App">
        <h1>The payments</h1>
      {showItem? <StripContainer />: <><h3>Buy bla bla</h3><button onClick={()=>setShowItem(true)}>Purchase</button></>}
    </div>
  );
}

export default App;
