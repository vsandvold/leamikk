export default function injectMiddleware(dependencies) {
  return ({ dispatch, getState }) => next => action => {
    return next(typeof action === 'function' ? action(dependencies) : action);
  }
}
