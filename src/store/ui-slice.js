import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		page: 'START_PAGE',
	},
	reducers: {
		setPage(state, action) {
			state.page = action.payload
		},
	},
})

export const { setPage } = uiSlice.actions

export default uiSlice
