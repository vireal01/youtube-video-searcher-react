import axios from 'axios'

const KEY = 'AIzaSyDiPlAVDpF8HyY7qHhw-4UeoW0iAUp5120'

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY,
        type: 'video',
        q: 'surfing'
    }
})