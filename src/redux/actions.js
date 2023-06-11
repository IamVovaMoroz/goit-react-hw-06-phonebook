import { nanoid } from 'nanoid';
import { ACTION_TYPE } from './constants';
import { createAction } from '@reduxjs/toolkit';

// Принимает один аргумент value, который представляет значение фильтра. Возвращаем объект с типом действия ACTION_TYPE.getFilterValue и значением фильтра в свойстве payload.
// export const getFilterValue = value => {
//   return {
//     type: ACTION_TYPE.getFilterValue,
//     payload: value,
//   };
// };
// получаем name, number и возвращаем обьект с id + name, number


export const getFilterValue = createAction(ACTION_TYPE.getFilterValue)

export const deleteContacts = createAction(ACTION_TYPE.deleteContacts)

// export const deleteContacts = contactId => {
//   return {
//     type: ACTION_TYPE.deleteContacts,
//     payload: contactId,
//   };
// };

export const addContacts = (name, number) => {
    return {
      type: ACTION_TYPE.addContacts,
      payload: { id: nanoid(5), name, number },
    };
  };
  