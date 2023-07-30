import Appbar from './compontens/Appbar';
import './App.css';
import Fields from './compontens/Fields';
import Manual from './compontens/Manual';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Employees from './compontens/pages/Employees'
import NewEmployee from './compontens/pages/NewEmployee'
import Projects from './compontens/pages/Projects'
import NewProject from './compontens/pages/NewProject'


function App() {
  return (
    <div className="App">
      <Appbar/>
      <Fields/>
      <Manual/>
    </div>
  );
}

export default App;
