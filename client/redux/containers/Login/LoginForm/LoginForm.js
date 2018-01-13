import LoginForm from 'client/components/Login/LoginForm'

import { connect } from 'react-redux'

import { submitLoginForm } from 'client/redux/modules/login'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (event) => dispatch(submitLoginForm(event))
})

export default connect(
  null,
  mapDispatchToProps
)(LoginForm)
