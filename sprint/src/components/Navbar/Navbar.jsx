import React from 'react'

export default function NavBar() {
  return (
    <header class="nav-container">
      <div class="row">
        <a href="#main-menu" id="main-menu-toggle" class="menu-toggle">
          <span class="fa fa-bars"></span>
        </a>
        <div class="logo">
          <h3>Sprint</h3>
          <div class="badge-conatiner">
            <div class="badge">
              <span class="material-icons-outlined">notifications</span>
              <sup class="badge-icon">4</sup>
            </div>
            <div class="badge">
              <span class="material-icons-outlined">shopping_bag</span>
              <sup class="badge-icon">4</sup>
            </div>
            <div class="status">
              <img
                class="avatar round sm"
                src="https://images.unsplash.com/photo-1561409106-fece1abb71cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="avatar/image"
              />
              <div class="online"></div>
            </div>
          </div>
        </div>
      </div>
      <input type="text" placeholder="search" class="input-content" />
      <nav id="main-menu" class="main-menu">
        <a href="#main-menu-toggle" id="main-menu-close" class="menu-close">
          <span class="fa fa-close" aria-hidden="true"></span>
        </a>
        <ul>
          <li>
            <a href="#">Casual</a>
          </li>
          <li>
            <a href="#">Fitness</a>
          </li>
          <li>
            <a href="#">Track</a>
          </li>
          <li>
            <a href="#">Sports</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <button class="btn" id="default-btn">
              Account
            </button>
          </li>
          <li>
            <button class="btn" id="primary">
              Orders
            </button>
          </li>
          <li>
            <button class="btn" id="warning">
              Sign Out
            </button>
          </li>
        </ul>
      </nav>
      <a href="#main-menu-toggle" class="backdrop" tabindex="-1" hidden></a>
    </header>
  )
}
