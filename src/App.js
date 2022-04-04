import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews'></Route>
        <Route path='/dashboard'></Route>
        <Route path='/blogs'></Route>
        <Route path='/about'></Route>
        <Route path='*'></Route>
      </Routes>
    </div>
  );
}

export default App;
