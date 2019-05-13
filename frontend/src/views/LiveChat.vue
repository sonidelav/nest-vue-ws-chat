<template>
    <div class="live-chat">
        <div class="row">
            <div class="col">
                <div class="cards">
                    <div class="card" v-for="(message, index) in Messages" :key="index">
                        <div class="card-body">
                            <h5 class="card-title">{{ message.username }}</h5>
                            <div class="card-text">{{ message.content }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <input type="text" class="form-control" placeholder="Enter Message..." v-model="messageContent" @keypress.enter="sendMessage">
            </div>
            <div class="col">
                <button type="button" class="btn btn-primary" @click.prevent="triggerFromRest">Trigger From REST</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Action, Getter, Mutation} from "vuex-class";

@Component({
    data: () => {
        return {
            messageContent: null
        }
    },
    methods: {
        sendMessage() {
            const msg = {
                username: this.Username,
                content: this.messageContent
            };
            this.$socket.emit('message', msg);
            this.addMessage(msg)
            this.messageContent = null;
        }
    }
})
export default class LiveChat extends Vue {
    @Getter('chat/Messages') Messages;
    @Getter('chat/Username') Username;
    @Mutation('chat/ADD_MESSAGE') addMessage;
    @Action('chatRest/triggerFromRest') triggerFromRest;
}
</script>
