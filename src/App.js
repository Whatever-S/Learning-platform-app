import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage';
import './App.scss';

function App() {
  return (
    <Router>
       <div className="App container">
        <Routes>
          <Route path='/' element={<MainPage/>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
