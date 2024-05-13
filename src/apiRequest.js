
const apiRequest = async (url = '', optionObg = null, errMessage = null) =>{
    try{
        const response = await fetch(url,optionObg)

        if(!response.ok){
            throw Error("Please reload the App")
        }
    }catch(err){
        errMessage = err.Message;
    }finally{
        return errMessage;
    }

}


export default apiRequest;