export const START_REQUEST = 'START_REQUEST';
export const FINISH_REQUEST = 'FINISH_REQUEST';

export const startRequest = () => ({
  type: START_REQUEST,
});

export const finishRequest = () => ({
  type: FINISH_REQUEST,
});
