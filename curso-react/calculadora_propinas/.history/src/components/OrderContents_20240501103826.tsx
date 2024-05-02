import { OrderItem } from "../types"

type OrderContentsProps = {
	order: OrderItem[]
}

export default function OrderContents({order}: OrderContentsProps) {
	return (
		<div>
			<h2 className='text-4xl font-black'>Consumo</h2>

			<div className="space-y-3 mt-5">
				{order.length === 0 ? 
				    <p className="text-center">La orden esta vacia</p> :
					(order.map(item => 
						<div>
							<p>{item.name}</p>
                            <p>${item.price}</p>
						</div>)
					)}
			</div>
		</div>
	)
}