import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';

function App() {
  return (
    <div>
      <Wrapper render={(count: number, incCount: Function) => (<Counter1 count={count} incCount={incCount} />)} />
      <Wrapper render={(count: number, incCount: Function) => (<Counter2 count={count} incCount={incCount} />)} />

    </div>
  );
}

export default App;
