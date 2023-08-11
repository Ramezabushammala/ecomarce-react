import baseUrl from '../Api/BaseUrl'

export const useGetData= async (url,params)=>{
    const res = await baseUrl.get(url,params);
    return res.data ;
}


// get data and token
export const useGetDataToken= async (url)=>{
    const config ={
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
          }
}
    const res = await baseUrl.get(url,config);
    return res.data ;

}
//post accept 3 parmetar but get two parmetar