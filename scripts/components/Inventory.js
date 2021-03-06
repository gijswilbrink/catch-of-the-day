/**
 * Import framework
 */
import React from 'react';

/**
 * Import components
 */
import AddFishForm from './AddFishForm';

/**
 * Inventory 
 * @rendertag  <Inventory />
 */
var Inventory = React.createClass({

	propTypes: {
 		fishes: React.PropTypes.object.isRequired,
 		linkState: React.PropTypes.func.isRequired,
 		loadSamples: React.PropTypes.func.isRequired,
 		removeFish: React.PropTypes.func.isRequired,
 		addFishToMenu: React.PropTypes.func.isRequired
 	},

 	renderInventory: function(key){
 		// init
 		var oFish = this.props.fishes[key];
 		var linkState = this.props.linkState;

 		return (
 			<div className="fish-edit" key={key}>
 				<input type="text" valueLink={linkState('fishes.'+ key +'.name')} />
		        <input type="text" valueLink={linkState('fishes.'+ key +'.price')}  />
		        <select  valueLink={linkState('fishes.'+ key +'.status')}>
		          <option value="available">Fresh!</option>
		          <option value="unavailable">Sold Out!</option>
		        </select>
		        <textarea type="text" valueLink={linkState('fishes.'+ key +'.desc')} ></textarea>
		        <input type="text" valueLink={linkState('fishes.'+ key +'.image')}  />
	        	<button onClick={this.props.removeFish.bind(null, key)}>Remove fish</button>
	     
 			</div>
 		)
 	},
 	render: function() {
 		return (
 			<div>
 				<h2>Inventory</h2>

 				{Object.keys(this.props.fishes).map(this.renderInventory)}
 				
 				<AddFishForm {...this.props} />
 				<button onClick={this.props.loadSamples}>Load sample fishes</button>
 			</div>
 		);
 	}
});

/**
 * Export
 */
export default Inventory;