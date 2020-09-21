function actionCreator(type: string, payload: unknown) {
  return {
    type,
    payload,
  };
}

export const getPastSpaceLaunch = (url: string) => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });

    fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "PAST_LAUNCH", payload: data }));
  };
};

export const getUpcomingSpaceLaunch = (url: string) => {
  return (dispatch) => {
    dispatch(actionCreator("LOADING", null));

    fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "UPCOMING_LAUNCH", payload: data }));
  };
};

export const getSearched = (text: string) =>
  actionCreator("SEARCHED_TEXT", text);

export const pageChanged = (pageNumber: number) =>
  actionCreator("PAGE_CHANGED", pageNumber);

export const pastPageChanged = (pageNumber: number) =>
  actionCreator("PAST_PAGE_CHANGED", pageNumber);

export const upcomingPageChanged = (pageNumber: number) =>
  actionCreator("UPCOMING_PAGE_CHANGED", pageNumber);
