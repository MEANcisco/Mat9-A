import { AuthService } from 'src/app/servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  title = 'cloudsSorage';
  selectedFile: File = null;
  img;
  fb;
  downloadURL: Observable<string>;
  constructor( private storage: AngularFireStorage,
               private as: AuthService, private db: AngularFirestore,
               public dialog: MatDialogRef<UploadComponent>) {}
  ngOnInit() {}
  onFileSelected(event) {
    const n = this.as.UsuarioActual.user.username;
    const file = event.target.files[0];
    const filePath = `user/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`user/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
            this.img = url;
            this.db.collection('user').doc(this.as.UsuarioActual.user.username).collection('avatar').add({avatar: url});

          });
        })
      )
      .subscribe(url => {
        if (url) {
          // console.log(url);
        }
      });
  }

}
