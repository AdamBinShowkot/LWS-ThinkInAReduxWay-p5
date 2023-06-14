const {createAsyncThunk}=require('@reduxjs/toolkit');
const fetch=require('node-fetch')

const fetchVideos=createAsyncThunk(
    'videos/fetchVideos',
    async()=>{
        const response=await fetch('http://localhost:9000/videos');

        const videos=await response.json();

        return videos;
    }
)

module.exports=fetchVideos

