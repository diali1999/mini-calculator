//import logo from './logo.svg';
import './App.css';
import Navbar from '../Navbar/Navbar.js';
import OutputRow from '../Output/OutputRow';
import Calculator from '../Calculator/Calculator';
//import calculator from 'react-js-scientific-calculator';
//import 'react-scientific-calculator/Calculator.css';

function App() {
  return(
    <div >
    <Navbar/>
    <Calculator/>
    </div>
  );
}

export default App;
