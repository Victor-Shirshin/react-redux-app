export function createStore(reducer, initialState) {
  let state = initialState;
  let listeners = [];

  // getState() получает состояние
  function getState() {
    return state;
  }

  // dispatch() обновляет состояние
  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  // добавляет слушателей которым необходимо добавлять обновления
  function subscribe(listener) {
    listeners.push(listener);
  }

  return { getState, dispatch, subscribe }
}