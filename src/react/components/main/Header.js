
import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.setRoute = this.setRoute.bind(this);
  }
  setRoute(e) {
    e.preventDefault();
    this.props.setRoute(e.target.href);
  }

  render() {
    let homeActive = '';
    const counterActive = this.props.pathName === 'counter' ? 'active' : '';
    const countermActive = this.props.pathName === 'counterm' ? 'active' : '';

    if (!(counterActive || countermActive)) {
      homeActive = 'active';
    }

    return (
        <ul className="nav nav-tabs">
            <li role="presentation" className={homeActive}><a href="/" onClick={this.setRoute}>Home</a></li>
            <li role="presentation" className={counterActive}><a href="/demo/counter" onClick={this.setRoute}>Counter</a></li>
            <li role="presentation" className={countermActive}><a href="/demo/counterm" onClick={this.setRoute}>Multi Counter</a></li>
        </ul>
    );
  }
}

Header.propTypes = {
  pathName: PropTypes.string,
  setRoute: PropTypes.func
};

export default Header;
