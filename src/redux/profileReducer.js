import { getProfile, getStatus, updateStatus } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
      { id: 1, post: "Hi! How r u?", likesCount: "25" },
      { id: 2, post: "My first post!!!", likesCount: "30" },
      { id: 3, post: "", likesCount: "5" },
      { id: 4, post: "", likesCount: "10" },
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5, post:action.newPostText, likesCount:0,
            };
            return {
                ...state,
                posts:[...state.posts,newPost],
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter( post => post.id != action.postId)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST,
    newPostText
})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})
export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
})

export const getUserProfile = (userId) => {
    return( dispatch => {
        getProfile(userId).then((Response) => {
            dispatch(setUserProfile(Response.data))
        });
    })
}

export const getUserStatus = (userId) => {
    return( dispatch => {
        getStatus(userId).then((Response) => {
            dispatch(setStatus(Response.data))
        });
    })
}

export const updateUserStatus = (status) => {
    return( dispatch => {
        updateStatus(status).then((Response) => {
            if (Response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        });
    })
}

export default profileReducer;