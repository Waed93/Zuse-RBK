import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
      select:'',
      post:'',
      type:'',
      content:''
     
    };

    this.submit=this.submit.bind(this);
    this.onChange=this.onChange.bind(this);
    this.addsuggest=this.addsuggest.bind(this);
}

    onChange (e) {
    this.setState({
       [e.target.name]: e.target.value 
        });
  }

  submit(select,post) {
    //console.log(select,post,this.props.name);
    $.ajax({ 
      type:'POST',
      url: '/Profile',
      data:{
        select:select,
        post:post,
        name:this.props.name
      },
      success: (data) => {
        alert(data)
      },
    });
  }

addsuggest(type,content) {
    //console.log(select,post,this.props.name);
    $.ajax({ 
      type:'POST',
      url: '/Suggest',
      data:{
        type:type,
        content:content,
        name:this.props.name
      },
      success: (data) => {
        alert(data)
      },
    });
  }

   



render(){
   return (
    <div>
    <h1>add extra</h1>
<select id="lang" onChange={this.onChange} value={this.state.select} name="select">
  <option value="plastic">plastic</option>
  <option value="clothes">clothes</option>
  <option value="wood">wood</option>
  <option value="iron">iron</option>
       </select>
  
  <textarea name="post" placeholder="post" value={this.state.post} onChange={this.onChange} rows="4" cols="50">
  </textarea>
     
  <button onClick={()=> this.submit(this.state.select,this.state.post)}>post</button>
  <h1>suggest</h1>
  <select id="lang" onChange={this.onChange} value={this.state.type} name="type">
  <option value="plastic">plastic</option>
  <option value="clothes">clothes</option>
  <option value="wood">wood</option>
  <option value="iron">iron</option>
       </select>
  
  <textarea name="content" placeholder="content" value={this.state.content} onChange={this.onChange} rows="4" cols="50">
  </textarea>
     
  <button onClick={()=> this.addsuggest(this.state.type,this.state.content)}>suggest</button>
  </div>
  )

 }
}


export default Profile;







