/*
   What is a SCOPE file. See documentation here:
   https://github.com/OpusCapitaBES/js-react-showroom-client/blob/master/docs/scope-component.md
*/

import React, { Component, PropTypes } from 'react';
import { showroomScopeDecorator } from 'opuscapita-showroom-client';
import I18nContext from 'opuscapita-react-i18n';


@showroomScopeDecorator
export default
class DatePickerScope extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null
    };
  }

  handleChange(date) {
    this.setState({ date });
  }

  render() {
    let { date } = this.state;
    let value = date ? date.toString() : 'not selected yet';
    return (
      <div>
        {this._renderChildren()}
        <div>
          <hr />
          <strong>Date: </strong>
          <span>{value}</span>
        </div>
      </div>
    );
  }
}

DatePickerScope.contextTypes = {
  i18n: PropTypes.object
};
DatePickerScope.childContextTypes = {
  i18n: PropTypes.object
};