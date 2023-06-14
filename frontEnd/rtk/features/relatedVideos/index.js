const {createSlice}=require('@reduxjs/toolkit');
const fetchRelatedVideos=require('./Async')

const initialState={
    loading:false,
    lists:[],
    error:''
}


const relatedVideoSlice=createSlice({
    name:'relatedVideos',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRelatedVideos.pending,(state,action)=>{
            state.loading=true;
            state.lists=[];
            state.error=''
        });
        builder.addCase(fetchRelatedVideos.fulfilled,(state,action)=>{
            state.loading=false;
            //console.log("With Out SORT: ",action.payload)
            state.lists=action.payload.length?action.payload.sort((a,b)=>{
                return parseFloat(b.views)-parseFloat(a.views);
            }):[];
            state.error=''
        });
        builder.addCase(fetchRelatedVideos.rejected,(state,action)=>{
            state.loading=false;
            state.lists=[];
            state.error=action.error.message
        })
    }
})

module.exports=relatedVideoSlice.reducer;