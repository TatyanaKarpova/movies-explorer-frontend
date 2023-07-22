import { React } from 'react';
import MoviesNav from '../MoviesNav/MoviesNav';
import AuthNav from '../AuthNav/AuthNav';


function Navigation({ loggedIn }) {  
    return loggedIn ? <MoviesNav /> : <AuthNav />;
};
  
export default Navigation;
