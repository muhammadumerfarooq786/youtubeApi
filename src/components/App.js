import React from 'react';
import SearchBar from './searchBar';
import Youtube from '../apis/youtube';
import VideoList from './videoList';
import VideoDetail from './videoDetail';
  // {this.state.videos.length} videos

class App extends React.Component{
  state={videos:[],selectedVideo:null};


  componentDidMount(){
    this.onDataSubmit("Allah");
  };

  onDataSubmit = async (term) => {
    // console.log(term);
    const response=await Youtube.get('/search',{
      params:{
        q:term
      }
    });

    this.setState({
      videos:response.data.items,
      selectedVideo:response.data.items[0]
    });
    // console.log(response.data.items);

  };

  onVideoSelect=(video)=>{
      this.setState({selectedVideo:video});

  };

  render(){
    return (
      <div className="ui container">
      <SearchBar onFormSubmit={this.onDataSubmit}/>

      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail video={this.state.selectedVideo}/>
            </div>

        <div className="six wide column">
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
        </div>

      </div>

      </div>
    );
  }
}

export default App;
