import React, { useEffect } from 'react';
import Navbar from './components/Headers/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function App() {
	return (
		<div className="wrapper">
			<div className="sidebar-wrapper" data-simplebar="true">
				Sidebar
			</div>
			<header>
				<div class="topbar d-flex align-items-center">
					<Navbar/>
				</div>
			</header>
			<div className="page-wrapper">
				Hello World, I'am Tested Apps
			</div>

			<div className="overlay toggle-icon"></div>
			<Link to="javaScript:;" className="back-to-top"><i className='bx bxs-up-arrow-alt'></i></Link>

			<footer className="page-footer">
				<p className="mb-0">Copyright © 2021. All right reserved.</p>
			</footer>
		</div>
	)
}