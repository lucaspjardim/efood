import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type plateInfos = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

type CartState = {
  items: plateInfos[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<plateInfos>) => {
      state.items.push(action.payload)
    },

    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },

    open: (state) => {
      state.isOpen = true
    },

    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
