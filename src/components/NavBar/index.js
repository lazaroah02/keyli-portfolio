import React from 'react'
import './index.css'
import {Link} from 'wouter'

export default function NavBar(){
  return(
    <div>
    <nav class="navbar navbar-expand-lg bg-light NavBar ">
  <div class="container-fluid ">
    <Link class="navbar-brand text-white" to="/">Lazaro Altedill</Link>
    <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse NavBarColapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="/about_me">About me</Link>
        </li>
        <li className="nav-item dropdown text-white">
          <a className="nav-link dropdown-toggle text-white" href = '/' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </a>
          <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item text-white" to = '/first-projects'>First Projects</Link></li>
            <li><Link className="dropdown-item text-white" to = '/mid-level-projects'>Mid level projects</Link></li>
            <li><Link className="dropdown-item text-white" to = '/full-stack-projects'>Full stack projects</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="/skills">Skills</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="/education">Education</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  )
}