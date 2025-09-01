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
      title: 'Elementos UI',
      description: 'Un portal de componentes que funciona como una biblioteca digital, donde se almacenan y organizan elementos reutilizables de diseño y desarrollo web para asegurar coherencia y eficiencia en los proyectos.',
      frontendUrl: '#',
      backendUrl: '#',
      technologies: ['Angular', 'FastApi', 'MySQL'],
      imageUrl: 'assets/Proyecto1.png'
    },
    {
      type: 'FULLSTACK',
      title: 'Sorteos',
      description: 'Una plataforma de sorteos personalizable que permite crear dinámicas a partir de listas de personas, con opciones de sorteos simultáneos o individuales, fondos personalizados e interactividad adaptable a cualquier necesidad.',
      frontendUrl: '#',
      backendUrl: '#',
      technologies: ['React', 'Node.js', 'Express'],
      imageUrl: 'assets/Proyecto2.png'
    },
    {
      type: 'FRONTEND',
      title: 'Project Three',
      description: 'Descripción del tercer proyecto.',
      frontendUrl: '#',
      technologies: ['Vue.js', 'TailwindCSS'],
      imageUrl: 'assets/placeholder-project.png'  // Asegúrate de tener esta imagen en la carpeta assets
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