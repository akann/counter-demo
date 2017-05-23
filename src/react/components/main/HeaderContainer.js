
import {connect} from 'react-redux';

import Header from './Header';
import {setRouteAction} from '../../store/actions/routes/index';

const mapStateToProps = ({route}) => {
  return {
    pathName: route
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRoute: (route) => {
      const path = route.match(/([^/]*)$/)[1]
      window.history.replaceState({}, null, `/demo/${path}`);
      dispatch(setRouteAction(path));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
