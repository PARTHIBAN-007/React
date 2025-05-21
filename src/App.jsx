import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Counter from './pages/Counter';
// import Hello from './pages/page';
import { Todo } from './pages/Todo';
// import AudioRecorder from './pages/AudioRecorder';
import DynamicTabs from './pages/Tab';
import Tabcomponent from './pages/Tabcomponent';


function App() {

  
  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Hello />}></Route> */}
          {/* <Route path="/main/:id" element={<Counter />}></Route> */}
          <Route path="/counter" element={<Counter />}></Route>
          {/* <Route path="/recorder" element={<AudioRecorder />}></Route> */}
          <Route path="/tab" element={<DynamicTabs />}></Route>
          <Route path="/tabdata" element={<Tabcomponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
