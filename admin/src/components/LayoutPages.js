import React from 'react';
import Navbar from './Headers/Navbar';
import MetisMenu from './Sidebars/MetisMenu';
import { Link } from 'react-router-dom';

export default function LayoutPages({children}) {
	return (
		<div className="wrapper">
			<div className="sidebar-wrapper" data-simplebar="true">
				<div className="sidebar-header">
					<div>
						<img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon"/>
					</div>
					<div>
						<h4 className="logo-text">StarLova</h4>
					</div>
					<div className="toggle-icon ms-auto">
						<i className='bx bx-pin'></i>
					</div>
				</div>
				<MetisMenu/>
			</div>
			<header>
				<div className="topbar d-flex align-items-center">
					<Navbar/>
				</div>
			</header>
			<div className="page-wrapper">
				{ children }
			</div>
			<div className="overlay toggle-icon"></div>
			<Link to="javaScript:;" className="back-to-top"><i className='bx bxs-up-arrow-alt'></i></Link>

			<footer className="page-footer">
				<p className="mb-0">Copyright © StarLova Publishing 2021. All right reserved.</p>
			</footer>
		</div>
	);
}