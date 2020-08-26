// 'action creator' in action
export default function changeTheme(theme) {
  return {
    type: "CHANGE_THEME",
    payload: theme,
  };
}
