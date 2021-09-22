import React from 'react';
import useTitle from './hooks/title.js';
import Content from './Content.js';

import './styles.css';

function App() {

  // 'hook' into the react rendering engine and state machine
  const changeTitle = useTitle();

  return (
    <Content changeTitle={changeTitle} greeting='Hello World' />
  );
}

export default App;
