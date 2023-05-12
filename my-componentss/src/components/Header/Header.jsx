import React from "react"
import "./Header.css"
function Header() {
  return (
    <div className="custom__header">
      <div className="custom__header__left">
        <h1>My Logo</h1>
      </div>
      <div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">Shop</a>
          </li>

          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="custom__header__right">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  )
}
export default Header
