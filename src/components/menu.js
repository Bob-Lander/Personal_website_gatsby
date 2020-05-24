import React from 'react'
import { Link } from 'gatsby';

const Menu = () => (
        <ul style={ulMenu}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/blog">Blog</Link></li>
        </ul>
)

const ulMenu = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-evenly'
}

export default Menu;