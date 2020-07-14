import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation, OnChanges } from '@angular/core';
import videojs from 'video.js';
import { ResourceLoader } from '@angular/compiler';
import { interval } from 'rxjs';
import { EstadoService } from '../../servicios/estado.service';
import { AuthService } from '../../servicios/auth.service';

let cacheo = {
  tiempoact: 0,
  dura: 0,
  inactividad: 0,
  lpr: 0,
  lvolu: 0,
  src: ''
}
@Component({
  selector: 'app-vjs-player',
  template: `
    <video #target class="video-js" controls muted playsinline preload="none"></video>
  `,
  styleUrls: [
    './vjs-player.component.css'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class VjsPlayerComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('target', {static: true}) target: ElementRef;
  // see options: https://github.com/videojs/video.js/blob/mastertutorial-options.html
  @Input() options: {
      fluid: boolean,
      aspectRatio: string,
      autoplay: boolean,
      sources: {
          src: string,
          type: string,
      }[],
  };
  player: videojs.Player;
  cacheact: any;
  usuario: any;
  constructor(
    private aut: AuthService,
    private est: EstadoService,
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    this.usuario = JSON.parse(this.aut.UsuarioActual);
    console.log(this.usuario.user.id);

    // instantiate Video.js
    const tim = interval(10000);

    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      // console.log('onPlayerReady', this);
      this.currentTime(0
      );
      this.play();

      tim.subscribe(
        data => {
 console.log(this.cache_) ;
 localStorage.setItem('actcache', JSON.stringify(this.cache_))
        }
      )
    });
  }


ngOnChanges(){
  this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
    console.log('onPlayerReady', this);

  });
}
  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }
}
