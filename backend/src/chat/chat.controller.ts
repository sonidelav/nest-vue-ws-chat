import {Controller, Get} from '@nestjs/common';
import {ChatGateway} from "./chat.gateway";

@Controller('api/chat')
export class ChatController {
    constructor(
        private readonly chatGateway: ChatGateway
    ) {}

    @Get('/')
    async broadcastToClients() {
        this.chatGateway.server.emit('triggerRest', null);
        return 1;
    }
}
