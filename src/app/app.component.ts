import { Component, OnInit } from '@angular/core';
import { SidebarService } from './servicios/sidebar.service';
import { AuthService } from './servicios/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { LoginComponent } from './dialogos/login/login.component';
import { RegistroComponent } from './dialogos/registro/registro.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { PresenceService } from './presence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faAlignLeft = faSlidersH;

  constructor(private sb: SidebarService,
              public as: AuthService,
              public dialog: MatDialog,
              private sc: SidebarComponent,
              public presence: PresenceService) {

  }

  title = 'mat9';


  ngOnInit() {
  }
  sideBact() {
    this.sb.open('sidebar-1');
  }
clilog(num) {
  if (num === 1) {
    this.sb.close('sidebar-1');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'myapp-no-padding-dialog';
    this.dialog.open(LoginComponent, dialogConfig);
  } else {
    if (num === 2) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      this.sb.close('sidebar-1');
      this.dialog.open(RegistroComponent, dialogConfig);

    }
  }

}

logoff() {
  localStorage.removeItem('actualusr');
  this.as.avatar();
}
  sideCerr() {
    this.sb.close('sidebar-1');
  }
}
