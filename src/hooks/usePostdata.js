import baseUrl from '../Api/BaseUrl'

export const usePostData= async (url,params)=>{
    
    const config={
        headers:{ Authorization:`Bearer ${localStorage.getItem("token")}` }
    }

    const res = await baseUrl.post(url,params,config);
    return res ;
}
export const usePostDataWiteImage= async (url,params)=>{
    const config={
        headers:{"Content-Type":"multipart/form-data",
        Authorization:`Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseUrl.post(url,params,config);
    return res;
}
//post accept 3 parmetar but get two parmetar