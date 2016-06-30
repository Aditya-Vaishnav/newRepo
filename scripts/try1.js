var Comment = React.createClass({
	getInitialState: function(){
		return{
			comment_text : "Demo Comment",
			removed : false,
			isEditing : false
		}
	},
	edit: function(){
		this.setState({
			isEditing : true
		})
	},
	remove: function(){
		if (!this.state.removed) {
			this.setState({
			removed :true
		});
			alert("Ha Ha ....Removed your comment\nState has been set to True");
		}
	},
	setComment: function(value) {
    this.setState({
  	  comment_text: value
    });
   },
  hideBox: function(){
  	this.setState({
  		isEditing:false
  	});
  },

	render: function(){
		return (
			<div>
				<h4>{this.state.comment_text}</h4>
				<button onClick={this.edit}>Edit</button>
				<button onClick={this.remove}>	Remove	</button>
				{this.state.isEditing ?<EditBox myFunc={this.setComment.bind(this)} hide={this.hideBox.bind(this)}/>
					:""}

			</div>
		);
	}
});

var EditBox = React.createClass({
  propTypes: {
    myFunc:   React.PropTypes.func
  },

	do_comment: function(){
		var newComment = ReactDOM.findDOMNode(this.refs.editInputElement).value;
		this.props.myFunc(newComment)
		this.props.hide()
	},
	render:function(){
		return(
			<div  className="div1">
				<input type="textarea" ref="editInputElement" />
				<button onClick={this.do_comment}>Comment</button>
			</div>
		);
	}
});

var CommentList = React.createClass({
	getInitialState(){
		return{
			list : [<Comment/>]
		}
	},

	addComment: function(){
		console.log("Add Comment Running")
		var newList = this.state.list.slice();    
    newList.push(<Comment/>);   
    this.setState({list:newList})

	},

	render:function(){
		return(
			<div>
				{
					this.state.list.map(function(comment,index){
						return <div><Comment/><hr/></div>;	
				})}
				
				<button onClick={this.addComment}>Add Comment</button>
			</div>
		);
	}
});


ReactDOM.render(
	<CommentList/>,
	document.getElementById('exp')
);