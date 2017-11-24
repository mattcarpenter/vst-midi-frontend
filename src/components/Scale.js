import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './scale.cssmodule.css';
import Toggle from 'material-ui/Toggle';

class Scale extends React.Component {

  onToggle(event, toggled) {
    if (toggled) {
      this.props.actions.scaleDetectionStart();
    } else {
      this.props.actions.scaleDetectionEnd();
    }
  }

  render() {
    return (
      <div className="scale-component" styleName="scale-component">
        <div style={{width: 130}}>
          <Toggle label="Detect Scale" defaultToggled={false} onToggle={this.onToggle.bind(this)}/>
        </div>
        Scale: {JSON.stringify(this.props.scale)}<br/>
        Scale Notes: {this.props.scaleNotes}
      </div>
    );
  }
}

Scale.displayName = 'Scale';
Scale.propTypes = {};
Scale.defaultProps = {};

export default cssmodules(Scale, styles);
