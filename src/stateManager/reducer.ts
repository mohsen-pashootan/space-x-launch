export const INIT_STATE = {
  pastSpaceLaunch: [],
  upcomingSpaceLaunch: [],
};

export default function reducer(state = INIT_STATE, action) {
  switch (action.payload) {
    default:
      return state;
  }
}
