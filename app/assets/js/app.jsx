var
	React = require('react'),
	Carousel = require('./components/carousel.jsx'),
	data = require('../../data/carousel.js');

var App = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1 className="page-header">React Carousel</h1>
						<Carousel data={data} autoPlay={true} autoPlayInterval="3000" infiniteScroll={true} showArrows={true} direction="left"/>
					</div>
				</div>
				<div className="row">
					<div className="jumbotron col-md-12">
						<h2>Settings</h2>
						<div className="table-responsive">
						   <table className="table table-bordered table-striped">
						      <colgroup>
						         <col className="col-xs-1" />
						         <col className="col-xs-7" />
						      </colgroup>
						      <thead>
						         <tr>
						            <th>Settings</th>
						            <th>Description</th>
						         </tr>
						      </thead>
						      <tbody>
						         <tr>
						            <th scope="row"> <code>data<sup>*</sup></code> </th>
						            <td><p>
						            	Type : Object <br />
						            	Required or Optional : Required <br />
										Description : Data for the Carousel
										</p></td>
						         </tr>
						         <tr>
						            <th scope="row"> <code>direction</code> </th>
						            <td>
							            <p>
							            	Options : "left || right" <br />
							            	Type : string <br />
											Default : left <br />
											Description : Carousel direction.
										</p>
						            </td>
						         </tr>
						         <tr>
						            <th scope="row"> <code>autoPlay</code> </th>
						            <td><p>
						            	Type : boolean <br />
										Default : true <br />
										Description : Enables Autoplay
										</p>
									</td>
						         </tr>
						         <tr>
						            <th scope="row"> <code>autoPlayInterval</code> </th>
						            <td>
						            <p>
						            	Type : number <br />
										Default : 3000ms <br />
										Description : Autoplay Interval Time in milisecond
										</p>
						            </td>
						         </tr>
						         <tr>
						            <th scope="row"> <code>infiniteScroll</code> </th>
						            <td>
						            	<p>
						            	Type : boolean <br />
										Default : true <br />
										Description : Enables infinite scroll.
										</p>
						            </td>
						         </tr>
						         <tr>
						            <th scope="row"> <code>showArrows</code> </th>
						            <td>
							            <p>
							            	Type : boolean <br />
											Default : true <br />
											Description : Show/Hide arrows.
										</p>
						            </td>
						         </tr>
						      </tbody>
						   </table>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

React.render(
	<App />,
	document.body
);
