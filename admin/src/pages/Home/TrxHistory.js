import React from 'react';

export default function TrxHistory(){
	return (
		<div className="row">
			<div className="col-xl-8 d-flex">
				<div className="card radius-10 w-100">
					<div className="card-body">
						<div className="d-flex align-items-center">
							<div>
								<h5 className="mb-1">Riwayat Transaksi</h5>
								<p className="mb-0 font-13"><i className='bx bxs-calendar'></i> Pendapatan 30 hari yang lalu</p>
							</div>
							<div className="font-22 ms-auto"><i className='bx bx-dots-horizontal-rounded'></i>
							</div>
						</div>
						<div className="table-responsive mt-4">
							<table className="table align-middle mb-0 table-hover" id="Transaction-History">
								<thead className="table-light">
									<tr>
										<th>Nama Pembayaran</th>
										<th>Tanggal</th>
										<th>Dana</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<div className="d-flex align-items-center">
												<div className="">
													<img src="https://via.placeholder.com/110x110" className="rounded-circle" width="46" height="46" alt="" />
												</div>
												<div className="ms-2">
													<h6 className="mb-1 font-14">Payment from Michle Jhon</h6>
													<p className="mb-0 font-13">Refrence Id #8547846</p>
												</div>
											</div>
										</td>
										<td>Jan 10, 2021</td>
										<td>+256.00</td>
										<td>
											<div className="badge rounded-pill bg-light text-white w-100">Completed</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="d-flex align-items-center">
												<div className="">
													<img src="https://via.placeholder.com/110x110" className="rounded-circle" width="46" height="46" alt="" />
												</div>
												<div className="ms-2">
													<h6 className="mb-1 font-14">Payment from Pauline Bird</h6>
													<p className="mb-0 font-13">Refrence Id #9653248</p>
												</div>
											</div>
										</td>
										<td>Jan 12, 2021</td>
										<td>+566.00</td>
										<td>
											<div className="badge rounded-pill bg-light text-white w-100">In Progress</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="d-flex align-items-center">
												<div className="">
													<img src="https://via.placeholder.com/110x110" className="rounded-circle" width="46" height="46" alt="" />
												</div>
												<div className="ms-2">
													<h6 className="mb-1 font-14">Payment from Ralph Alva</h6>
													<p className="mb-0 font-13">Refrence Id #7689524</p>
												</div>
											</div>
										</td>
										<td>Jan 14, 2021</td>
										<td>+636.00</td>
										<td>
											<div className="badge rounded-pill bg-light text-white w-100">Declined</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="d-flex align-items-center">
												<div className="">
													<img src="https://via.placeholder.com/110x110" className="rounded-circle" width="46" height="46" alt="" />
												</div>
												<div className="ms-2">
													<h6 className="mb-1 font-14">Payment from John Roman</h6>
													<p className="mb-0 font-13">Refrence Id #8335884</p>
												</div>
											</div>
										</td>
										<td>Jan 15, 2021</td>
										<td>+246.00</td>
										<td>
											<div className="badge rounded-pill bg-light text-white w-100">Completed</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="d-flex align-items-center">
												<div className="">
													<img src="https://via.placeholder.com/110x110" className="rounded-circle" width="46" height="46" alt="" />
												</div>
												<div className="ms-2">
													<h6 className="mb-1 font-14">Payment from David Buckley</h6>
													<p className="mb-0 font-13">Refrence Id #7865986</p>
												</div>
											</div>
										</td>
										<td>Jan 16, 2021</td>
										<td>+876.00</td>
										<td>
											<div className="badge rounded-pill bg-light text-white w-100">In Progress</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="d-flex align-items-center">
												<div className="">
													<img src="https://via.placeholder.com/110x110" className="rounded-circle" width="46" height="46" alt="" />
												</div>
												<div className="ms-2">
													<h6 className="mb-1 font-14">Payment from Lewis Cruz</h6>
													<p className="mb-0 font-13">Refrence Id #8576420</p>
												</div>
											</div>
										</td>
										<td>Jan 18, 2021</td>
										<td>+536.00</td>
										<td>
											<div className="badge rounded-pill bg-light text-white w-100">Completed</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="d-flex align-items-center">
												<div className="">
													<img src="https://via.placeholder.com/110x110" className="rounded-circle" width="46" height="46" alt="" />
												</div>
												<div className="ms-2">
													<h6 className="mb-1 font-14">Payment from James Caviness</h6>
													<p className="mb-0 font-13">Refrence Id #3775420</p>
												</div>
											</div>
										</td>
										<td>Jan 18, 2021</td>
										<td>+536.00</td>
										<td>
											<div className="badge rounded-pill bg-light text-white w-100">Completed</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="d-flex align-items-center">
												<div className="">
													<img src="https://via.placeholder.com/110x110" className="rounded-circle" width="46" height="46" alt="" />
												</div>
												<div className="ms-2">
													<h6 className="mb-1 font-14">Payment from Peter Costanzo</h6>
													<p className="mb-0 font-13">Refrence Id #3768920</p>
												</div>
											</div>
										</td>
										<td>Jan 19, 2021</td>
										<td>+536.00</td>
										<td>
											<div className="badge rounded-pill bg-light text-white w-100">Completed</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="d-flex align-items-center">
												<div className="">
													<img src="https://via.placeholder.com/110x110" className="rounded-circle" width="46" height="46" alt="" />
												</div>
												<div className="ms-2">
													<h6 className="mb-1 font-14">Payment from Johnny Seitz</h6>
													<p className="mb-0 font-13">Refrence Id #9673520</p>
												</div>
											</div>
										</td>
										<td>Jan 20, 2021</td>
										<td>+86.00</td>
										<td>
											<div className="badge rounded-pill bg-light text-white w-100">Declined</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="d-flex align-items-center">
												<div className="">
													<img src="https://via.placeholder.com/110x110" className="rounded-circle" width="46" height="46" alt="" />
												</div>
												<div className="ms-2">
													<h6 className="mb-1 font-14">Payment from Lewis Cruz</h6>
													<p className="mb-0 font-13">Refrence Id #8576420</p>
												</div>
											</div>
										</td>
										<td>Jan 18, 2021</td>
										<td>+536.00</td>
										<td>
											<div className="badge rounded-pill bg-light text-white w-100">Completed</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="d-flex align-items-center">
												<div className="">
													<img src="https://via.placeholder.com/110x110" className="rounded-circle" width="46" height="46" alt="" />
												</div>
												<div className="ms-2">
													<h6 className="mb-1 font-14">Payment from David Buckley</h6>
													<p className="mb-0 font-13">Refrence Id #8576420</p>
												</div>
											</div>
										</td>
										<td>Jan 22, 2021</td>
										<td>+854.00</td>
										<td>
											<div className="badge rounded-pill bg-light text-white w-100">In Progress</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="d-flex align-items-center">
												<div className="">
													<img src="https://via.placeholder.com/110x110" className="rounded-circle" width="46" height="46" alt="" />
												</div>
												<div className="ms-2">
													<h6 className="mb-1 font-14">Payment from Thomas Wheeler</h6>
													<p className="mb-0 font-13">Refrence Id #4278620</p>
												</div>
											</div>
										</td>
										<td>Jan 18, 2021</td>
										<td>+536.00</td>
										<td>
											<div className="badge rounded-pill bg-light text-white w-100">Completed</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div className="col-xl-4">
				<div className="card radius-10 overflow-hidden">
					<div className="card-body">
						<div className="d-flex align-items-center">
							<div className="">
								<p className="mb-1">Bounce Rate</p>
								<h4 className="mb-0">48.32%</h4>
							</div>
							<div className="ms-auto">
								<p className="mb-0 font-13 text-white">+12.34 Increase</p>
								<p className="mb-0 font-13">Dari minggu yang lalu</p>
							</div>
						</div>
					</div>
					<div id="chart12"></div>
				</div>
				<div className="card radius-10 overflow-hidden">
					<div className="card-body">
						<div className="d-flex align-items-center">
							<div className="">
								<p className="mb-1">Pageviews</p>
								<h4 className="mb-0">52.64%</h4>
							</div>
							<div className="ms-auto">
								<p className="mb-0 font-13 text-white">+21.34 Increase</p>
								<p className="mb-0 font-13">Dari minggu yang lalu</p>
							</div>
						</div>
					</div>
					<div id="chart13"></div>
				</div>
				<div className="card radius-10 overflow-hidden">
					<div className="card-body">
						<div className="d-flex align-items-center">
							<div className="">
								<p className="mb-1">New Sessions</p>
								<h4 className="mb-0">68.23%</h4>
							</div>
							<div className="ms-auto">
								<p className="mb-0 font-13 text-white">+18.42 Increase</p>
								<p className="mb-0 font-13">Dari minggu yang lalu</p>
							</div>
						</div>
					</div>
					<div id="chart14"></div>
				</div>
			</div>
		</div>
	);
}