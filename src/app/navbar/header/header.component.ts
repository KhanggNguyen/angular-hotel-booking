import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }
}
