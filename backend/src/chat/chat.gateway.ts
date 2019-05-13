import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import { Server } from "socket.io";
import {Injectable} from "@nestjs/common";

@Injectable()
@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  server: Server;

  users: number = 0;


  @SubscribeMessage('message')
  async handleMessage(client, message) {
    console.log('Broadcast Message');
    client.broadcast.emit('message', message);
  }

  @SubscribeMessage('join')
  async handleJoin(client, payload) {
    console.log('User '+payload+' Joined');
    client.broadcast.emit('join', payload);
  }


  async handleConnection() {
    console.log('New Connection on Chat');
    this.users++;
    this.server.emit('users', this.users);
  }

  async handleDisconnect() {
    console.log('Disconnection on Chat');
    this.users--;
    this.server.emit('users', this.users);
  }

}
