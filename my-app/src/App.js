import React from 'react';
import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import NavBarChild from './components/NavBarChild';
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      { /*Add ur comment*/} 
      <Sidebar />
       <b></b>

      <NavBarSimple />
      <NavBarForm />
       <Content />
    </div>
  );
}

export default App;
