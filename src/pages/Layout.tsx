// https://www.w3schools.com/react/react_router.asp

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/rai">PRESS START</Link>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;