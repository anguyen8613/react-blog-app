import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {

	return(
		<div>
			<nav className='nav-wrapper blue darken-3'>
				<div className='nav-wrapper'>
					<a className='brand-logo center'>Lobster</a>
					<ul className='right hide-on-med-and-down"'>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/about'>About</Link></li>
						<li><Link to='/contact'>Contact</Link></li>
						<li><Link to='/posts'>Posts</Link></li>
						<li><Link to='/users'>Users</Link></li>
					</ul>
				</div>
			</nav>

		</div>
	)
}

export default Navbar;