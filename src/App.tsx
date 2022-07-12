import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<MainPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
