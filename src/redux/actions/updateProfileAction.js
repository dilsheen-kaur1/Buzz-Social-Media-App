export const setProfilePhoto =(newUrl)=>{
    return{
        type: "SETPROFILEPHOTO",
        photo: newUrl
    }
}