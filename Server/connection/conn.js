const mongoose=require('mongoose');

const Connect=async()=>{
    await mongoose.connect('mongodb://localhost:27017').then((res,err)=>{
        if(res)
        {
            console.log("Connected succuessfully!");
        }
        if(err)
        {
            console.log(err);
        }
    })
};

Connect();