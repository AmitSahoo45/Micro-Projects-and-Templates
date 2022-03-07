import { createTheme } from '@material-ui/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Pages/Home/HomePage'

function App() {

  const theme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#D3ECA7',
      },
      secondary: {
        main: '#B33030',
      },
    },
  });
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
