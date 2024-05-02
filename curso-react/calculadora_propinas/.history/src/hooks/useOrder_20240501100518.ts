import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
  const [order, setOrder] = useState(<OrderItem[]>([]))

  const addItem = (item: MenuItem) => {
    const itemExists = order.find(orderItem => orderItem.id)

    const newItem = { ...item, quantity: 1 }
    setOrder([...order, newItem])
  }

  console.log(order)

  return {
    addItem

  }
}
