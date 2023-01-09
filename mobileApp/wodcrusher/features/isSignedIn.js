import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    active: false
}

export const isSignedIn = createSlice({
    name: 'logg',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.active = true
        },
        signOut: (state, action) => {
            state.active = false
        }
    }
})

export const { signIn, signOut } = isSignedIn.actions

// Exportamos por defecto el reducer que es lo que quiere luego el store
export default isSignedIn.reducer