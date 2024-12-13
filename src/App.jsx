import './index.css';
import React from 'react';
import { Avatar } from './components/Avatar';
import { Intro } from './components/Intro';
import { SkillList } from './components/SkillList';
function App() {

  return (
    <div className='App'>
    <h1>Profile card using react</h1>
    <div className='card'> 
        <Avatar />
        <div className='data'>
          <Intro />

          <SkillList />
        </div>
    </div>
    </div>
    

     
    
  )
}

export default App
