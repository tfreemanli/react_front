import './App.css';
import Helloworld from './components/Helloworld';
import HelloworldFn from './components/Helloworld_fn';
import Conditions from "./components/Conditions";
import Loop from "./components/Loop";
import Form from "./components/Form";
import FetchData from "./components/FetchData";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  function clickMe(args){
    alert("You click me in App() and " + args);
  }
  return (
    <div className="App">
      <header>
        This is my header
      </header>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/HelloworldFn">HelloworldFn</a></li>
                <li><a href="/condition">Condition</a></li>
                <li><a href="/loop">Loop</a></li>
                <li><a href="/form">Form</a></li>
                <li><a href="/fetchdata">Fetch</a></li>
            </ul>
        </nav>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Helloworld name="John" age="25" clickMe={clickMe} />} />
                <Route path="/HelloworldFn" element={<HelloworldFn  name="Peter" age="42" clickMe={clickMe}/>} />
                <Route path="condition" element={<Conditions />} />
                <Route path="loop" element={<Loop />} />
                <Route path="form" element={<Form />} />
                <Route path="fetch" element={<FetchData />} />
            </Routes>
        </BrowserRouter>
      <footer>
        This is my Footer
      </footer>
    </div>
  );
}

export default App;
