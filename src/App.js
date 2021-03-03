import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import Bar from './components/Bar/Bar';
import News from './components/News/News';

function App() {
  const [articles,setArticles]=useState([]);
  useEffect(()=>{
    const API = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=efb1b8ad0a1c485c82cf78990e39c051';
    fetch(API)
    .then(response => response.json())
    .then(data =>setArticles(data.articles))
  },[])
  return (
    <div>
      <Bar></Bar>
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
      {/* <Button color="primary">Hello World</Button>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
<br/>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">Primary</Button>
      <Button variant="outlined" color="secondary">Secondary</Button> */}
    </div>
  );
}

export default App;
