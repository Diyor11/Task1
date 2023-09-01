import React from 'react';

import Router from './routes';
import { useAppSelector } from './hooks';

function App() {

  const { isLoggedIn } = useAppSelector((state) => state.auth);
  console.log(isLoggedIn)

  return <Router isLoggedIn={isLoggedIn} />
}

export default App;
