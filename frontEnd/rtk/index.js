const store=require('./app');
const fetchVideos=require('./features/video/Async');
const fetchRelatedVideos=require('./features/relatedVideos/Async')

store.dispatch(fetchVideos())
    .unwrap()
    .then((videos)=>{
        const queryStrings=videos.tags;

        store.dispatch(fetchRelatedVideos(queryStrings))

    })
    .catch((error)=>{

    })
;