var React = require('react');

var Query = React.createClass({
  handleChange: function(event){

var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},

	handleClick: function(){

		console.log("CLICK");
		console.log(this.state.term);

		this.props.setTerm(this.state.term);

	},
  render: function(){
    return (
      <div className = "input-group" >
        <form>
          <h3>Article title:</h3>
          <input type = "text" name = "searchTitle" className = "form-control"/>
          <h3>Start date:</h3>
          <input type = "text" name = "startDate" className = "form-control"/>
          <h3>End date:</h3>
          <input type = "text" name = "endDate" className = "form-control"/>
          <input type = "submit" value = "submit" className = "btn-danger"/>
        </form>
      </div>
    );
  }
});

module.exports = Query;
