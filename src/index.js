// Create a new component. Should produce some HTML
import React from 'react';
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import API_KEY from './config';


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            console.log(videos);
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// Take component's generated HTML and put on the page
ReactDOM.render(<App />, document.querySelector('.container'));
// ReactDOM.render(App(), document.querySelector('.container'));
