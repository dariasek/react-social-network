import { getUsers as getUsersApi, followUser, unfollowUser } from '../api/api'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
    users: [
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
    followingInProgress: [],
    fake: 10,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FAKE":
            return ({
                ...state,
                fake: state.fake + 1
            })
        case FOLLOW:
            return ({
                ...state,
                users: state.users.map(user => {
                    return user.id === action.userId ? { ...user, followed: true } : user;
                })
            })
        case UNFOLLOW:
            return ({
                ...state,
                users: state.users.map(user => {
                    return user.id === action.userId ? { ...user, followed: false } : user;
                })
            })
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return ({
                ...state,
                currentPage: action.currentPage
            })
        case SET_TOTAL_USERS_COUNT:
            return ({
                ...state,
                totalUsersCount: action.totalUsersCount
            })
        case TOGGLE_IS_FETCHING:
            return ({
                ...state,
                isFetching: action.isFetching
            })
        case TOGGLE_FOLLOWING_PROGRESS:
            return ({
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId)
            })
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId });

export const requestUsers = (currentPage, pageSize) => {
     return ((dispatch) => {
        dispatch(toggleIsFetching(true));

        getUsersApi(currentPage, pageSize).then(
            (Response) => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(Response.items));
                dispatch(setTotalUsersCount(Response.totalCount));
            }
        );
    })
}

export const follow = (userId) => {
    return (
        (dispatch) => {
            dispatch(toggleFollowingProgress(true, userId));
            followUser(userId).then((Response) => {
                if (Response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
        }
    )
}

export const unfollow = (userId) => {
    return (
        (dispatch) => {
            dispatch(toggleFollowingProgress(true, userId));
            unfollowUser(userId).then((Response) => {
                if (Response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
        }
    )
}

export default usersReducer;