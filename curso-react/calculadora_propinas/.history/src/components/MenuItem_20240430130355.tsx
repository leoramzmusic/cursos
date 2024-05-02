import type { MenuItem } from "../types"

type MenuItemProps = {
	item: MenuItem
}
export default function MenuItem({item} : MenuItemProps) {
	return (
		<button 
			className="border-2 border-teal-400 w-full p-2">
			<p>{item.name}</p>
			<p className="font-black">${item.price}</p>
		</button>
	)
}
