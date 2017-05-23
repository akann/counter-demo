
import {connect} from 'react-redux';

import Counter from './Counter';
import {incAction, decAction, resetAction} from '../../store/actions/counter/index';

const mapStateToProps = (state, ownProps) => {
  const counter = state.counters.find(item => item.id === ownProps.id);
  const label = ownProps.label;
  return {
    count: counter.count,
    counterId: counter.id,
    label
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInc: (id) => dispatch(incAction(id)),
    onDec: (id) => dispatch(decAction(id)),
    onReset: (id) => dispatch(resetAction(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
