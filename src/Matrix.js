import React, { Component } from 'react';
import Cell from "./Cell";

export default class Matrix extends Component {
  
  genRow = (vals) => (
     vals.map(val => <Cell value={val}/>) // replace me and render a cell component instead!
  );



  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  );
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}

        {/*{alert(`VALUES ARE ${this.props.values}`)}*/}
      </div>
    )
  }
  
}


Matrix.defaultProps = {
  values: new Array(10)
};
