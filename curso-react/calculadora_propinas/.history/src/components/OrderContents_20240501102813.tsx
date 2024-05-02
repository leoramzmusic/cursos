import { OrderItem } from "../types"

type OrderContentsProps = {
	order: OrderItem[]
}

export default function OrderContents({order}: OrderContentsProps) {
	return (
		<div>
			<h2 className='text-4xl font-black'>Consumo</h2>
		</div>
	)
}
