import { CartItemType } from "@/types"

export type CartState = {
    items: CartItemType[]
    isVisible: boolean
}