const initState = {
    title: "",
    description: "",
    public: false,
    edit: true,
    snippets: [],
    websites: [],
    frameworks: [],
    apis: [],
    tools: [],
    text_notes: [],
    papers: [],
    images: [],
  };
  
  const reducer = (state = initState, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.key]: action.value };
      default:
        return state;
    }
  };
  
  export default reducer;
