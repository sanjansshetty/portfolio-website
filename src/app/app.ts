import { Component, signal, HostListener, ElementRef, ViewChild, AfterViewInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare var emailjs: any;

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  currentDateTime: Date = new Date();
  private intervalId: any;
  form = signal({
    fullName: '',
    email: '',
    message: ''
  });

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }

  isValid = computed(() => {
    const f = this.form();
    return (
      f.fullName.trim().length > 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) &&
      f.message.trim().length > 10
    );
  });

  updateField(key: string, value: any) {
    this.form.update(f => ({
      ...f,
      [key]: value
    }));
  }

  resetForm() {
    this.form.set({
      fullName: '',
      email: '',
      message: ''
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
  // ===== PERSONALIZE THESE =====
  protected readonly name = signal('Sanjan S Shetty');
  protected readonly role = signal('Front End Developer');
  protected readonly heroTagline = signal("Frontend Engineer Building Performant, Accessible & Maintainable Web Applications. Thanks for visiting my portfolio! Happy coding..!");
  protected readonly phone = signal('+91 7259311928');
  protected readonly email = signal('sanjansshetty2000@gmail.com');
  protected readonly githubUrl = signal('https://github.com/yourusername');
  protected readonly linkedinUrl = signal('https://www.linkedin.com/in/sanjan-s-shetty-b4365a1b4/');
  protected readonly resumePath = signal('Sanjan_S_Shetty_Resume.pdf');

  // ===== EmailJS Config (Replace with your IDs) =====
  private readonly EMAILJS_SERVICE_ID = 'service_6b2g0ei';
  private readonly EMAILJS_TEMPLATE_ID = 'template_kr4apig';
  private readonly EMAILJS_PUBLIC_KEY = '9g9eKLMH__Ob6xXoz';

  // Nav
  protected isScrolled = false;
  protected mobileMenuOpen = false;
  protected activeSection = 'home';

  // Contact form status
  protected formStatus: 'idle' | 'sending' | 'sent' | 'error' = 'idle';

  // About
  protected readonly aboutText = signal(
    "I'm always curious and eager to learn new things. I enjoy turning ideas into solutions and working with others to create something meaningful. I believe growth comes from both challenges and experience. Let's connect and share ideas!"
  );

  protected readonly aboutPoints = [
    'Passionate Front End Developer',
    'Problem-solver with a love for innovation',
    'Building scalable & efficient applications',
    'Always learning and adapting'
  ];

  // Skills
  protected readonly skills = [
    { name: 'HTML5 & CSS3', description: 'Web Structure and Styling. Bootstrap/Tailwind for Responsive Design.', icon: 'fa-brands fa-html5', color: '#e34f26' },
    { name: 'JavaScript / TypeScript', description: 'Core Web Development Languages.', icon: 'fa-brands fa-js', color: '#f7df1e' },
    { name: 'Angular', description: 'Frontend Framework and User-Interface Development.', icon: 'fa-brands fa-angular', color: '#dd0031' },
    { name: 'Databases', description: 'MySQL and MongoDB for Data Management.', icon: 'fa-solid fa-database', color: '#336791' },
    { name: 'Git & Gitlab', description: 'Version Control, CI/CD, and Collaboration.', icon: 'fa-brands fa-git-alt', color: '#f05032' },
    { name: 'Docker & Kubernetes', description: 'Containerization and scalable deployments.', icon: 'fa-brands fa-docker', color: '#2496ed' },
  ];

  // Projects
  protected readonly professionalProjects = [
    {
      title: 'ClearTrail',
      subtitle: 'Enterprise Application',
      points: [
        'Worked on a defense monitoring platform designed to track battlefield assets in real time.',
        'Built a Micro-Frontend architecture for modular and scalable frontend development.',
        'Implemented real-time data streaming using RxJS and WebSockets.',
        'Developed dashboards to track assets such as drones and CCTV units.',
        'Displayed live asset location, operational status, and condition updates on the UI.',
        'Enabled defense teams to monitor critical asset data efficiently through a responsive interface.'
      ]
    },
    {
      title: 'Asend Learning',
      subtitle: 'Enterprise Web Application',
      points: [
        'Worked on a large-scale learning and assessment platform used by nursing students and faculty.',
        'Integrated RESTful APIs.',
        'Developed frontend modules using Angular, TypeScript, HTML, and CSS to support learning workflows.',
        'Contributed to improving UI usability, component reusability, and application performance',
        'Collaborated with backend and design teams to deliver a seamless user experience.'
      ]
    }
  ];

  // protected readonly personalProjects = [
  //   {
  //     title: 'Personal Portfolio Website',
  //     subtitle: 'Full Stack Developer',
  //     githubLink: 'https://github.com/yourusername/portfolio',
  //     points: [
  //       'Responsive design for various devices.',
  //       'Integrated animations and interactive elements.',
  //       'Showcased skills, projects, and experience effectively.',
  //       'Dark theme with modern UI.'
  //     ]
  //   }
  // ];

  // Experience
  protected readonly experiences = [
    {
      title: 'Advayan Technology Private Limited',
      location: 'Bangalore, India',
      period: 'Nov 2025 - Present',
      type: 'work',
      icon: 'fa-solid fa-briefcase',
      points: [
        'Architected and developed scalable Micro Frontend (MFE) applications using Angular (latest version) within a monorepo architecture, enabling modular, independent deployments',
        'Engineered real-time event-driven data streaming using RxJS and WebSockets, enabling instant dashboard updates upon data changes',
        'Designed reusable component libraries and enhanced UI performance, reducing code redundancy by 30% and improving maintainability',
        'Integrated advanced PrimeNG data tables, RESTful APIs, and backend services to deliver high-performance enterprise-grade interfaces',
        'Improved code quality through Jasmine/Karma unit testing (80%+ coverage) and leveraged AI-assisted development (GitHub Copilot) with structured prompt engineering and validation practices to ensure secure, production-ready code'
      ]
    },
     {
      title: 'Happiest Minds Technology',
      location: 'Bangalore, India',
      period: 'Aug 2022 - Oct 2025',
      type: 'work',
      icon: 'fa-solid fa-briefcase',
      points: [
        'Led development of enterprise-scale Angular 12+ applications using TypeScript, RxJS, and NgRx for scalable state management',
        'Designed reusable UI components and shared libraries, accelerating cross-team development and reducing duplication',
        'Integrated multiple RESTful APIs and streamlined change detection by leveraging RxJS and OnPush strategy. Reduced initial bundle size and improved load time by 40% using Lazy Loading and AOT compilation',
        'Integrated advanced PrimeNG data tables, RESTful APIs, and backend services to deliver high-performance enterprise-grade interfaces',
        'Streamlined Git and GitLab workflows, improving collaboration efficiency and reducing merge conflicts across a 6-member development team'
      ]
    }
  ];

  protected readonly education = [
    {
      title: 'Bachelor of Engineering',
      location: 'Your University • City',
      period: '2018 - 2022',
      type: 'education',
      icon: 'fa-solid fa-graduation-cap',
      points: [
        'Developed strong problem-solving skills.',
        'Gained exposure to programming and data structures.',
        'Built interest in software development.'
      ]
    }
  ];

  protected readonly navItems = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'skills' },
    { label: 'Projects', href: 'projects' },
    { label: 'Experience', href: 'experience' },
    { label: 'Education', href: 'education'},
    { label: 'Contact', href: 'contact' }
  ];

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  scrollTo(sectionId: string): void {
    this.mobileMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  private setupIntersectionObserver(): void {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((section) => observer.observe(section));
  }

  sendMessage(): void {
    if (!this.isValid()) {
      return;
    }

    const formData = this.form();
    console.log(formData);
    this.formStatus = 'sending';

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      message: formData.message,
      to_name: this.name()
    };
    console.log(templateParams);

    emailjs
      .send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        templateParams,
        this.EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          this.formStatus = 'sent';
          this.resetForm();
          setTimeout(() => (this.formStatus = 'idle'), 4000);
        },
        (error: any) => {
          console.error('EmailJS error:', error);
          this.formStatus = 'error';
          setTimeout(() => (this.formStatus = 'idle'), 4000);
        }
      );
  }

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = this.resumePath();
    link.download = 'Sanjan_S_Shetty_Resume.pdf';
    link.click();
  }
}
