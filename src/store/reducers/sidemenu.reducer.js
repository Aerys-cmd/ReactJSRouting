const sideMenuInitialState = {
	visible: false,
};

export const sideMenuReducer = (state = sideMenuInitialState, action) => {
	if (action.type == 'toggleSideMenu')
		return {
			...state,
			visible: action.payload.visible,
		};
	else return state;
};
