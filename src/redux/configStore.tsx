import { configureStore } from '@reduxjs/toolkit'
import productReducer from './reducers/productReducer'
import registerReducer from './reducers/registerReducer'
import userReducer from './reducers/userReducer'
// ...

export const store = configureStore({
  reducer: {
    productReducer:productReducer,
    userReducer:userReducer
  
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch