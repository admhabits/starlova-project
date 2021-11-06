import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuBox(){
	const [show, setShow] = React.useState(false);
	return (
		<>
			<div 
				className="nav-link dropdown-toggle dropdown-toggle-nocaret" 
				role="button" 
				data-bs-toggle="dropdown" 
				aria-expanded="false"
				onClick={()=>setShow(!show)}
			>
				<i className='bx bx-category'></i>
			</div>
			<div className={`dropdown-menu dropdown-menu-end ${ show ? 'show' : ''}`}>
				<div className="row row-cols-3 g-3 p-3">
					<div className="col text-center">
						<div className="app-box mx-auto"><i className='bx bx-group'></i>
						</div>
						<div className="app-title">Teams</div>
					</div>
					<div className="col text-center">
						<div className="app-box mx-auto"><i className='bx bx-atom'></i>
						</div>
						<div className="app-title">Projects</div>
					</div>
					<div className="col text-center">
						<div className="app-box mx-auto"><i className='bx bx-shield'></i>
						</div>
						<div className="app-title">Tasks</div>
					</div>
					<div className="col text-center">
						<div className="app-box mx-auto"><i className='bx bx-notification'></i>
						</div>
						<div className="app-title">Feeds</div>
					</div>
					<div className="col text-center">
						<div className="app-box mx-auto"><i className='bx bx-file'></i>
						</div>
						<div className="app-title">Files</div>
					</div>
					<div className="col text-center">
						<div className="app-box mx-auto"><i className='bx bx-filter-alt'></i>
						</div>
						<div className="app-title">Alerts</div>
					</div>
				</div>
			</div>
		</>
	);
}