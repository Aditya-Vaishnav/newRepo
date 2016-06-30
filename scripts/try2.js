var Parent = React.createClass({
	getInitialState: function(){
		return{
			parent_state: "parent_value"
		}
	},
	componentWillMount: function(){
		console.log("mounting Parent");
	},
	componentDidMount: function(){
		console.log("mounted Parent");
	},
	functionForChild: function(data){
		console.log("called in parent : "+data);
		return data
	},

	render:function(){
		return <Child mProp={this.state.parent_state} prop2={this.state.parent_state+"2"} parentFunction={this.functionForChild.bind(this)}/>
	}
});

var Child = React.createClass({
	getInitialState: function(){
		return{
			child_state: "child_value"
		}
	},
	componentWillMount: function(){
		console.log("mounting Child with state - "+this.state.child_state+ "and Props - "+ this.props.mProp+" and prop2 - "+this.props.prop2);
	},
	componentDidMount: function(){
		console.log("componentDidMount with state - "+this.state.child_state);
		this.props.parentFunction(this.state.child_state);
	},
	
	render:function(){
		return <h4>I am the Child with state {this.state.child_state} and i am {this.props.parentFunction("hey Ya!!")}</h4>  
	}
});
 
ReactDOM.render(
	<Parent/>,
	document.getElementById('exp')
);