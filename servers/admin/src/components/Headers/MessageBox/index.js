import React from 'react';
import { Link } from 'react-router-dom';

export default function MessageBox(){
	const [show, setShow] = React.useState(false);
	return (
		<>
			<div 
				className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
				role="button" 
				data-bs-toggle="dropdown" 
				aria-expanded="false"
				onClick={()=>setShow(!show)}
			> 
				<span className="alert-count">4</span>
				<i className='bx bx-comment'></i>
			</div>
			<div className={`dropdown-menu dropdown-menu-end ${ show ? 'show' : ''}`}>
				<Link to="#">
					<div className="msg-header">
						<p className="msg-header-title">Messages</p>
						<p className="msg-header-clear ms-auto">Marks all as read</p>
					</div>
				</Link>
				<div className="header-message-list">
					<Link className="dropdown-item" to="#">
						<div className="d-flex align-items-center">
							<div className="user-online">
								<img src="https://via.placeholder.com/110x110" className="msg-avatar" alt="user avatar"/>
							</div>
							<div className="flex-grow-1">
								<h6 className="msg-name">Agisna Putri <span className="msg-time float-end">5 sec
							ago</span></h6>
								<p className="msg-info">The standard chunk of lorem</p>
							</div>
						</div>
					</Link>
					<Link className="dropdown-item" to="#">
						<div className="d-flex align-items-center">
							<div className="user-online">
								<img src="https://via.placeholder.com/110x110" className="msg-avatar" alt="user avatar"/>
							</div>
							<div className="flex-grow-1">
								<h6 className="msg-name">Ardi Saputra <span className="msg-time float-end">14
							sec ago</span></h6>
								<p className="msg-info">Many desktop publishing packages</p>
							</div>
						</div>
					</Link>
					<Link className="dropdown-item" to="#">
						<div className="d-flex align-items-center">
							<div className="user-online">
								<img src="https://via.placeholder.com/110x110" className="msg-avatar" alt="user avatar"/>
							</div>
							<div className="flex-grow-1">
								<h6 className="msg-name">Marni Hidayah <span className="msg-time float-end">8 min
							ago</span></h6>
								<p className="msg-info">Various versions have evolved over</p>
							</div>
						</div>
					</Link>
					<Link className="dropdown-item" to="#">
						<div className="d-flex align-items-center">
							<div className="user-online">
								<img src="https://via.placeholder.com/110x110" className="msg-avatar" alt="user avatar"/>
							</div>
							<div className="flex-grow-1">
								<h6 className="msg-name">Abdul Qadir <span className="msg-time float-end">15
							min ago</span></h6>
								<p className="msg-info">Making this the first true generator</p>
							</div>
						</div>
					</Link>
				
				</div>
				<Link to="#">
					<div className="text-center msg-footer">Lihat Semua Pesan</div>
				</Link>
			</div>
		</>
	);
}