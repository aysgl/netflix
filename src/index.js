import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import MyList from './pages/MyList';
import Tv from './pages/Tv';
import MovieDetail from "./pages/MovieDetail"
import TvDetail from './pages/TvDetail';
import Search from './pages/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
        <Route path='/tv' element={<Tv />} />
        <Route path='/tv/:id' element={<TvDetail />} />
        <Route path='/mylist' element={<MyList />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
