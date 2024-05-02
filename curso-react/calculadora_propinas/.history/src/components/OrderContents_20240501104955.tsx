import { OrderItem } from "../types"

type OrderContentsProps = {
	order: OrderItem[]
}

export default function OrderContents({ order }: OrderContentsProps) {
	return (
		<div>
			<h2 className='text-4xl font-black'>Consumo</h2>

			<div className="space-y-3 mt-5">
				{order.length === 0 ?
					<p className="text-center">La orden esta vacia</p> :
					(order.map(item =>
						<div
							key={item.id}
						>
							<p>
								{item.name} - {formatCurrency(item.price)}
							</p>
						</div>)
					)}
			</div>
		</div>
	)
}
