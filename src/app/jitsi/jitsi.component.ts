import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { JitsiService } from './../services/jitsi.service';

@Component({
  selector: 'app-jitsi',
  templateUrl: './jitsi.component.html',
  styleUrls: ['./jitsi.component.css'],
})
export class JitsiComponent implements OnInit {
  constructor(private router: Router, private jitsiService: JitsiService) {}
  ngOnInit(): void {
    this.jitsiService.moveRoom(this.jitsiService.namePrincipalRoom, true);
  }

  executeCommand(data) {
    console.log(
      'this.jitsiService.getParticipants():',
      this.jitsiService.getParticipants()
    );

    this.jitsiService.api.executeCommand(
      'sendEndpointTextMessage',
      this.jitsiService.getParticipants(),
      'mover a principal'
    );
  }
}
