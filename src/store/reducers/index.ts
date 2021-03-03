export default (state, action) => {
	switch (action.key) {
		case 'add':
			return 1
		default:
			return 3
	}
}
