import axios from "axios";

const instance = axios.create({
        withCredentials: true,
        headers: { "API-KEY": "86207458-6c95-45b7-908a-b07673f04023" }
})

export const usersAPI = {

        getUsers(currentPage = 1, pageSize = 10) {
                return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
                ).then(response => {
                        return response.data
                })
        },

        findUsers(nameString, currentPage = 1, pageSize = 10) {
                return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}&term=${nameString}`
                ).then(response => {
                        return response.data
                })
        },
        
        myAuthInfo() {
                debugger
                return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`
                ).then(response => {
                        return response.data
                })
        },

        myData(userId) {
                debugger
                return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`
                ).then(response => {
                        return response.data
                })
        },
        
        deleteFollowingState(userId) {
                return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`
                ).then(response => {
                        return response.data
                });
        },
        
        postFollowingState(userId) {
                return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`
                ).then(response => {
                        return response.data
                });
        },

};

export const authAPI = {
        login(email, password, rememberMe = false) {
                debugger;
                return instance.post('https://social-network.samuraijs.com/api/1.0/auth/login', 
                { email, password, rememberMe })
        },

        logout() {
                return instance.delete('https://social-network.samuraijs.com/api/1.0/auth/login')
        }
}

export const dialogsAPI = {
        
        getAllDialogs() {
                return instance.get('https://social-network.samuraijs.com/api/1.0/dialogs'
                ).then(response => {
                        debugger
                        return response.data
                })
        },

        getAllMessages(userId, page, count) {
                return instance.get(`https://social-network.samuraijs.com/api/1.0/dialogs/${userId}/messages?page=${page}&count=${count}`
                ).then(response => {
                        debugger
                        return response.data
                })
        },

        sendMessage(userId, body) {
                return instance.post(`https://social-network.samuraijs.com/api/1.0/dialogs/${userId}/messages`,
                { body }).then(response => {
                        debugger
                        return response.data
                })
        },

        startChatting(userId) {
                return instance.put(`https://social-network.samuraijs.com/api/1.0/dialogs/${userId}`
                ).then(response => {
                        debugger
                        return response.data
                })
        },
}



