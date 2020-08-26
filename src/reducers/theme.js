// make sure this is pure function
export default function theme(state = "darkblue", action) {
  // all action myst have a type / hard requirement
  if (action.type === "CHANGE_THEME") {
    return action.payload;
  } else {
    return state;
  }
}
