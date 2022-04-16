const isAdminReducer = (state=false, action) =>{
    switch (action.type) {
        case 'ISLOGGED':
            return true
        case 'ISLOGGEDOUT':
            return false
        default:
            return state;
    }
}
export default isAdminReducer