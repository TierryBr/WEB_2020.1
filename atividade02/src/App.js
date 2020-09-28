import React from 'react';

import './App.css'

import Arena from './components/q1-q2/Arena'
import World from './components/q3/World'
import Arena2 from './components/q4-q5/Arena2'
import Hero from './components/q4-q5/Hero'
import Enemy from './components/q4-q5/Enemy'

function App() {
  return (
    <div >
      {/* <World>
        <Arena />
        <Arena />
        <Arena />
      </World> */}

      <Arena2 arena='Tokio Dome – Underground Arena'>
        <Enemy name='Yujiro' />
        <Hero name='Baki' />
      </Arena2>
    </div>
  );
}

export default App;
