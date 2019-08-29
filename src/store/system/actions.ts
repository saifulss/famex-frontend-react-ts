import {SystemActionTypes, SystemState, UPDATE_SESSION} from './types'

export const updateSession = (newSession: SystemState): SystemActionTypes => ({
  type: UPDATE_SESSION,
  payload: newSession
});