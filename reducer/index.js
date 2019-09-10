const initstate = {
  name: "razi",
  data: [],
  channeldata: {
    items: []
  },
  channelIddata: {
    items: []
  }
};
const reducer = (state = initstate, action) => {
  if (action.type == "GET_DATA") {
    return { ...state, data: action.payload };
  }
  if (action.type == "CHANNEL_LIST") {
    return { ...state, channeldata: action.payload }
  }
  if (action.type == "Cahannel") {
    return { ...state, channelIddata: action.payload }
  }
  else {
    return state;
  }
};

export default reducer;
