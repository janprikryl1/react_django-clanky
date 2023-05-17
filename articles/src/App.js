

import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';


import NavScrollExample from './pages/NavScrollExample';

import Home from './pages/Home';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import ArticleArray from './pages/Article_array';
import NewArticle from './pages/NewArticle';

import ArticleDetail from './pages/ArticleDetail';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/get_items');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const save_items = (items) => {
    console.log(JSON.stringify(items));


    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items),
    };
    fetch("http://127.0.0.1:8000/api/add_item", requestOptions)
    .then((response) => response.json())
    .then((data2) => {
      data.push(items);
      setData(data);
      console.log(data2["status"]);
    });
  };

  return (
      <BrowserRouter>
        <NavScrollExample />
        <div className='conainer' style={{paddingLeft: "20px", paddingTop: "20px"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/article_array' element={<ArticleArray items={data}/>} />
            <Route path='/new_article' element={<NewArticle save_item={save_items} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail" element={<ArticleDetail />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
