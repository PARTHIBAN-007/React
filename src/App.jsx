import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Counter from './pages/Counter';
import Hello from './pages/page';
import { Todo } from './pages/Todo';
// import AudioRecorder from './pages/AudioRecorder';
import DynamicTabs from './pages/Tab';
import Tabcomponent from './pages/Tabcomponent';
import StyledPage from './pages/style';
import DesignPage from './pages/design';
import LandingPage from './pages/LandingPage';
import AdminPage from './pages/AdminPage';
import Admin from './pages/style';

function App() {

  
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hello />}></Route> 
          {/* <Route path="/main/:id" element={<Counter />}></Route> */}
          {/* <Route path="/counter" element={<Counter />}></Route> */}
          {/* <Route path="/recorder" element={<AudioRecorder />}></Route> */}
          <Route path="/tab" element={<DynamicTabs />}></Route>
          <Route path="/tabdata" element={<Tabcomponent />}></Route>
          <Route path="/style" element={<Admin />}></Route>
          <Route path="/design" element={<DesignPage />}></Route>
          <Route path="/landing" element={<LandingPage />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
