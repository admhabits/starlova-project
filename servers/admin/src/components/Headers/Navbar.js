import React from 'react';
import UserBox from './UserBox';
import MenuBox from './MenuBox';
import NotifBox from './NotifBox';
import MessageBox from './MessageBox';

export default function Navbar(){
	return (
		<nav className="navbar navbar-expand">
			<div className="mobile-toggle-menu"><i className='bx bx-menu'></i>
			</div>
			<div className="search-bar flex-grow-1">
				<div className="position-relative search-bar-box">
					<input type="text" className="form-control search-control" placeholder="Type to search..."/> <span className="position-absolute top-50 search-show translate-middle-y"><i className='bx bx-search'></i></span>
					<span className="position-absolute top-50 search-close translate-middle-y"><i className='bx bx-x'></i></span>
				</div>
			</div>
			<div className="top-menu ms-auto">
				<ul className="navbar-nav align-items-center">
					<li className="nav-item mobile-search-icon">
						<a className="nav-link" href="#">
							<i className='bx bx-search'></i>
						</a>
					</li>
					<li className="nav-item dropdown dropdown-large">
						<MenuBox/>
					</li>
					<li className="nav-item dropdown dropdown-large">
						<NotifBox/>
					</li>
					<li className="nav-item dropdown dropdown-large">
						<MessageBox/>
					</li>
				</ul>
			</div>
			<div className="user-box dropdown">
				<UserBox/>
			</div>
		</nav>
	);
}