import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SingleMovie from './SingleMovie';
import Error from './Error';
import HeroPage from './HeroPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HeroPage/>} />
        <Route path='/movies/:movieId' element={<SingleMovie/>}/>
        <Route path='*' element={<Error />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
