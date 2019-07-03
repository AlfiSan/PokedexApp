import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getListRequest: ['data', 'append', 'isFilter' ],
  getListSuccess: ['payload'],
  getListAppendSuccess: ['payload'],
  getListFailure: null
})

export const GetListTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Selectors ------------- */

export const GetListSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data})

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

//Success Append
export const appendSuccess = (state, { payload }) => {
  payload = state.payload.results ? Immutable.setIn(payload, ["results"], state.payload.results.concat(payload.results)) : payload
  return state.merge({ fetching: false, error: false, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_LIST_REQUEST]: request,
  [Types.GET_LIST_SUCCESS]: success,
  [Types.GET_LIST_APPEND_SUCCESS]: appendSuccess,
  [Types.GET_LIST_FAILURE]: failure
})
