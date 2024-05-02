import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
  const [order, setOrder] = useState(<OrderItem[]>([]))

  const addItem = (item: MenuItem) => {
    const itemExists = order.find(orderItem => orderItem.id === item.id)
    if (itemExists) {
      const updateOrder = order.map(orderItem => orderItem.id === item.id ?
        { ...orderItem, quantity: orderItem.quantity + 1 } :
        orderItem)
      setOrder(updateOrder)
    } else {
      const newItem = { ...item, quantity: 1 }
      setOrder([...order, newItem])
    }
  }

  const removeItem = () => {
    console.log('Removing item')
  }

  return {
    order,
    addItem,
    removeItem

  }
}
