import {connect} from 'react-redux';

import CounterSingle from './CounterSingle';

const mapStateToProps = ({route}) => {
  return {
    visible: route === 'counter'
  };
};

export default connect(mapStateToProps)(CounterSingle);
