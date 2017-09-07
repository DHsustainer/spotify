import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../../actions/loginActions';
import './loginmain.css';


export class LoginMain extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      message: ''
    };
    this.getMessage = this.getMessage.bind(this);
  }
  
  componentWillMount() {
    this.getMessage();
  }
  
  componentWillReceiveProps(nextProps) {
    if(typeof nextProps.message !== 'undefined' &&
      nextProps.message !== this.state.message
    ) {
      this.setState({
        message: nextProps.message
      });
    }
  }
  
  getMessage() {
    this.props.actions.getMessage();
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Spotify Search</h1>
          <p>
            <a
              className="btn btn-lg btn-success"
              href="http://localhost:8888/login"
              role="button"
            >
              Login To spotify
            </a>
          </p>
        </div>
      </div>
    );
  }
}

LoginMain.propTypes = {
  actions: PropTypes.object,
  message: PropTypes.string
};

LoginMain.defaultProps = {
  actions: {},
  message: ''
};

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.login.message
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginMain);

