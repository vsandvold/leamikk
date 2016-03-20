export default function thunkInjectMiddleware(dependencies) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, dependencies);
    }

    return next(action);
  }
}
