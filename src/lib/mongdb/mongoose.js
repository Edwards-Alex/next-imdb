import mongoose from "mongoose";

let initialized = false;
export const connect = async() => {
    mongoose.set('strictQuery',true);
    if(initialized){
        console.log('MongoDB already connected');
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:'next-imdb-clerk',
            useNewUrlParser:true,
            useNewUnfiedTopology:true,
        });
        initialized=true,
        console.log('MongoDB connected');
    }catch(error){
        console.log('MongoDB connect error',error);
    }
}