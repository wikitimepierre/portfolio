import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import Home from '../components/Home';
import DebugMenu from '../components/DebugMenu';

import CV from '../1-CV/components/CV';

import Header from '../2-Bank/components/Header';
import Footer from '../2-Bank/components/Footer';
import Open from '../2-Bank/components/Open';
import SignIn from '../2-Bank/components/SignIn';
import Edit from '../2-Bank/components/Edit';
import Accounts from '../2-Bank/components/Accounts';
import Mockup from '../2-Bank/components/Mockup';
import Error from '../2-Bank/components/Error';

import Shop from '../3-Shop/app/Shop';
import ShopCopy from '../3-Shop copy/app/ShopCopy';
//TODO: description technos (mettre les icones ?)
function App() {
  return (
    //The `Provider` component makes the Redux store available to nested components
    <Provider store={store}>

      <DebugMenu />
      <Routes>
        <Route path="/" element={<> <Home /> </>} />
        <Route path="/1-CV/" element={<> <CV /> </>} />
        <Route path="/2-Bank/" element={<> <Header /><Open /> <Footer /></>} />
        <Route path="/2-Bank/sign-in" element={<> <Header /> <SignIn /> <Footer /></>} />
        <Route path="/2-Bank/edit" element={<> <Header /> < Edit /> <Footer /></>} />
        <Route path="/2-Bank/user" element={<> <Header /> < Accounts /> <Footer /></>} />
        <Route path="/2-Bank/mockup" element={<> <Header /> < Mockup /> <Footer /></>} />
        <Route path="/2-Bank/error" element={<> <Header /> < Error /> <Footer /></>} />
        <Route path="/3-Shop/" element={<> <Shop /> </>} />
        <Route path="/3-Shop copy/" element={<> <ShopCopy /> </>} />
      </Routes>

    </Provider>
  );
}

export default App;