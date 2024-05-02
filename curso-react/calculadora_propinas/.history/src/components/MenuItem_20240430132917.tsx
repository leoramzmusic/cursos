import type { MenuItem } from "../types"

type MenuItemProps = {
	item: MenuItem,
	addItem: () => void
}
export default function MenuItem({item} : MenuItemProps) {
	return (
		<button 
			className="border-2 border-teal-200 w-full p-2 flex justify-between">
			<p>{item.name}</p>
			<p className="font-black">${item.price}</p>
		</button>
	)
}
