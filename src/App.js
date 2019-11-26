import React from 'react';
import logo from './logo.svg';
import MyNavbar from './MyNavbar'
import './App.css';
import Sections1 from './Sections1'
import Sections2 from './Sections2'
import Sections3 from './Sections3'



function App() {
  return (
    <div className="App">
      <MyNavbar />
      <header className="App-header">
        <h1 className="deepHeading">
          <span style={{ color: '#6E6E6E' }}>DEEP</span>
          <span style={{ color: '#006688' }}>CLOUD AI</span>
        </h1>
        <p className="deepDesc">
          An AI-driven decentralized cloud computing platform which provides computing and storage resources
  for companies and individuals.
        </p>
      </header>
      <Sections1/>
      <Sections2/>
      <Sections3/>


    </div>
  );
}

export default App;
