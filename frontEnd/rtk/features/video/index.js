const {createSlice}=require('@reduxjs/toolkit');
const fetchVideos=require('./Async');


const initialState={
    loading:false,
    videos:[],
    error:''
}


const videoSlice=createSlice({
    name:'video',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchVideos.pending,(state,action)=>{
            state.loading=true;
            state.videos=[];
            state.error=''
        });
        builder.addCase(fetchVideos.fulfilled,(state,action)=>{
            state.pending=false;
            state.videos=action.payload;
            state.error=''
        });
        builder.addCase(fetchVideos.rejected,(state,action)=>{
            state.pending=false;
            state.videos=[];
            state.error=action.error.message
        })
    }
})

module.exports=videoSlice.reducer;
