import './App.css';
import Helloworld from './components/Helloworld';
import HelloworldFn from './components/Helloworld_fn';
import Conditions from "./components/Conditions";
import Loop from "./components/Loop";
import Form from "./components/Form";
import FetchData from "./components/FetchData";

function App() {
  function clickMe(args){
    alert("You click me in App() and " + args);
  }
  return (
    <div className="App">
      <header>
        This is my header
      </header>
      <h1>Hello World in App()</h1>
      {/*<Helloworld name="John" age="25" clickMe={clickMe} />*/}
      {/*<HelloworldFn  name="Peter" age="42" clickMe={clickMe}/>*/}
      {/*<Conditions />*/}
        <Loop />
        <Form />
        <FetchData />
      <footer>
        This is my Footer
      </footer>
    </div>
  );
}

export default App;
