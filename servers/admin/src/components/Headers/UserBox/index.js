import react from 'react';

export default function UserBox(){
	return (
		<>
			<a className="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				<img src="https://via.placeholder.com/110x110" className="user-img" alt="user avatar"/>
				<div className="user-info ps-3">
					<p className="user-name mb-0">Alam Wibowo</p>
					<p className="designattion mb-0">Seller Level 1</p>
				</div>
			</a>
			<ul className="dropdown-menu dropdown-menu-end">
				<li><a className="dropdown-item" href="javascript:;"><i className="bx bx-user"></i><span>Profile</span></a>
				</li>
				<li><a className="dropdown-item" href="javascript:;"><i className="bx bx-cog"></i><span>Pengaturan</span></a>
				</li>
				<li><a className="dropdown-item" href="javascript:;"><i className='bx bx-home-circle'></i><span>Dashboard</span></a>
				</li>
				<li><a className="dropdown-item" href="javascript:;"><i className='bx bx-dollar-circle'></i><span>Pendapatan</span></a>
				</li>
				<li><a className="dropdown-item" href="javascript:;"><i className='bx bx-download'></i><span>Top Up</span></a>
				</li>
				<li>
					<div className="dropdown-divider mb-0"></div>
				</li>
				<li><a className="dropdown-item" href="javascript:;"><i className='bx bx-log-out-circle'></i><span>Logout</span></a>
				</li>
			</ul>
		</>
	);
}