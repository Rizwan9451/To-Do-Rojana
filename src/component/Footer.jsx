import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
      <div class="mt-5 bg-info-subtle text-emphasis-info">
        <footer class="py-3 position-relative bottom-0 start-50 translate-middle-x">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><Link to="/" class="nav-link px-2 text-body-secondary">Home</Link></li>
            <li class="nav-item"><Link to="/About" class="nav-link px-2 text-body-secondary">About</Link></li>
            </ul>
            <p class="text-center text-body-secondary">© 2023 RoJana, Inc</p>
        </footer>
    </div>
  )
}

export default Footer
