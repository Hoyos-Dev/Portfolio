import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Esperar 10 segundos y luego hacer scroll a la segunda sección
    setTimeout(() => {
      const section2 = document.getElementById('section2');
      if (section2) {
        section2.scrollIntoView({ behavior: 'smooth' });
      }
    }, 2000); //Tiempo vista dos
  }

}