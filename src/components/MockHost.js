import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './mockhost.cssmodule.css';

class MockHost extends React.Component {

  render() {
    return (
      <div className="mockhost-component" styleName="mockhost-component">
       
      </div>
    );
  }
}

MockHost.displayName = 'MockHost';
MockHost.propTypes = {};
MockHost.defaultProps = {};

export default cssmodules(MockHost, styles);
