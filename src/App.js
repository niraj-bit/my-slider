import logo from './logo.svg';
import "react-multi-carousel/lib/styles.css";
import './App.css';
import React, { Fragment } from "react";
import WithScrollbar from './Components/WithScrollbar';
import Simple from './Components/Simple';
import Section from './Components/Section';


function App() {
  return (
    <div>
      {/* <Section> */}
        <WithScrollbar />
      {/* </Section> */}
    </div>
  );
}

export default App;
