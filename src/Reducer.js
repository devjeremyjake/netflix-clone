export const initialState = {
	basket: null,
	user: null,
};

function reducer(state, action) {
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return { ...state, basket: action.basket };

		case 'SET_USER':
			return { ...state, user: action.user };

		default:
			return state;
	}
}

export default reducer;
