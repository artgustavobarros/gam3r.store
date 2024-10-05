import { DeliveryOrder } from "./delivery-order"
import { OrderItem } from "./order-item"
import { PaymentMethod } from "./payment-methods"
import { Status } from "./status"

export interface Order {
    id: number
    date: Date
    items: OrderItem[]
    price: number
    status: Status
    paymentMethod: PaymentMethod
    delivery: DeliveryOrder
}