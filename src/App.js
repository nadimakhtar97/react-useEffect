import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import { useEffect } from 'react/cjs/react.production.min';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* running the below code will cause an infinite loop because since
     for a loggedIn user isLoggedIn stored in localstorage of browser is = 1
     there for if statement will be true and will cause to run setIsLoggedIn(true)
     which in turn will tell react to re-render the component and same will follow again
     to create an infinite-loop. There is other solution to this problem is to use useEffect()
   */

  // const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

  // if(storedUserLoggedInInformation === '1')
  //   setIsLoggedIn(true);



  /*
      The arrow function inside the useEffect() will run only once upon first time rendering of
      the component because "dependnecies are created for the first time" even if there is no dependency in
      the dependency array. Now if there is any change in state then the component will re-render but this time
      the arrow function will re-run only if there is any change in dependency listed in dependency array.

   */
  useEffect(() => {

    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1')
      setIsLoggedIn(true);
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    // This line is used to set a key value pair in the
    // local storage of browser.
    localStorage.setItem('isLoggedIn', '1');

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
