import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

interface ContactData {
  name: string;
  email: string;
  message: string;
}

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
export class WebComponent implements OnInit, OnDestroy {
  currentProjectIndex = 0;
  private carouselInterval: any;
  
  contactData: ContactData = {
    name: '',
    email: '',
    message: ''
  };

  projects: Project[] = [
    {
      type: 'FULLSTACK',
      title: 'UI Elements',
      description: 'A component portal that works as a digital library, centralizing reusable web design and development elements. It helps maintain consistency, speeds up workflows, and supports scalable and efficient project development.',
      frontendUrl: 'https://github.com/Hoyos-Dev/Portal-de-elementos-UI/tree/main/ui-pau',
      backendUrl: 'https://github.com/Hoyos-Dev/Portal-de-elementos-UI/tree/main/api-pau-codigos',
      technologies: ['Angular', 'FastApi', 'MySQL'],
      imageUrl: 'assets/Proyecto1.png'
    },
    {
      type: 'FULLSTACK',
      title: 'Giveaways',
      description: 'A customizable sweepstakes platform that allows you to create dynamic sweepstakes from lists of people, with simultaneous or individual sweepstakes options, custom backgrounds, and interactivity adaptable to any need.',
      frontendUrl: 'https://github.com/Hoyos-Dev/Sorteos/tree/main/Sorteos-main/Front-end',
      backendUrl: 'https://github.com/Hoyos-Dev/Sorteos/tree/main/Sorteos-main/Back-end',
      technologies: ['Angular', 'FastApi', 'MySQL'],
      imageUrl: 'assets/Proyecto2.png'
    },
    {
      type: 'FRONT-END',
      title: 'Portal PUA',
      description: 'Refactorización visual y funcional de portal PAU. Por temas de privacidad no se puede compartir más información de este proyecto.',
      technologies: [],
      imageUrl: 'assets/pau.png'
    }
  ];

  isSending = false;
  emailSent = false;
  emailError = false;

  constructor() {
    // Inicializar EmailJS con la clave pública
    emailjs.init('R68Y_SqimFbFdMSDe');
  }

  ngOnInit(): void {
    this.goToProject(0);
    this.startCarouselAutoplay();
    setTimeout(() => {
      const section2 = document.getElementById('section2');
      if (section2) {
        section2.scrollIntoView({ behavior: 'smooth' });
      }
    }, 2000); //Tiempo vista dos
  }

  ngOnDestroy(): void {
    this.stopCarouselAutoplay();
  }

  startCarouselAutoplay(): void {
    this.carouselInterval = setInterval(() => {
      this.nextProject();
    }, 5000); // Cambiar cada 5 segundos
  }

  stopCarouselAutoplay(): void {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  async onSubmit(form: NgForm) {
    if (form.invalid || this.isSending) {
      return;
    }

    this.isSending = true;
    this.emailError = false;

    try {
      const response = await emailjs.send(
        'service_30lwv7i',
        'template_og4c40o',
        {
          from_name: this.contactData.name,
          to_email: 'Hoyos.Dev@outlook.com',
          message: this.contactData.message,
          reply_to: this.contactData.email || 'Hoyos.Dev@outlook.com'
        }
      );

      if (response.status === 200) {
        this.emailSent = true;
        form.resetForm();
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.emailSent = false;
        }, 5000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      this.emailError = true;
    } finally {
      this.isSending = false;
    }
  }

  nextProject(): void {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
    this.resetCarouselAutoplay();
  }

  prevProject(): void {
    this.currentProjectIndex = (this.currentProjectIndex - 1 + this.projects.length) % this.projects.length;
    this.resetCarouselAutoplay();
  }

  resetCarouselAutoplay(): void {
    this.stopCarouselAutoplay();
    this.startCarouselAutoplay();
  }

  goToProject(index: number): void {
    this.currentProjectIndex = index;
  }
}