import React from 'react';

export default function NotifBox(){
	return (
		<>
			<a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				<span className="alert-count">3</span>
				<i className='bx bx-bell'></i>
			</a>
			<div className="dropdown-menu dropdown-menu-end">
				<a href="javascript:;">
					<div className="msg-header">
						<p className="msg-header-title">Notifications</p>
						<p className="msg-header-clear ms-auto">Marks all as read</p>
					</div>
				</a>
				<div className="header-notifications-list">
					<a className="dropdown-item" href="javascript:;">
						<div className="d-flex align-items-center">
							<div className="notify"><i className="bx bx-cart-alt"></i>
							</div>
							<div className="flex-grow-1">
								<h6 className="msg-name">Pesanan Baru <span className="msg-time float-end">2 min ago</span></h6>
								<p className="msg-info">Kamu telah menerima pesanan baru</p>
							</div>
						</div>
					</a>
					<a className="dropdown-item" href="javascript:;">
						<div className="d-flex align-items-center">
							<div className="notify"><i className="bx bx-cart-alt"></i>
							</div>
							<div className="flex-grow-1">
								<h6 className="msg-name">Pesanan Baru <span className="msg-time float-end">2 min ago</span></h6>
								<p className="msg-info">Kamu telah menerima pesanan baru</p>
							</div>
						</div>
					</a>
					<a className="dropdown-item" href="javascript:;">
						<div className="d-flex align-items-center">
							<div className="notify"><i className="bx bx-cart-alt"></i>
							</div>
							<div className="flex-grow-1">
								<h6 className="msg-name">Pesanan Baru <span className="msg-time float-end">2 min ago</span></h6>
								<p className="msg-info">Kamu telah menerima pesanan baru</p>
							</div>
						</div>
					</a>
				</div>
				<a href="javascript:;">
					<div className="text-center msg-footer">Lihat Semua Pemberitahuan</div>
				</a>
			</div>
		</>
	);
}