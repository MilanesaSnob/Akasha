import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  /* Creo mi objeto para pasar lo parametros */
  navigationExtras = {
    state: {
      value: null
    }
  };
  
  fakeData = [
    {
      name: 'Martin Mele',
      email: 'mmmele@gmail.com',
      startDate: '01/01/2010'
    },
    {
      name: 'Juan Lopez',
      email: 'juanmanuellopez@gmail.com',
      startDate: '01/01/2010'
    },
    {
      name: 'Luisa Maria Poirott',
      email: 'lmpoirott@gmail.com',
      startDate: '01/01/2010'
    },
    {
      name: 'Gabriela Dos Santos',
      email: 'gabi@gmail.com',
      startDate: '01/01/2010'
    },
    {
      name: 'Luciana Sarazar',
      email: 'luli@gmail.com',
      startDate: '01/01/2010'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /* Metodos para los botones de Acciones*/
  onGoToSee(item: any):void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  }

  onGoToEdit(item: any):void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  onDelete(item: any):void{
    alert('Deleted');
  }

}
