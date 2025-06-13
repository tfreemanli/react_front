import './App.css';
import Helloworld from './components/Helloworld';
import HelloworldFn from './components/Helloworld_fn';
import Conditions from "./components/Conditions";
import Loop from "./components/Loop";
import Form from "./components/Form";
import FetchData from "./components/FetchData";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";
import Counter from "./components/Counter";
import FetchData2 from "./components/FetchData2";

function App() {
  function clickMe(args){
    alert("You click me in App() and " + args);
  }
  return (
    <div className="App">
      <header>
        This is my header
      </header>
        <Menu />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Helloworld name="John" age="25" clickMe={clickMe} />} />
                <Route path="/HelloworldFn" element={<HelloworldFn  name="Peter" age="42" clickMe={clickMe}/>} />
                <Route path="/condition" element={<Conditions />} />
                <Route path="/loop" element={<Loop />} />
                <Route path="/form" element={<Form />} />
                <Route path="/fetch" element={<FetchData />} />
                <Route path="/count" element={<Counter />} />
                <Route path="/fetchdata2" element={<FetchData2 />} />
                {/*<Route path="/register" element={<Register />} />*/}
                {/*<Route path="/login" element={<Login />} />*/}
                {/*<Route path="/logout" element={<Logout />} />*/}
            </Routes>
        </BrowserRouter>
      <footer>
        This is my Footer
      </footer>
    </div>
  );
}

export default App;
