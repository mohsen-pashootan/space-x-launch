function actionCreator(type: string, payload: unknown) {
  return {
    type,
    payload,
  };
}
