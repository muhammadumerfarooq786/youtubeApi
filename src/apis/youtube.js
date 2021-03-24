import Axios from 'axios';

const KEY="AIzaSyCRjuKjGkFR9CY_G4I6gNUOZpppEDPYrvs";


export default Axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    // type:'video',
    maxResults:5,
    key:KEY
    }


});
