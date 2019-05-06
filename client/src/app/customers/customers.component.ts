import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Customer } from '../customer';
import { Router } from '@angular/router'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers = [
               {id:1, name:"Manish Shaw", email:"abc@test.com", phone:"1356842612"},
               {id:2, name:"Name2", email:"abcd@test.com", phone:"37843784634"},
               {id:3, name:"Name3", email:"abcde@test.com", phone:"6786877898"}
              ];
  constructor(private dataService: DataService, private router:Router) { }
  
  ngOnInit() {
    this.getCustomerList();
  }
  
//  getCustomerList(): void {
//    this.dataService.getCustomerList().subscribe(
//      (customers: Customer[]) => {
//        this.customers = customer;
//        console.log(customers)
//      });
//  }
  
  getCustomerList(): void {
      console.log(this.customers);
    }

  goToDetailsPage(id : number) : void {
      this.router.navigateByUrl("/customerdetails/"+id);
  }

}
