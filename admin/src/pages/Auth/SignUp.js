import React from 'react';
import FormSignUp from './FormSignUp';

export default function SignUp() {
	const [check, setChecked] = React.useState(true);
	const [message, setMessage] = React.useState(null);
	return (
	<div className="wrapper">
		<div className="d-flex align-items-center justify-content-center my-5 my-lg-0">
			<div className="container">
				<div className="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
					<div className="col mx-auto">
						{/*<div className="my-4 text-center">
							<img src="assets/images/logo-img.png" width="180" alt="" />
						</div>*/}
						<div className="card my-4">
							<div className="card-body">
								<div className="border p-4 rounded">
									<div className="text-center">
										<h3 className="">Sign Up</h3>
										<p>Sudah punya akun ? <a href="#">Login disini</a>
										</p>
									</div>
									<div className="alert alert-danger" style={{display: check ? 'none' : ''}}>Kamu wajib setuju peraturan & persyaratan layanan</div>
									<div className="alert alert-danger" style={{display: message === null ? 'none' : ''}}>{ message !== null ? message : ''}</div>
									{/*<div className="d-grid">
										<a className="btn my-4 shadow-sm btn-light" href="#"> 
											<span className="d-flex justify-content-center align-items-center">
						                        <img className="me-2" src="assets/images/icons/search.svg" width="16" alt="Image Description"/>
						                         <span>Sign Up With Google</span>
											</span>
										</a>
										<a href="#" className="btn btn-light">
											<i className="bx bxl-facebook"></i>Sign Up With Facebook
										</a>
									</div>*/}
									<div className="login-separater text-center mb-4"> <span>SIGN UP WITH EMAIL</span>
										<hr/>
									</div>
									<FormSignUp check={setChecked} setMessage={setMessage}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/*	<!--end row-->*/}
			</div>
		</div>
	</div>
	);
}