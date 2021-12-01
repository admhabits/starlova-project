import React from 'react';
import Img404 from '../assets/notfound.svg'

export default function NotFound(){
	return (
		<div className="error-404 d-flex align-items-center justify-content-center my-4">
			<div className="container">
				<div className="py-2">
					<div className="row g-0">
						<div className="col col-xl-5 p-4">
							<div className="card-body p-4">
								<h1 className="display-1"><span className="text-white">4</span><span className="text-white">0</span><span className="text-white">4</span></h1>
								<h2 className="font-weight-bold display-4">Lost in Space</h2>
								<p>You have reached the edge of the universe.
									<br/>The page you requested could not be found.
									<br/>Dont'worry and return to the previous page.</p>
								<div className="mt-5">
									<a href="/" className="btn btn-light btn-lg px-md-5 radius-30">Go Home</a>
									{/*<a href="/" className="btn btn-light btn-lg ms-3 px-md-5 radius-30">Back</a>*/}
								</div>
							</div>
						</div>
						<div className="col-xl-7 p-4">
							<img src={Img404} className="img-fluid" alt=""/>
						</div>
					</div>
					{/*<!--end row-->*/}
				</div>
			</div>
		</div>
	);
}