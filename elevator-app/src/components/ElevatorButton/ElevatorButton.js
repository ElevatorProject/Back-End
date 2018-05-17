import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
	  margin: 12,
};

const RaisedButtonExampleSimple = () => (
	  <div>
	    <RaisedButton label="Default" style={style} />
	    <br />
	    <br />
	    <RaisedButton label="Full width" fullWidth={true} />
	  </div>
);

export default RaisedButtonExampleSimple;
