import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (function(d, m){
      var kommunicateSettings = {
        "appId":"59b3aa93998a762e06346060ba95e809",
        "conversationTitle":"CONVERSATION"
      };
      var s = document.createElement("script");
      s.type = "text/javascript"; s.async = true;
      s.src = "https://api.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      (window as any).kommunicate = m; m._globals = kommunicateSettings;
    })(document, (window as any).kommunicate || {});
  }

}
