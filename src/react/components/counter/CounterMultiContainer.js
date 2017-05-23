
import {connect} from 'react-redux';

import CounterMulti from './CounterMulti';
import {addAction, removeAction} from '../../store/actions/counter/multi';

const mapStateToProps = state => {
  return {
    counters: state.counters.filter(item => item.id > 0),
    visible: state.route === 'counterm'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: () => dispatch(addAction()),
    onRemove: id => dispatch(removeAction(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterMulti);
