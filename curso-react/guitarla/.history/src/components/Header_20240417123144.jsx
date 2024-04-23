import { Fragment } from "react"
export default function Header() {
	return (
		<Fragment>
			<header ClassName="py-5 header">
				<div ClassName="container-xl">
					<div ClassName="row justify-content-center justify-content-md-between">
						<div ClassName="col-8 col-md-3">
							<a href="index.html">
								<img ClassName="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
							</a>
						</div>
						<nav ClassName="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
							<div
								ClassName="carrito"
							>
								<img ClassName="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

								<div id="carrito" ClassName="bg-white p-3">
									<p ClassName="text-center">El carrito esta vacio</p>
									<table ClassName="w-100 table">
										<thead>
											<tr>
												<th>Imagen</th>
												<th>Nombre</th>
												<th>Precio</th>
												<th>Cantidad</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<img ClassName="img-fluid" src="./public/img/guitarra_02.jpg" alt="imagen guitarra" />
												</td>
												<td>SRV</td>
												<td ClassName="fw-bold">
													$299
												</td>
												<td ClassName="flex align-items-start gap-4">
													<button
														type="button"
														ClassName="btn btn-dark"
													>
														-
													</button>
													1
													<button
														type="button"
														ClassName="btn btn-dark"
													>
														+
													</button>
												</td>
												<td>
													<button
														ClassName="btn btn-danger"
														type="button"
													>
														X
													</button>
												</td>
											</tr>
										</tbody>
									</table>

									<p ClassName="text-end">Total pagar: <span ClassName="fw-bold">$899</span></p>
									<button ClassName="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</header>
		</Fragment>
	)
}