function actionCreator(type: string, payload: unknown) {
  return {
    type,
    payload,
  };
}

export const getPastSpaceLaunch = (url) => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });

    fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "PAST_LAUNCH", payload: data }));
  };
};

export const getUpcomingSpaceLaunch = (url) => {
  return (dispatch) => {
    dispatch(actionCreator("LOADING", null));

    fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "UPCOMING_LAUNCH", payload: data }));
  };
};
