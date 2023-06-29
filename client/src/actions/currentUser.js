export const setCurrentUser = (data) =>{
    return {
        type : 'FETCH CURRENT USER',
        payload: data
    }
}