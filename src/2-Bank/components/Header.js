import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/argentBankLogo.png';
import { resetStore } from '../../app/actions';

function Header() {
  const userName = useSelector((state) => state.userInfo.userName) ?? "";
  const separator = <span>&nbsp;&nbsp;</span>

  // reset the store
  const dispatch = useDispatch();
  const signOutClick = () => { dispatch(resetStore()) };

  let content;
  const contentWoUserName = <span><i className="fa fa-user-circle"> <span> <Link to="/2-Bank/sign-in"> Sign In</Link> </span> </i></span>;
  // const contentUserName = <span><i className="fa fa-user-circle">{separator}<a href="#"><Link to="/2-Bank/user">{userName}</Link></a></i>{separator}<i className="fa fa-sign-out">{separator}<span onClick={signOutClick}><a href="#"><Link to="/2-Bank/"> Sign Out</Link></a></span></i></span>;
  // const contentHome = <a href="#"><Link to="/2-Bank/">Home</Link></a>;
  const contentUserName = <span><i className="fa fa-user-circle">{separator}<Link to="/2-Bank/user">{userName}</Link>{separator}</i><i className="fa fa-sign-out">{separator}<span onClick={signOutClick}><Link to="/2-Bank/"> Sign Out</Link></span></i></span>;
  const contentHome = <Link to="/2-Bank/">Home</Link>;

  const location = useLocation();
  switch (location.pathname) {
    case "/2-Bank/": content = userName !== "" ? contentUserName : contentWoUserName; break;
    case "/2-Bank/sign-in": content = contentHome; break;
    case "/2-Bank/user": content = contentUserName; break;
    case "/2-Bank/edit": content = contentUserName; break;
    default: content = null;
  }

  return (
    // TODO debugMenu that adapts to the project (1 to 4)
    <nav className="main-nav">
      <div className="inrow">
        <a className="main-nav-logo" href="./index.html">
          <Link to="/2-Bank/">
            <img
              className="main-nav-logo-image"
              src={Logo}
              alt="Argent Bank Logo"
            />
          </Link>
          <h1 className="sr-only">Argent Bank</h1>
        </a>
      </div>
      <div>
        {content}
      </div>
    </nav >
  );
}

export default Header;
