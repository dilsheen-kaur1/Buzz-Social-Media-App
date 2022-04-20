const initialState ={
    loggedIn: false,
    profilePhoto :'https://res.cloudinary.com/di4mjqigh/image/upload/v1650441396/blank-profile-picture_oof4j6.png',
    userId:'',
    firstName:'',
    lastName:'',
    gender:'female',
    isAdmin:false,
    designation:'',
    myWebsite:'',
    birthday:'',
    city:'',
    stateAddress:'Delhi',
    pinCode: 0
}

const loginReducer = (state = initialState,action)=>{
    switch(action.type){
        // case 'ISLOGGEDIN':
        //     return{
        //         ...state,
        //         loggedIn:true
        //     }
        case 'SETPROFILEPHOTO':
            return {
                ...state, 
                profilePhoto: action.profilePhoto
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state, 
                loggedIn: action.loggedIn,
                userId:action.userId,
                firstName: action.firstName,
                lastName: action.lastName,
                gender: action.gender,
                designation: action.designation,
                myWebsite: action.myWebsite,
                birthday: action.birthday,
                city: action.city,
                stateAddress: action.stateAddress,
                pinCode: action.pinCode,
                isAdmin: action.isAdmin,             
            }

        default: return state;
    }
}

export default loginReducer