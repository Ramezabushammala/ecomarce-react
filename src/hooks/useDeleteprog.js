
import baseUrl from '../Api/BaseUrl'

export const usedeletData= async (url,params)=>{
    const res = await baseUrl.delete(url,params);
    return res.data ;
}

export const usedeletDataToken= async (url)=>{
    const config ={
        headers:{Authorization:`Bearer ${localStorage.getItem("token")}`
    }
}
    const res = await baseUrl.delete(url,config);
    return res.data ;
}