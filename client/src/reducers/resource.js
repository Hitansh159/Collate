const initState = {
  title: "",
  description: "",
  public: false,
  snippets: [],
  websites: [],
  frameworks: [],
  apis: [],
  tools: [],
  text_notes: [],
  papers: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "update":
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
