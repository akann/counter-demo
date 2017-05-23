
import React from 'react';

import HeaderContainer from './HeaderContainer';
import PropTypes from 'prop-types';

class App extends React.Component {

  render() {
    return (
        <div>
            <HeaderContainer />
            <div id="mainbody">
                {this.props.children}
            </div>
            <hr />
        </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.array,
};

export default App;




