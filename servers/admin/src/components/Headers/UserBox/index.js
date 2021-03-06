import React from 'react';
import { Link } from 'react-router-dom';

export default function UserBox({open, setOpen}){
	return (
		<>
			<div 
				onClick={()=>setOpen()}
				className="d-flex align-items-center nav-link dropdown-toggle-nocaret" 
				role="button" 
				aria-expanded="false"
			>
				<img src="https://via.placeholder.com/110x110" className="user-img" alt="user avatar"/>
				<div className="user-info ps-3">
					<p className="user-name mb-0">Alam Wibowo</p>
					<p className="designattion mb-0">Seller Level 1</p>
				</div>
			</div>
			<ul className={`dropdown-menu dropdown-menu-end ${ open ? 'show' : ''}`}>
				<li><Link className="dropdown-item" to="#"><i className="bx bx-user"></i><span>Profile</span></Link>
				</li>
				<li><Link className="dropdown-item" to="#"><i className="bx bx-cog"></i><span>Pengaturan</span></Link>
				</li>
				<li><Link className="dropdown-item" to="#"><i className='bx bx-home-circle'></i><span>Dashboard</span></Link>
				</li>
				<li><Link className="dropdown-item" to="#"><i className='bx bx-dollar-circle'></i><span>Pendapatan</span></Link>
				</li>
				<li><Link className="dropdown-item" to="#"><i className='bx bx-download'></i><span>Top Up</span></Link>
				</li>
				<li>
					<div className="dropdown-divider mb-0"></div>
				</li>
				<li><Link className="dropdown-item" to="#"><i className='bx bx-log-out-circle'></i><span>Logout</span></Link>
				</li>
			</ul>
		</>
	);
}