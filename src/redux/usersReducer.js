const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users:[
        // {id:1, photoUrl:'https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png',
        //     followed: false, fullname:'Dmitry', status:'Yo', location:{city:'Minsk', country: 'Belarus'}},
        // {id:2, photoUrl:'https://banner2.cleanpng.com/20180705/kwf/kisspng-computer-icons-icon-design-user-5b3e529cdf3df9.8745700215308110369144.jpg',
        //     followed: true, fullname:'Andy', status:'It`s my new status', location:{city:'Kyiv', country: 'Ukraine'}},
        // {id:3, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsg_cVSBekHOBX2bpBcoc4o-XUjbnsGyNe1Q&usqp=CAU',
        //     followed: false, fullname:'Mary', status:'Hey!', location:{city:'London', country: 'GB'}},
    ],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW:
            return ({
                ...state,
                users: state.users.map( user => {
                    return user.id === action.userId ? {...user, followed:true} : user; 
                })
            })
        case UNFOLLOW:
            return ({
                ...state,
                users: state.users.map( user => {
                    return user.id === action.userId ? {...user, followed:false} : user; 
                })
            })
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return({
             ...state,
             currentPage:action.currentPage   
            })
        case SET_TOTAL_USERS_COUNT:
            return({
                ...state,
                totalUsersCount: action.totalUsersCount
            })
        case TOGGLE_IS_FETCHING:
            return({
                ...state,
                isFetching: action.isFetching
            })
        default:
            return state;
    }
}

export const follow = (userId) => ({type:FOLLOW, userId});
export const unfollow = (userId) => ({type:UNFOLLOW, userId});
export const setUsers = (users) => ({type:SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type:SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;