const { exec } = require("child_process");

const containerService=require("./containerService");

const executor = async (lang, code) => {
  if (lang == "js") {
    let res= await executeJs(code);
    return res;
  }
};

const executeJs =(code) => {

    return new Promise( async(resolve,reject)=>{
        let logs="";
        try{
            let container_id = await containerService.runContainer({
                lang:"js",
                code:code,
                containerImage:"localhost/js_executor_image:latest"
            });
    
            setTimeout(async ()=>{
                let isStoped= await containerService.stopContainer(container_id);
                logs=await containerService.getLogsContainer(container_id);
    
                let isRemoved =await containerService.removeContainer(container_id);
                resolve(logs);
    
            },1000);
    
        }
        catch (error){
            console.log(error);
            reject("");
        }
    })
   
};

module.exports = executor;
