import {ChatActionTypes, DELETE_MESSAGE, Message, SEND_MESSAGE} from './types'

export const sendMessage = (newMessage: Message): ChatActionTypes => ({
  type: SEND_MESSAGE,
  payload: newMessage
});

export const deleteMessage = (timestamp: number): ChatActionTypes => ({
  type: DELETE_MESSAGE,
  meta: {
    timestamp
  }
});