export const toggleMenu = (visible) => {
	return {
		type: 'toggleSideMenu',
		payload: { visible: !visible },
	};
};
