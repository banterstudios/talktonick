import update from 'immutability-helper'

export const SHOW_LOGIN_POPUP = '@login/SHOW_LOGIN_POPUP'
export const HIDE_LOGIN_POPUP = '@login/HIDE_LOGIN_POPUP'

export const submitLoginForm = (event) => (dispatch, getState) => {
  // Handle reduxForm redirects
  if (event.preventDefault) {
    event.preventDefault()
  }

  return new Promise((resolve) => setTimeout(resolve, 2000))
}

const initialState = {
  showLoginPopup: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOGIN_POPUP:
      return update(state, {
        showLoginPopup: {
          $set: true
        }
      })

    case HIDE_LOGIN_POPUP:
      return update(state, {
        showLoginPopup: {
          $set: false
        }
      })

    default:
      return state
  }
}
