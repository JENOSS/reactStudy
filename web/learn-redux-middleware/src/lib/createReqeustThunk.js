import { startLoading, finishLoading } from "../modules/loading";

export default function createRequestThunk(type, reqeust) {
  //성공 실패 액션 타입
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return (params) => async (dispatch) => {
    dispatch({ type });
    dispatch(startLoading(type));

    try {
      const response = await reqeust(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      });
      dispatch(finishLoading(type));
      throw e;
    }
  };
}

// 사용법 : createRequestThunk('GET_USERS', api.getUsers);
