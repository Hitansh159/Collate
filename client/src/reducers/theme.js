const reducer = (dark = false, action) => {
    switch (action.type) {
        case "toggle":
            return !dark;
        default:
            return dark;
    }
};

export default reducer;