import React from 'react';
import { Link } from 'react-router-dom';
import UserBox from './UserBox';
import MenuBox from './MenuBox';
import NotifBox from './NotifBox';
import MessageBox from './MessageBox';

export default function Navbar(){
	const initState = {
		menuBox: false,
		notifBox: false,
		userBox: false,
		messageBox: false
	};
	const [ toggle, setToggle ] = React.useState(initState);
	const setMenuBox = () => {
		setToggle({
			menuBox: !toggle.menuBox,
			notifBox: false,
			userBox: false,
			messageBox: false
		})
	};

	const setNotifBox = () => {
		setToggle({
			menuBox: false,
			notifBox: !toggle.notifBox,
			userBox: false,
			messageBox: false
		})
	};

	const setMessageBox = () => {
		setToggle({
			menuBox: false,
			notifBox: false,
			userBox: false,
			messageBox: !toggle.messageBox
		})
	};

	const setUserBox = () => {
		setToggle({
			menuBox: false,
			notifBox: false,
			userBox: !toggle.userBox,
			messageBox: false
		})
	};
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
						<Link className="nav-link" to="#">
							<i className='bx bx-search'></i>
						</Link>
					</li>
					<li className="nav-item dropdown dropdown-large">
						<MenuBox open={toggle.menuBox} setOpen={setMenuBox}/>
					</li>
					<li className="nav-item dropdown dropdown-large">
						<NotifBox open={toggle.notifBox} setOpen={setNotifBox}/>
					</li>
					<li className="nav-item dropdown dropdown-large">
						<MessageBox open={toggle.messageBox} setOpen={setMessageBox}/>
					</li>
				</ul>
			</div>
			<div className="user-box dropdown">
				<UserBox open={toggle.userBox} setOpen={setUserBox}/>
			</div>
		</nav>
	);
}