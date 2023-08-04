import "./navbar.css";

import Link from 'next/link'

const Navbar = () => {

  return (
    <div className='navbar'>
        <h1>OctaNFT</h1>
        <ul>
            <Link className="nextLink" href="/">
            <li>All NFTs</li>
            </Link>
            <Link className="nextLink" href="/contact">
            <li>Contact Us</li>
            </Link>
        </ul>
        
    </div>
  )
}

export default Navbar