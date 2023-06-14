const {createAsyncThunk}=require('@reduxjs/toolkit');
const fetch=require('node-fetch')


const fetchRelatedVideos=createAsyncThunk(
    'relatedVideos/fetchRelatedVideos',
    async(queries)=>{
        const queryStrings=queries.reduce((queryString,currentTag)=>{
            if(queryString){
                queryString+=`&tags_like=${currentTag}`
            }else if(!queryString){
                queryString+=`tags_like=${currentTag}`
            }
            return queryString;
        },"");
        const urls='http://localhost:9000/videos?'+queryStrings;
        //console.log(urls)
        const response=await fetch(urls);

        const videos=await response.json();

        return videos;
    }
)

module.exports=fetchRelatedVideos;