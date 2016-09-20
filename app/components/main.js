var React = require('react');

var Saved = require('./children/saved.js');
var Search = require('./children/search.js');
var Helpers = require('./utils/helpers.js');

var Main = React.createClass({
  getInitialState: function(){
    return {
        searchTerm: "",
        results: "",
        history: []
    }
  },
  setTerm: function(title){
    this.setState({
			searchTerm: title
		})
  },

  render: function() {
    var jumboStyle = {
      textAlign: 'center'
    };
  return (
    <div className = "container">
      <div className="jumbotron" style = {jumboStyle}>
        <h1>New York Times Article Search</h1>
        <p>Search for and pin articles of interest!</p>
      </div>
      <nav className="navbar navbar-inverse">
        <div className = "container">
          <a href = "#/Search"><button type="button" className="btn btn-default navbar-btn">Search</button></a>
          <a href = "#/Saved"><button type="button" className="btn btn-default navbar-btn">Saved Articles</button></a>
        </div>
      </nav>
      <div className = "row">
        {this.props.children}
      </div>
    </div>
  );
  }
});

module.exports = Main;
