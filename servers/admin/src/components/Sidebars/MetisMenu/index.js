import React from 'react';
import { Link } from 'react-router-dom';

export default function MetisMenu(){
	return (
		<ul className="metismenu" id="menu">
			<li>
				<Link to="/">
					<div className="parent-icon">
						<i className="bx bx-category"></i>
					</div>
					<div className="menu-title">Dashboard</div>
				</Link>
			</li>
			<li>
				<a href='#' className="has-arrow" aria-expanded={true}>
					<div className="parent-icon">
						<i className="bx bx-book-content"></i>
					</div>
					<div className="menu-title">Manage Product</div>
				</a>
				<ul className='mm-collapse mm-show'>
					<li> 
						<Link to="/tambah">
							<i className="bx bx-right-arrow-alt"></i>Tambah Produk
						</Link>
					</li>
					<li> 
						<Link to="/products">
							<i className="bx bx-right-arrow-alt"></i>Semua Produk
						</Link>
					</li>
				</ul>
			</li>
			<li>
				<a href='#' className="has-arrow">
					<div className="parent-icon">
						<i className="bx bx-cart"></i>
					</div>
					<div className="menu-title">Manage Orders</div>
				</a>
				<ul>
					<li> 
						<Link to="/orders">
							<i className="bx bx-right-arrow-alt"></i>Semua Pesanan
						</Link>
					</li>
					<li> 
						<Link to="/invoices">
							<i className="bx bx-right-arrow-alt"></i>Pesanan Tuntas
						</Link>
					</li>
				</ul>
			</li>
			<li className="menu-label">Follow Up</li>
			<li>
				<Link to="#">
					<div className="parent-icon">
						<i className='bx bx-paper-plane'></i>
					</div>
					<div className="menu-title">Kirim Pesan</div>
				</Link>
			</li>
			
		</ul>
	);
}