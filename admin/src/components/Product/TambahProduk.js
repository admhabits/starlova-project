import React from 'react';

export default function TambahProduk(){
	return (
		<div className="page-content">

			{/*<!--breadcrumb-->*/}
			<div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
				<div className="breadcrumb-title pe-3">Manage Product</div>
				<div className="ps-3">
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb mb-0 p-0">
							<li className="breadcrumb-item"><a href="#"><i className="bx bx-book-content"></i></a>
							</li>
							<li className="breadcrumb-item active" aria-current="page">Tambah Produk</li>
						</ol>
					</nav>
				</div>
				<div className="ms-auto">
					<div className="btn-group">
						<button type="button" className="btn btn-light">Settings</button>
						<button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span className="visually-hidden">Toggle Dropdown</span>
						</button>
						<div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	<a className="dropdown-item" href="#">Publish</a>
							<a className="dropdown-item" href="#">Disable</a>
							<a className="dropdown-item" href="#">Review</a>
							<div className="dropdown-divider"></div>	<a className="dropdown-item" href="#">Separated link</a>
						</div>
					</div>
				</div>
			</div>
			{/*<!--end breadcrumb-->*/}

          <div className="card">
			  <div className="card-body p-4">
				  <h5 className="card-title">Tambah Produk</h5>
				  <hr/>
                   <div className="form-body mt-4">
				    <div className="row">
					   <div className="col-lg-8">
                       <div className="border border-3 p-4 rounded">
						<div className="mb-3">
							<label htmlFor="inputProductTitle" className="form-label">Nama Produk</label>
							<input type="email" className="form-control" id="inputProductTitle" placeholder="Enter product title"/>
						  </div>
						  <div className="mb-3">
							<label htmlFor="inputProductDescription" className="form-label">Deskripsi Produk</label>
							<textarea className="form-control" id="inputProductDescription" rows="8"></textarea>
						  </div>
						  <div className="mb-3">
							<label htmlFor="inputProductDescription" className="form-label">Cover Produk</label>
							<input id="image-uploadify" type="file" accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf" multiple/>
						  </div>
                        </div>
					   </div>
					   <div className="col-lg-4">
						<div className="border border-3 p-4 rounded">
                          <div className="row g-3">
							<div className="col-md-12">
								<label htmlFor="inputPrice" className="form-label">Harga Produk</label>
								<input type="email" className="form-control" id="inputPrice" placeholder="20.000"/>
							  </div>
							  {/*<div className="col-md-6">
								<label htmlFor="inputCompareatprice" className="form-label">Compare at Price</label>
								<input type="password" className="form-control" id="inputCompareatprice" placeholder="00.00"/>
							  </div>*/}
							 {/* <div className="col-md-6">
								<label htmlFor="inputCostPerPrice" className="form-label">Cost Per Price</label>
								<input type="email" className="form-control" id="inputCostPerPrice" placeholder="00.00"/>
							  </div>*/}
							  <div className="col-md-12">
								<label htmlFor="inputStarPoints" className="form-label">Harga Rate Koin</label>
								<input type="password" className="form-control" id="inputStarPoints" placeholder="2000"/>
							  </div>
							  <div className="col-12">
								<label htmlFor="inputProductType" className="form-label">Kategori</label>
								<select className="form-select" id="inputProductType">
									<option></option>
									<option value="1">Fiksi</option>
									<option value="2">Novel</option>
									<option value="3">Romance</option>
								  </select>
							  </div>
							 {/* <div className="col-12">
								<label htmlFor="inputVendor" className="form-label">Vendor</label>
								<select className="form-select" id="inputVendor">
									<option></option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								  </select>
							  </div>*/}
							 {/* <div className="col-12">
								<label htmlFor="inputCollection" className="form-label">Collection</label>
								<select className="form-select" id="inputCollection">
									<option></option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								  </select>
							  </div>*/}
							 {/* <div className="col-12">
								<label htmlFor="inputProductTags" className="form-label">Product Tags</label>
								<input type="text" className="form-control" id="inputProductTags" placeholder="Enter Product Tags"/>
							  </div>*/}
							  <div className="col-12">
								  <div className="d-grid">
                                     <button type="button" className="btn btn-light">Simpan Produk</button>
								  </div>
							  </div>
						  </div> 
					  </div>
					  </div>
				   </div>{/*<!--end row-->*/}
				</div>
			  </div>
		  </div>

		</div>
	);
}