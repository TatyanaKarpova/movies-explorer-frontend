import { React } from "react";
import MenuNav from "../MenuNav/MenuNav";
import AuthNav from "../AuthNav/AuthNav";

function Navigation({ isLoggedIn }) {
  return isLoggedIn ? <MenuNav /> : <AuthNav />;
}

export default Navigation;
