import React from 'react';

export default function MenuBox(){
	return (
		<>
			<a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">	<i className='bx bx-category'></i>
			</a>
			<div className="dropdown-menu dropdown-menu-end">
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