import { Types } from '../constants/actionTypes';

export const ActionCreators = {

  addProfile: (user) => ({ type: Types.ADD_USER, payload: { user } }),

  updateProfile: (user) => ({ type: Types.UPDATE_USER, payload: { user } }),

  formSubmittionStatus: (status) => ({ type: Types.FORM_SUBMITION_STATUS, payload: { status }}),

  login: (user) => ({ type: Types.LOGIN, payload: { user } })
}
