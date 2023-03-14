import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage';
import './App.css';

function App() {
  return (
    <Router>
       <div className="App">
        <div>Hi!</div> 
        <Routes>
          <Route path='/' element={<MainPage/>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
