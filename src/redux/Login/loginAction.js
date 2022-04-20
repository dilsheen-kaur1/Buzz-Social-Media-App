// export const isLoggedIn =()=>{
//     return{
//         type: "ISLOGGEDIN",
//     }
// }

export const setProfilePhoto =(profilePhoto)=>{
    return{
        type: "SETPROFILEPHOTO",
        profilePhoto: profilePhoto
    }
}

export const loginScucess =(loggedIn,userId,firstName,lastName,gender,designation,myWebsite,birthday,city,stateAddress,pinCode,isAdmin)=>{
    return{
        type: "LOGIN_SUCCESS",
        loggedIn: loggedIn,
        userId: userId,
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        designation: designation,
        myWebsite: myWebsite,
        birthday: birthday,
        city: city,
        stateAddress: stateAddress,
        pinCode: pinCode,
        isAdmin: isAdmin,    
    }
}

