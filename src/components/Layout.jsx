import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-black bg-gradient ">
      <div class="container-fluid">
      <img src="/img/Logo.png" alt="Logo" width="50" height="40" class="d-inline-block align-text-top"/>
        <NavLink className="navbar-brand" to={'/'}>BikeStore</NavLink>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <NavLink className="nav-link" to={'/'}>Home</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to={'/Services'}> Services</NavLink>
            </li>
            <li class="nav-item">
            <NavLink className="nav-link" to={'/About'}> About Us</NavLink>
            </li>
            <li class="nav-item">
            <NavLink className="nav-link" to={'/Contac'}> Contac Us</NavLink>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>

  <Outlet/>
     <div class="card text-center bg-black bg-gradient">
        <div class="card-body">
          <h5 class="card-title text-white">BikeStore</h5>
          <p class="card-text text-white">Calle Principal, Ciudad, País</p>
          <p class="card-text text-white">info@bikeshop.com</p>
          <p class="card-text text-white">(123) 456-7890</p>
          <i class="bi bi-instagram" style={{marginRight:'10px', color:'white'}}></i>
          <i class="bi bi-facebook" style={{marginRight:'10px', color:'white'}}></i>
          <i class="bi bi-messenger"  style={{marginRight:'10px', color:'white'}}></i>
        </div>
        <div class="card-footer text-white">
          2023 Liliana Aguilar
        </div>
     </div>
  </div>
  
  )
}
