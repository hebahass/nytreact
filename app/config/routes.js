var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute	= Router.IndexRoute;

var Main = require('../components/main.js');
var Saved = require('../components/children/saved.js');
var Search = require('../components/children/search.js');
var Query = require('../components/children/grandChildren/query.js');
var Results = require('../components/children/grandChildren/results.js');

module.exports = (
  <Route path='/' component={Main}>

		<Route path='Search' component={Search}>
      <Route path='query' component={Query} />
      <Route path='results' component={Results}/>
      <IndexRoute component = {Query} />
		</Route>

		<Route path='Saved' component={Saved} />

		<IndexRoute component={Search} />

	</Route>
);
