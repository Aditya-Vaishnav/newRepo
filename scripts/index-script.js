var Comment = React.createClass({
	getInitialState: function(){
		return{
			comment_text: "you can't change!! Ha Ha",
			removed : false
		}
	},
	edit: function(){
	
	document.getElementById("div1").style.display = "block";
	},
	remove: function(){
		if (!this.state.removed) {
			this.setState({
			removed :true
		});
			alert("Ha Ha ....Removed your comment\nState has been set to True");
		}
	},
	do_comment: function(){
		this.setState({
			comment_text: document.getElementById("inputComment").value
			});
		document.getElementById("div1").style.display ="none"
		document.getElementById("inputComment").value=""
	},
	render: function(){
		return (
				<div>
					<h4>{this.state.comment_text}</h4>
					<button onClick={this.edit}>	Edit	</button>
					<button onClick={this.remove}>	Remove	</button>
					<div id="div1" className="div1">
					<input type="textarea" id="inputComment" />
					<button onClick={this.do_comment}>Comment</button>
					</div>
				</div>
			);
	}
});


var CommentList = React.createClass({
	getInitialState: function(){
		return{
			comments : []
		}
	},
	render: function(){
		return(
			<div>
				<Comment/>
				<hr/>
				<button onClick={this.addComment}>New Comment</button>
			</div>
		);
	}
});


ReactDOM.render(
	<div>
		<CommentList />
	</div>,
	document.getElementById('exp')
);