import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token = environment.dialogFlow.StreetsyBot;
  readonly client = new ApiAiClient({accessToken: this.token});
  constructor() { }
}
