import React from 'react';
import CardProduct from './CardProduct';

export default function Products(){
	return (
		<div className="page-content">
			<div className="row">
				<div className="col-12">
					<div className="card">
						<div className="card-body">
							<div className="row align-items-center">
								<div className="col-lg-3 col-xl-2">
									<a href="#" className="btn btn-light mb-3 mb-lg-0"><i className='bx bxs-plus-square'></i>Tambah</a>
								</div>
								<div className="col-lg-9 col-xl-10">
									<form className="float-lg-end">
										<div className="row row-cols-lg-auto g-2">
											<div className="col-12">
												<div className="position-relative">
													<input type="text" className="form-control ps-5" placeholder="Search Product..."/> <span className="position-absolute top-50 product-show translate-middle-y"><i className="bx bx-search"></i></span>
												</div>
											</div>
											<div className="col-12">
												<div className="btn-group" role="group" aria-label="Button group with nested dropdown">
													<button type="button" className="btn btn-light">Sort By</button>
													<div className="btn-group" role="group">
													  <button id="btnGroupDrop1" type="button" className="btn btn-light dropdown-toggle dropdown-toggle-nocaret px-1" data-bs-toggle="dropdown" aria-expanded="false">
														<i className='bx bx-chevron-down'></i>
													  </button>
													  <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
														<li><a className="dropdown-item" href="#">Dropdown link</a></li>
														<li><a className="dropdown-item" href="#">Dropdown link</a></li>
													  </ul>
													</div>
												  </div>
											</div>
											<div className="col-12">
												<div className="btn-group" role="group" aria-label="Button group with nested dropdown">
													<button type="button" className="btn btn-light">Collection Type</button>
													<div className="btn-group" role="group">
													  <button id="btnGroupDrop1" type="button" className="btn btn-light dropdown-toggle dropdown-toggle-nocaret px-1" data-bs-toggle="dropdown" aria-expanded="false">
														<i className='bx bxs-category'></i>
													  </button>
													  <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
														<li><a className="dropdown-item" href="#">Dropdown link</a></li>
														<li><a className="dropdown-item" href="#">Dropdown link</a></li>
													  </ul>
													</div>
												  </div>
											</div>
											<div className="col-12">
												<div className="btn-group" role="group">
													<button type="button" className="btn btn-light">Price Range</button>
													<div className="btn-group" role="group">
													  <button id="btnGroupDrop1" type="button" className="btn btn-light dropdown-toggle dropdown-toggle-nocaret px-1" data-bs-toggle="dropdown" aria-expanded="false">
														<i className='bx bx-slider'></i>
													  </button>
													  <ul className="dropdown-menu dropdown-menu-start" aria-labelledby="btnGroupDrop1">
														<li><a className="dropdown-item" href="#">Dropdown link</a></li>
														<li><a className="dropdown-item" href="#">Dropdown link</a></li>
													  </ul>
													</div>
												  </div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 product-grid">
			<CardProduct/>
		</div>
	</div>
	);
}