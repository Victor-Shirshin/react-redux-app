import * as actionTypes from "./actionTypes";

// actions нужно называть обратным методом
export function taskCompleted(id) {
  return {
    type: actionTypes.taskUpdated, payload: { id, completed: true }
  }
}

export function titleChanged(id) {
  return {
    type: actionTypes.taskUpdated, id, payload: { id, title: `New title for ${id}` }
  }
}

export function tasksDeleted(id) {
  return {
    type: actionTypes.taskDeleted, id, payload: { id }
  }
}