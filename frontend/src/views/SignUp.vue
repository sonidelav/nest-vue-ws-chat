<template>
    <div class="row">
        <div class="col">
            <form class="form" method="post" @submit.prevent="registerNickname">
                <div class="form-group">
                    <label>Nickname</label>
                    <input type="text" v-model="username" placeholder="Enter a nickname..." class="form-control">
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Start Chat</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Mutation } from "vuex-class";

@Component({
    data: () => {
        return {
            username: null
        }
    },
    methods: {
        registerNickname() {
            this.setUsername(this.username);
            this.$socket.emit('join', this.username);
        }
    }
})
export default class SignUp extends Vue {
    @Mutation('chat/SET_USERNAME') setUsername;
}
</script>
