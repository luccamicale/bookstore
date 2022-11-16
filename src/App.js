import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/nav';
import Books from './pages/Books';
import Categories from './pages/Categories';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="header">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
