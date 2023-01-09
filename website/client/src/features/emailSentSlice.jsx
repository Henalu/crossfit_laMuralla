import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sent: false
}

export const emailSentSlice = createSlice({
    name: 'formStatus',
    initialState,
    reducers: {
        emailSent: (state, action) => {
            state.sent = true
        },
        resetForm: (state, action) => {
            state.sent = false
        }
    }
})

export const { emailSent, resetForm } = emailSentSlice.actions

// Exportamos por defecto el reducer que es lo que quiere luego el store
export default emailSentSlice.reducer