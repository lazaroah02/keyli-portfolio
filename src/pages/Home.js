import React from 'react'
import NavBar from '../components/NavBar'
import ContactItems from '../components/ContactItems'
import MyFirstDescription from '../components/MyFirstDescription';
import '../App.css';

function Home() {
  return(
    <div className = "Home">
        <NavBar/>
        <ContactItems/>
        <MyFirstDescription/>
    </div>
  
  )
}

export default Home;
