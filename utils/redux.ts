import reducers from '@app/services/index.reducers';

type AllActions = Parameters<typeof reducers>[1];

enum Types {
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}
export const createAction = (type: string, payload?: unknown) =>
  ({
    type,
    payload,
  } as AllActions);

export const createApiAction = <R, S = null, F = string>(type: string) => ({
  request: (payload?: R) => createAction(`${type}_${Types.REQUEST}`, payload),
  success: (payload?: S) => createAction(`${type}_${Types.SUCCESS}`, payload),
  failure: (payload?: F) => createAction(`${type}_${Types.FAILURE}`, payload),
});
