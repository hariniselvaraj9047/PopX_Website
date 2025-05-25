import React, { useState, useEffect } from 'react';
import WelcomePage from './Components/WelcomePage';
import SignUpPage from './Components/SignUpPage';
import LoginPage from './Components/LoginPage';
import AccountPage from './Components/AccountPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('CurrentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setCurrentPage('account');
    }
  }, []);

  const handleSignUp = (newUser) => {
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

  const userExists = existingUsers.find(
    (user) => user.emailAddress === newUser.emailAddress
  );

  if (userExists) {
    alert('User already exists!');
    return;
  }

  const updatedUsers = [...existingUsers, newUser];
  localStorage.setItem('users', JSON.stringify(updatedUsers));
  localStorage.setItem('currentUser', JSON.stringify(newUser));
  setUser(newUser);
  setCurrentPage('account');
};
  

  // const handleLogin = (email, password) => {
  //   const savedUser = localStorage.getItem('user');
  //   if (savedUser) {
  //     const userData = JSON.parse(savedUser);
  //     if (userData.emailAddress === email && userData.password === password) {
  //       setUser(userData);
  //       setCurrentPage('account');
  //     } else {
  //       alert('Invalid credentials');
  //     }
  //   } else {
  //     alert('No account found');
  //   }
  // };

  const handleLogin = (email, password) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];

  const foundUser = users.find(
    (user) => user.emailAddress === email && user.password === password
  );

  if (foundUser) {
    localStorage.setItem('currentUser', JSON.stringify(foundUser));
    setUser(foundUser);
    setCurrentPage('account');
  } else {
    alert('Invalid credentials or user not found.');
  }
};

  const handleLogout = () => {
    localStorage.removeItem('CurrentUser');
    setUser(null);
    setCurrentPage('welcome');
  };

  return (
    <>
      {currentPage === 'welcome' && <WelcomePage onNavigate={setCurrentPage} />}
      {currentPage === 'signup' && <SignUpPage onSignUp={handleSignUp} onBack={() => setCurrentPage('welcome')} />}
      {currentPage === 'login' && <LoginPage onLogin={handleLogin} onBack={() => setCurrentPage('welcome')} />}
      {currentPage === 'account' && <AccountPage user={user} onLogout={handleLogout} />}
    </>
  );
};

export default App;