const initialState = {
    profilePhoto :'https://res.cloudinary.com/di4mjqigh/image/upload/v1650441396/blank-profile-picture_oof4j6.png'
}
const updateProfileReducer= (state=initialState, action) =>{
    switch (action.type) {
        case 'SETPROFILEPHOTO':
            return {
                ...state,
                profilePhoto: action.photo
            }

        default: return state;
        
    }
}

export default updateProfileReducer