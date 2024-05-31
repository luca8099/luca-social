import React, { useEffect, useState } from 'react';
import './App.css';
import {Head} from './componets/Head';
import Sidebar from './componets/sidebar/sidebar';
import { AppContext } from './appcontent/appcontent';
import { TNote } from './componets/note/note';



function App() {
  const [jsonData, setJsonData] = useState<TNote[]>()

  const propTypes = {jsonData, setJsonData}
useEffect(() =>{
  fetch('https://dummyjson.com/posts')
  .then(response => response.json())
  .then(json => setJsonData(json.posts))
}, )


  return (
    <div className="App">
    <AppContext.Provider value={propTypes}>
      <Head></Head>
      <Sidebar></Sidebar>
    </AppContext.Provider>
    </div>
  );
}

export default App;
