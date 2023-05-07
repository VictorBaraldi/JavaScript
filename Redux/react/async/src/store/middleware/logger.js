const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('action', action);
  console.log('prev_state', store.getState());
  const result = next(action);
  console.log('next_state', store.getState());
  console.groupEnd();
  return result;
};

export default logger;
