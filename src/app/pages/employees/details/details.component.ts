import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  navigationExtras = {
    state: {
      value: null
    }
  };

  employee: any = null;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state;
   }

  ngOnInit(): void {
  }

  onGoBackToList():void{
    this.router.navigate(['list']);
  }

  onGoToEdit():void{
    this.navigationExtras.state.value = this.employee;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  onDelete():void{
    alert('Deleted');
  }

}
