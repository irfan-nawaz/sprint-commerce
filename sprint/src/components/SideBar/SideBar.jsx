import React from 'react'

export default function SideBar() {
  return (
    <div className="side-bar">
      <aside class="nav">
        <a
          href="#filter-menu"
          id="filter-menu-toggle"
          class="filter-menu-toggle"
        >
          <button class="btn float">
            <span class="material-icons-outlined">filter_list</span>
          </button>
        </a>
        <ul className="nav-list, filter-menu" id="filter-menu">
          <li class="nav-item">
            <a className="toggle-close" href="">
              <button class="btn float" id="error">
                <span class="material-icons-outlined">filter_list_off</span>
              </button>
            </a>
          </li>
          <li class="nav-item">
            <h3>Filter</h3>
            <a href="">Clear</a>
          </li>
          <li class="nav-item">
            <h4>Sort By</h4>
            <ul>
              <li>
                <input type="radio" name="sort" id="descending" />
                <label for="descending">Price: High-Low </label>
              </li>
              <li>
                <input type="radio" name="sort" id="ascending" />
                <label for="ascending">Price: Low-High </label>
              </li>
            </ul>
          </li>
          <hr />
          <li class="nav-item">
            <h4>Category</h4>
            <ul>
              <li>
                <input type="radio" name="category" id="category" />
                <label for="category"> Sports</label>
              </li>
              <li>
                <input type="radio" name="category" id="category" />
                <label for="category">Track</label>
              </li>
              <li>
                <input type="radio" name="category" id="category" />
                <label for="category">Casual</label>
              </li>
              <li>
                <input type="radio" name="category" id="category" />
                <label for="category">Fitness</label>
              </li>
              <li>
                <input type="radio" name="category" id="category" />
                <label for="category">Men</label>
              </li>
              <li>
                <input type="radio" name="category" id="category" />
                <label for="category">Women</label>
              </li>
            </ul>
          </li>
          <hr />
          <li class="nav-item">
            <h4>Availability</h4>
            <ul>
              <li>
                <input
                  type="checkbox"
                  name="toggle-inventory"
                  id="toggle-inventory"
                  checked=""
                />
                <label for="toggle-inventory"> Include Out Of Stock</label>
              </li>
            </ul>
          </li>
          <hr />
          <li class="nav-item">
            <h4>Delivery</h4>
            <ul>
              <li>
                <input
                  type="checkbox"
                  name="toggle-delivery"
                  id="toggle-delivery"
                />
                <label for="toggle-delivery">Fast Delivery Only </label>
              </li>
            </ul>
          </li>
          <hr />
          <li class="nav-item">
            <h4>Price</h4>
            <ul>
              <li>
                <input
                  type="range"
                  value="0"
                  max="15000"
                  oninput="num.value = this.value"
                />
                <output id="num">0</output>
              </li>
            </ul>
          </li>
        </ul>
        <a href="#filter-menu-toggle" class="backdrop" hidden></a>
      </aside>
    </div>
  )
}
