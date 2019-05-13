import router from '@/router';

/**
 * Chat Vuex Module
 */
export default {
    namespaced: true,

    state: {
        username: null,
        connected: false,
        users: 0,
        messages: []
    },

    getters: {
        Messages(state: any) {
            return state.messages;
        },
        Username(state: any) {
            return state.username;
        }
    },

    mutations: {
        ADD_MESSAGE(state: any, message: any) {
            state.messages.push(message);
        },
        UPDATE_USERS(state: any, users: number) {
            state.users = users;
        },
        SET_USERNAME(state: any, nickname: any) {
            state.username = nickname;
            router.replace({name: 'live-chat'});
        },
        SET_CONNECTED(state: any, flag: boolean) {
            state.connected = flag;
        }
    },

    actions: {
        'SOCKET_message'({ commit }: any, message: any) {
            commit('ADD_MESSAGE', message);
        },
        'SOCKET_users'({ commit }: any, users: number) {
            commit('UPDATE_USERS', users);
        },
        'SOCKET_join'({ commit }: any, nickname: string) {
            commit('ADD_MESSAGE', {
                username: nickname,
                content: 'Joined...'
            })
        },
        'SOCKET_triggerRest'({ commit }: any) {
            commit('ADD_MESSAGE', {
                username: 'REST',
                content: 'Trigger by REST API'
            })
        },
        'SOCKET_connect'({ commit }: any) {
            commit('SET_CONNECTED', true);
        },
        'SOCKET_disconnect'({ commit }: any) {
            commit('SET_CONNECTED', false);
        },
        'SOCKET_connect_error'({ commit }: any) {
            commit('SET_CONNECTED', false);
        }
    }
}
