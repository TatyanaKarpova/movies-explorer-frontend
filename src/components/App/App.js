import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import './App.css';

function App() {
  return (
    <div className='page'>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' component={SavedMovies} />
        <Route path='/profile' component={Profile} />
        <Route path='/signin' component={Login} />
        <Route path='/signup' component={Register} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
