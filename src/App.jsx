import './css/App.css'
import NavBar from './components/NavBar';
import Favorate from './pages/Favorate';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext';

function App() {

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/favorates' element={<Favorate />}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
