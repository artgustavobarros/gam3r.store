import { Product } from '../product'
import { CartItem } from './cart-item'

export default class Cart {
  constructor(readonly items: CartItem[] = []) {}

  private itemsByProduct(product: Product): CartItem | undefined {
    return this.items.find((item) => item.product.id === product.id)
  }

  private changeQuantityOfItem(
    items: CartItem[],
    product: Product,
    diff: number,
  ): CartItem[] {
    return items
      .map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + diff }
          : item,
      )
      .filter((item) => item.quantity > 0)
  }

  get fullPriceWithoutDiscounts() {
    return this.items
      .map((item) => item.product.basePrice * item.quantity)
      .reduce((a, b) => a + b, 0)
  }

  get fullPrice() {
    return this.items
      .map((item) => item.product.promotionalPrice * item.quantity)
      .reduce((a, b) => a + b, 0)
  }

  get itemsQuantity() {
    return this.items.map((item) => item.quantity).reduce((a, b) => a + b, 0)
  }

  addItem(product: Product): Cart {
    const ADD_ITEM_QUANTITY = 1
    const item = this.itemsByProduct(product)

    if (item) {
      return new Cart(
        this.changeQuantityOfItem(this.items, product, ADD_ITEM_QUANTITY),
      )
    } else {
      return new Cart([...this.items, { product, quantity: 1 }])
    }
  }

  removeItemQuantity(product: Product) {
    const REMOVE_ITEM_QUANTITY = -1
    const item = this.itemsByProduct(product)
    if (!item) return this

    return new Cart(
      this.changeQuantityOfItem(this.items, product, REMOVE_ITEM_QUANTITY),
    )
  }

  removerItem(product: Product) {
    const item = this.itemsByProduct(product)
    if (!item) return this

    return new Cart(this.items.filter((item) => item.product.id !== product.id))
  }

  clear() {
    return new Cart()
  }
}
