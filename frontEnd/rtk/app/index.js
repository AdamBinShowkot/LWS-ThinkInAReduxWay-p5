const {configureStore}=require('@reduxjs/toolkit');
const {createLogger}=require('redux-logger');
const videoSlice=require('../features/video');
const relatedVideoSlice=require('../features/relatedVideos');


const logger=createLogger()

const store=configureStore({
    reducer:{
        video:videoSlice,
        relatedVideos:relatedVideoSlice
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(logger)
    }
})

module.exports=store
