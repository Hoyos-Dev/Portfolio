import { Component, OnInit } from '@angular/core';

interface Project {
  type: string;
  title: string;
  description: string;
  frontendUrl?: string;
  backendUrl?: string;
  technologies: string[];
  imageUrl?: string;
}

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {
  currentProjectIndex = 0;
  projects: Project[] = [
    {
      type: 'FULLSTACK',
      title: 'UI Elements',
      description: 'A component portal that works as a digital library, centralizing reusable web design and development elements. It helps maintain consistency, speeds up workflows, and supports scalable and efficient project development.',
      frontendUrl: '#',
      backendUrl: '#',
      technologies: ['Angular', 'FastApi', 'MySQL'],
      imageUrl: 'assets/Proyecto1.png'
    },
    {
      type: 'FULLSTACK',
      title: 'Giveaways',
      description: 'A customizable sweepstakes platform that allows you to create dynamic sweepstakes from lists of people, with simultaneous or individual sweepstakes options, custom backgrounds, and interactivity adaptable to any need.',
      frontendUrl: '#',
      backendUrl: '#',
      technologies: ['Angular', 'FastApi', 'MySQL'],
      imageUrl: 'assets/Proyecto2.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Inicializar el primer proyecto como activo
    this.goToProject(0);
    // Esperar 10 segundos y luego hacer scroll a la segunda sección
    setTimeout(() => {
      const section2 = document.getElementById('section2');
      if (section2) {
        section2.scrollIntoView({ behavior: 'smooth' });
      }
    }, 2000); //Tiempo vista dos
  }

  nextProject(): void {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
  }

  prevProject(): void {
    this.currentProjectIndex = (this.currentProjectIndex - 1 + this.projects.length) % this.projects.length;
  }

  goToProject(index: number): void {
    this.currentProjectIndex = index;
  }
}