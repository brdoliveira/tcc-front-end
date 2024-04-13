import { Component } from '@angular/core';

@Component({
  selector: 'app-vertical-sidebar',
  templateUrl: './vertical-sidebar.component.html',
  styleUrl: './vertical-sidebar.component.scss'
})
export class VerticalSidebarComponent {
  menuItems = [
    { icon: 'pi pi-fw pi-home', label:'Inicio', link: '/details'},
    { icon: 'pi pi-fw pi-chart-pie', label: 'Dashboard', link: '/dashboard' },
    { icon: 'pi pi-fw pi-briefcase', label: 'Empresa', link: '/company' },
    { icon: 'pi pi-fw pi-user-plus', label: 'Usuário', link: '/users' },
    { icon: 'pi pi-fw pi-file', label: 'Template', link: '/template' },
    { icon: 'pi pi-fw pi-file-upload', label: 'Arquivos', link: '/files' }
  ];
}
