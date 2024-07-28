import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="main">
      <h2 className="main-header">React Crud Ops</h2>
    
      <Routes>
      <Route path='/create' element={<Create/>} />
      <Route path='/read' element={<Read/>} />
      <Route path='/update' element={<Update/>} />
      </Routes>
    
    </div>
     
    </>
  );
}

export default App;