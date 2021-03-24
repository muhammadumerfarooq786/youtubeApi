import './style.css';
import React from 'react';


class searchBar extends React.Component{
  state={searchtext:""};

  onSearchTextChange = (event) => {
    // console.log(event.target.value);
    this.setState({searchtext:event.target.value})
  };
  onSubmission = (e) =>{
    e.preventDefault();
    this.props.onFormSubmit(this.state.searchtext);
  };

  render(){
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmission}>
          <div className="field">
            <label>Search Video : </label>
            <input type="text" value={this.state.searchtext} onChange={this.onSearchTextChange}></input>
          </div>

        </form>
      </div>
    );
  }
}
export default searchBar;
