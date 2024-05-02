import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderContentsProps = {
	order: OrderItem[],
	removeItem: (id: MenuItem['id'])	=> void
}

export default function OrderContents({order, removeItem}: OrderContentsProps) {
	return (
		<div>
			<h2 className='text-4xl font-black'>Consumo</h2>

			<div className="mt-10 space-y-3">
				{order.length === 0 ?
					<p className="text-center">La orden esta vacia</p> :
					(order.map(item => (
						<div 
							key={item.id} 
							className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
						>
						<div>	
							<p className="text-lg">
								{item.name} - {formatCurrency(item.price)}
							</p>
							<p className="font-black ">
								Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
							</p>
						</div>
							<button className="bg-red-600 h-8 w-8 rounded-full text-white"
									onClick={() => removeItem()}
							>
								X
							</button>
						</div>
					))
					)}
			</div>
		</div>
	)
}