import React from 'react';

export default function FormSignUp() {
	return (
		<div className="form-body">
			<form className="row g-3">
				<div className="col-sm-6">
					<label htmlFor="inputFirstName" className="form-label">Nama Depan</label>
					<input type="email" className="form-control" id="inputFirstName" placeholder="Alam"/>
				</div>
				<div className="col-sm-6">
					<label htmlFor="inputLastName" className="form-label">Nama Belakang</label>
					<input type="email" className="form-control" id="inputLastName" placeholder="Wibowo"/>
				</div>
				<div className="col-12">
					<label htmlFor="inputEmailAddress" className="form-label">Alamat E-mail</label>
					<input type="email" className="form-control" id="inputEmailAddress" placeholder="wibowo@gmail.com"/>
				</div>
				<div className="col-12">
					<label htmlFor="inputChoosePassword" className="form-label">Password</label>
					<div className="input-group" id="show_hide_password">
						<input type="password" className="form-control border-end-0" id="inputChoosePassword" value="12345678" placeholder="Enter Password"/> 
						<a href="#" className="input-group-text bg-transparent"><i className='bx bx-hide'></i></a>
					</div>
				</div>
				<div className="col-12">
					<div className="form-check form-switch">
						<input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
						<label className="form-check-label" htmlFor="flexSwitchCheckChecked">I read and agree to Terms & Conditions</label>
					</div>
				</div>
				<div className="col-12">
					<div className="d-grid">
						<button type="submit" className="btn btn-light"><i className='bx bx-user'></i>Sign up</button>
					</div>
				</div>
			</form>
		</div>
	);
}