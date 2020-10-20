import Axios from "axios";

const baseURL = 'https://social-network.samuraijs.com/api/1.0/'
const instance = Axios.create({
    withCredentials: true,
    baseURL: 'ttps://social-network.samuraijs.com/api/1.0/',
    headers: {
        'api-key': "77227813-b80d-4f26-a9b8-8cf334a2b3fe"
    }
})
// export const usersAPI = {
//     unfollowUser(id){
//         return (
//             instance.delete(
//                 `follow/${id}`
//               )
//         )
//     }
// }

export const getUsers = (currentPage, pageSize) => {
    return Axios.get(`${baseURL}users?page=${currentPage}&count=${pageSize}`,
        { withCredentials: true }
    ).then(
        Response => Response.data
    )
}

export const unfollowUser = (id) => {
    return (
        Axios.delete(
            `${baseURL}follow/${id}`,
            {
                withCredentials: true,
                headers: {
                    'api-key': "77227813-b80d-4f26-a9b8-8cf334a2b3fe"
                }
            }
        )
    )
}

export const followUser = (id) => {
    return (
        Axios.post(
            `${baseURL}follow/${id}`,
            {}, {
            withCredentials: true,
            headers: {
                'api-key': "77227813-b80d-4f26-a9b8-8cf334a2b3fe"
            }
        }
        )
    )
}

export const me = () => {
    return (
        Axios.get(
            `${baseURL}auth/me`,
            { withCredentials: true }
        ).then(Response => Response.data)
    )
}

export const login = (email, password, rememberMe = false) => {
    return(
        Axios.post(
            `${baseURL}auth/login`, { email, password, rememberMe },
            {
                withCredentials: true,
                headers: {
                    'api-key': "77227813-b80d-4f26-a9b8-8cf334a2b3fe"
                }
            }
        )
    )
}

export const logout = () => {
    return(
        Axios.delete(
            `${baseURL}auth/login`,
            {
                withCredentials: true,
                headers: {
                    'api-key': "77227813-b80d-4f26-a9b8-8cf334a2b3fe"
                }
            }
        )
    )
}

export const getProfile = (userId) => {
    return Axios.get(`${baseURL}profile/${userId}`);
}

export const getStatus = (userId) => {
    return Axios.get(`${baseURL}profile/status/${userId}`);
}

export const updateStatus = (status) => {
    return Axios.put(
        `${baseURL}profile/status/`,
        {
            status: status
        },
        {
            withCredentials: true,
            headers: {
                'api-key': "77227813-b80d-4f26-a9b8-8cf334a2b3fe"
            }
        }
    );
}