import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Counter from './pages/counter';
import Hello from './pages/page';
import { Todo } from './pages/Todo';

function App() {

  
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hello />}></Route>
          <Route path="/main/:id" element={<Counter />}></Route>
          <Route path="/counter" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
