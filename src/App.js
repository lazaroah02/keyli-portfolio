import React from 'react'
import "./vendor/bootstrap5/css/bootstrap.min.css";
import {Route} from 'wouter'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Education from './pages/Education'
import bootstrap from 'bootstrap'

export default function App() {
  return(
    <div>
      <Route component = {Home} path = "/"/>
      <Route component = {AboutMe} path = '/about_me'/>
      <Route component = {Projects} path = '/first-projects'/>
      <Route component = {Projects} path = '/mid-level-projects'/>
      <Route component = {Projects} path = '/full-stack-projects'/>
      <Route component = {Skills} path = '/skills'/>
      <Route component = {Education} path = '/education'/>       
    </div>
  
  )
}
