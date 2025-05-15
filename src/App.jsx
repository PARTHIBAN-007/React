import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Counter from './pages/counter';
import Hello from './pages/page';

function App() {

  
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hello />}></Route>
          <Route path="/main/:id" element={<Counter />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
