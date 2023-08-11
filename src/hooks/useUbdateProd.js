import baseUrl from '../Api/BaseUrl'

export const useUbdateData= async (url,params)=>{
    const config={
        headers:{ Authorization:`Bearer ${localStorage.getItem("token")}` }
    }
    const res = await baseUrl.put(url,params,config);
    return res ;
}
export const useUbdateDataWiteImage= async (url,params)=>{
    const config={
        headers:{"Content-Type":"multipart/form-data",
        Authorization:`Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseUrl.put(url,params,config);
    return res;
}