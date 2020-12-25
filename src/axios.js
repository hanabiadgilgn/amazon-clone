import axios from 'axios'

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: 'https://us-central1-clone-885ce.cloudfunctions.net/api',
});

export default instance;


//http://localhost:5001/clone-885ce/us-central1/api