
export const GET_FEED_REQUEST = 'GET_FEED_REQUEST';
export const GET_FEED_SUCCESS = 'GET_FEED_SUCCESS';
export const GET_FEED_FAIL = 'GET_FEED_FAIL';

export const getFeedRequest = () => {
  return {type: GET_FEED_REQUEST};
};
export const getFeedSuccess = (data: any) => {
  return {type: GET_FEED_SUCCESS, payload: {data}};
};
export const getFeedFail = (err: any) => {
  return {type: GET_FEED_FAIL, payload: {err}};
};
