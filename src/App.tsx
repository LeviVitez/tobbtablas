import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

class App extends React.Component {

  render() {
    return <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>fooladal</Link>
            </li>
            <li>
              <Link to='/about'>elérhetpség, stb</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<p>A főoldal tartalma</p>} />
          <Route path='/about' element={<p>Elérhetőségek, rólunk stb.</p>} />
          <Route path='/user'>
              <Route path='profile'></Route>
              <Route path='settings'></Route>
          </Route>
          <Route path='/*' element={<p>ilyen oldal nincs</p>}></Route>
        </Routes>
      </main>
    </div>
  }
}

export default App;
