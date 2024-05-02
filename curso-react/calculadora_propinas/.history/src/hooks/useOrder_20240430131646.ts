import { useState } from "react"
import type { OrderItem } from "../types"

export default function useOrder() {
	const [order, setOrder] = useState([])
	console.log(order, setOrder)
  return {

  }
}
