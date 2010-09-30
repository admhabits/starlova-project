import React from 'react';

export default function Home(){
	return (
		<div className="page-content" style={{ minHeight: '100vh' }}>
			<div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
				<div className="col">
					<div className="card radius-10">
						<div className="card-body">
							<div className="d-flex align-items-center">
								<div>
									<p className="mb-0">Pendapatan</p>
									<h4 className="my-1">Rp 23.000.000</h4>
									<p className="mb-0 font-13"><i className='bx bxs-up-arrow align-middle'></i>$34 Since last week</p>
								</div>
								<div className="widgets-icons ms-auto"><i className='bx bxs-wallet'></i>
								</div>
							</div>
							<div id="chart1"></div>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card radius-10">
						<div className="card-body">
							<div className="d-flex align-items-center">
								<div>
									<p className="mb-0">Total Pelanggan</p>
									<h4 className="my-1">8.4K</h4>
									<p className="mb-0 font-13"><i className='bx bxs-up-arrow align-middle'></i>14% Since last week</p>
								</div>
								<div className="widgets-icons ms-auto"><i className='bx bxs-group'></i>
								</div>
							</div>
							<div id="chart2"></div>
						</div>
					</div>
				</div>
				<div className="col-lg-12">
					<div className="card radius-10">
						<div className="card-body">
							<div className="d-flex align-items-center">
								<div>
									<p className="mb-0">Semua Pengunjung</p>
									<h4 className="my-1">59K</h4>
									<p className="mb-0 font-13"><i className='bx bxs-down-arrow align-middle'></i>12.4% Since last week</p>
								</div>
								<div className="widgets-icons ms-auto"><i className='bx bxs-binoculars'></i>
								</div>
							</div>
							<div id="chart3"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}