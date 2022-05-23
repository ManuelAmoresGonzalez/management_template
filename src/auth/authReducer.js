import { types } from '../types/types';

// const state = {
//     email: 'man@gmail.com',
//     password: 'manito',
//     logged: true
// }

// const loginAction = {
//     type:  types.login,
//     payload: {
//         email: 'man@gmail.com',
//         password: 'man'
//     }
 
// }

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }
    
        default:
            return state;
    }


}