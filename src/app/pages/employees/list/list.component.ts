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

  onGoToDelete(item: any):void{
    alert('Deleted');
  }

}
