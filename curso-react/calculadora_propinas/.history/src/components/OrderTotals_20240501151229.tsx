import { OrderItem } from "../types"

type OrderTotalsProps = { 
	order: OrderItem[]
}
export default function OrderTotals({order}: OrderTotalsProps) {
  return (
	<>
		<div className="space-y-3">
			<h2 className="font-black text-2xl">Totales y Propina:</h2>
			<p>
				Subtotal a pagar: {''}
				<span className="font-bold">
                    $0
                </span>
			</p>
			<p>
				Propina: {''}
				<span className="font-bold">
                    $0
                </span>
			</p>
			<p>
				Total a pagar: {''}
				<span className="font-bold">
                    $0
                </span>
			</p>

		</div>
		<button>

		</button>
	</>
  )
}
