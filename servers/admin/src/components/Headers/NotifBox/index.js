import React from 'react';
import { Link } from 'react-router-dom';

export default function NotifBox(){
	return (
		<>
			<Link className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				<span className="alert-count">3</span>
				<i className='bx bx-bell'></i>
			</Link>
			<div className="dropdown-menu dropdown-menu-end">
				<Link to="#">
					<div className="msg-header">
						<p className="msg-header-title">Notifications</p>
						<p className="msg-header-clear ms-auto">Marks all as read</p>
					</div>
				</Link>
				<div className="header-notifications-list">
					<Link className="dropdown-item" to="#">
						<div className="d-flex align-items-center">
							<div className="notify"><i className="bx bx-cart-alt"></i>
							</div>
							<div className="flex-grow-1">
								<h6 className="msg-name">Pesanan Baru <span className="msg-time float-end">2 min ago</span></h6>
								<p className="msg-info">Kamu telah menerima pesanan baru</p>
							</div>
						</div>
					</Link>
					<Link className="dropdown-item" to="#">
						<div className="d-flex align-items-center">
							<div className="notify"><i className="bx bx-cart-alt"></i>
							</div>
							<div className="flex-grow-1">
								<h6 className="msg-name">Pesanan Baru <span className="msg-time float-end">2 min ago</span></h6>
								<p className="msg-info">Kamu telah menerima pesanan baru</p>
							</div>
						</div>
					</Link>
					<Link className="dropdown-item" to="#">
						<div className="d-flex align-items-center">
							<div className="notify"><i className="bx bx-cart-alt"></i>
							</div>
							<div className="flex-grow-1">
								<h6 className="msg-name">Pesanan Baru <span className="msg-time float-end">2 min ago</span></h6>
								<p className="msg-info">Kamu telah menerima pesanan baru</p>
							</div>
						</div>
					</Link>
				</div>
				<Link to="#">
					<div className="text-center msg-footer">Lihat Semua Pemberitahuan</div>
				</Link>
			</div>
		</>
	);
}