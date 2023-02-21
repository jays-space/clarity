import { Action } from '@reduxjs/toolkit';

export interface IPayloadedAction<T = any> extends Action {
  payload?: T;
}

export interface IActionError {
  message: string;
}
