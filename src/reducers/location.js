// make sure this is pure function
export default function location(state = "Seattle, WA", action) {
  // all action myst have a type / hard requirement
  if (action.type === "CHANGE_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
}
