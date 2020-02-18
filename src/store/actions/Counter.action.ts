export const INCREMENT_COUNT = '[COUNTER] INCREMENT_COUNT';
export const DECREMENT_COUNT = '[COUNTER] DECREMENT_COUNT';

export interface IncrementCountAction { type: string }
export interface DecrementCountAction { type: string }

export type KnownAction = IncrementCountAction | DecrementCountAction;

export const actionCreators = {
    increment: () => ({ type: INCREMENT_COUNT } as IncrementCountAction),
    decrement: () => ({ type: DECREMENT_COUNT } as DecrementCountAction)
};
