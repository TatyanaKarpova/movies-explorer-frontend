import { React } from 'react';
import AuthNav from '../AuthNav/AuthNav';
import MoviesNav from '../MoviesNav/MoviesNav';


function Navigation({ loggedIn }) {  
    return loggedIn ? <MoviesNav /> : <AuthNav />;
};
  
export default Navigation;
