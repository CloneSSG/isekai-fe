import { atom, selector } from 'recoil'
import { CartDeliveryType } from '@/types/cartType'

interface CartStateType {
  ssg: CartDeliveryType[]
  post: CartDeliveryType[]
}
type CartType = keyof CartStateType

/** 장바구니 전체 상품 */
export const cartState = atom<CartStateType>({
  key: 'cartState',
  default: {
    ssg: [],
    post: [],
  },
})

export const checkedItemsState = atom<CartStateType>({
  key: 'checkedItemsState',
  default: {
    ssg: [],
    post: [],
  },
})

interface ItemPriceType {
  cartId: number
  count: number
  price: number
}
export const checkedItemsPriceState = atom<ItemPriceType[]>({
  key: 'checkedItemsPriceState',
  default: [],
})
export const allItemsPriceState = atom<ItemPriceType[]>({
  key: 'allItemsPriceState',
  default: [],
})

// type 별 전체 체크 여부를 확인하는 selector
export const isAllCheckedState = selector({
  key: 'isAllCheckedState',
  get: ({ get }) => {
    const cart = get(cartState)
    const checkedItems = get(checkedItemsState)

    const isAllChecked: Record<CartType, boolean> = {
      ssg: false,
      post: false,
    }

    ;(Object.keys(cart) as CartType[]).forEach((type) => {
      isAllChecked[type] =
        (cart[type].length > 0 &&
          cart[type].every((item: CartDeliveryType) =>
            checkedItems[type].some(
              (checkedItem) => checkedItem.cartId === item.cartId,
            ),
          )) ||
        cart[type].length === 0
    })

    return isAllChecked
  },
})
