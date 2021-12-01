import React from 'react';
import axios from 'axios';

export default function FormSignUp({check, setMessage}) {
	const [firstname, setFirstname] = React.useState('');
	const [lastname, setLastname] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [pass, setPass] = React.useState('');
	const [isChecked, setChecked] = React.useState(false);

	const handleSignUp = (e) => {
		e.preventDefault();
		check(isChecked);
		const username = email.split('@')[0];
		if(isChecked){
			const signup = {
				fullname: `${firstname} ${lastname}`,
				email, 
				username,
				pass
			}
			axios.post(`http://localhost:4000/api/users/signup`, {signup})
			.then(res => {
				console.log(res.data.message);
				setMessage(res.data.message);
			})
			.catch(error => {
				console.log('Error', error);
			})
			
		}
	}
	// console.log(signup);
	return (
		<div className="form-body">
			<form className="row g-3">
				<div className="col-sm-6">
					<label htmlFor="inputFirstName" className="form-label">Nama Depan</label>
					<input 
						type="text" 
						name='firstname' 
						onChange={(e)=>setFirstname(e.target.value)} 
						value={firstname} 
						className="form-control" 
						id="inputFirstName" 
						placeholder="Alam"
					/>
				</div>
				<div className="col-sm-6">
					<label htmlFor="inputLastName" className="form-label">Nama Belakang</label>
					<input 
						type="text" 
						name='lastname' 
						onChange={(e)=>setLastname(e.target.value)} 
						value={lastname} 
						className="form-control" 
						id="inputLastName" 
						placeholder="Wibowo"
						required
					/>
				</div>
				<div className="col-12">
					<label htmlFor="inputEmailAddress" className="form-label">Alamat E-mail</label>
					<input 
						type="email" 
						name='email' 
						onChange={(e)=>setEmail(e.target.value)} 
						value={email} 
						className="form-control" 
						id="inputEmailAddress" 
						placeholder="wibowo@gmail.com"
						required
					/>
				</div>
				<div className="col-12">
					<label htmlFor="inputChoosePassword" className="form-label">Password</label>
					<div className="input-group" id="show_hide_password">
						<input 
							type="password" 
							name='password' 
							onChange={(e)=>setPass(e.target.value)} 
							className="form-control border-end-0" 
							id="inputChoosePassword" value={pass} 
							placeholder="Enter Password"
							required
						/> 
						<a href="#" className="input-group-text bg-transparent"><i className='bx bx-hide'></i></a>
					</div>
				</div>
				<div className="col-12">
					<div className="form-check form-switch">
						<input 
							className="form-check-input" 
							onChange={(e)=>setChecked(e.target.checked)} 
							type="checkbox" id="flexSwitchCheckChecked" 
							value={isChecked}
							required
						/>

						<label className="form-check-label" htmlFor="flexSwitchCheckChecked">Saya menyetujui peraturan & layanan perusahaan</label>
						
					</div>
				</div>
				<div className="col-12">
					<div className="d-grid">
						<button type="submit" onClick={(e)=> handleSignUp(e)} className="btn btn-light"><i className='bx bx-user'></i>Sign up</button>
					</div>
				</div>
			</form>
		</div>
	);
}