import './App.css';
import axios from "axios"
import { Catolog } from './components/Catolog';
import { Navigation } from './components/Navigation';
import { Search } from './components/Search';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ContactsPage } from './pages/contacts';
import { AboutPage } from './pages/about';



function App() {
  let [animeArray, setAnimeArray] = useState([])
  let [searchAnime, setSearchAnime] = useState('')

  useEffect(()=>{
    axios
    .get(`https://api.jikan.moe/v4/anime`)
    .then((resp)=>{
    console.log(resp.data)
    setAnimeArray(resp.data.data)
  })
  .catch(err =>{
    console.log(err)
  })
  },[])

  function handleSearch(){
    axios
    .get(`https://api.jikan.moe/v4/anime?q=${searchAnime}`)
    .then((resp)=>{
      console.log(resp)
      setAnimeArray(resp.data.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }

  return (
    <div className="App">
     <Navigation />
     
     <Routes>
      <Route path='/' 
      element={<>
       <Search 
     searchAnime = {searchAnime}  
     setSearchAnime = {setSearchAnime}
     handleSearch={handleSearch}
     />
      <Catolog array={animeArray} />
      </>
      }></Route>
      <Route path='/about' element={<AboutPage></AboutPage>}></Route>
      <Route path='/contacts' element={<ContactsPage></ContactsPage>}></Route>
     </Routes>
    </div>
  );
}

export default App;
