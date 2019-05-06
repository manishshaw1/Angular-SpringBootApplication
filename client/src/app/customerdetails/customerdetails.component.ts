import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../customerdetails'
import { DataService } from '../data.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  allCustomerDetails: CustomerDetails[] = [{id:1, name:"Manish Shaw", email:"abc@test.com", phone:"1356842612", city:"Bangalore", state:"Karnataka", country:"India", organization:"Company1", jobProfile:"Developer", additionalInfo:"Very interested in the products"}, 
                         {id:2, name:"Name2", email:"abcd@test.com", phone:"37843784634", city:"Mangalore", state:"Karnataka", country:"India", organization:"Company2", jobProfile:"Analyst", additionalInfo:"Very interested in the products but buys rarely"}, 
                         {id:3, name:"Name3", email:"abcde@test.com", phone:"6786877898", city:"Chennai", state:"Tamil Nadu", country:"India", organization:"Company3", jobProfile:"CEO", additionalInfo:"Has Bought Products before"}];

  customerDetails: CustomerDetails = null;
  constructor(private dataService: DataService, private activeRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.getCustomerDetails();
  }

//  getCustomerDetails(): void {
//    this.activeRoute.params.subscribe(routeParams => {
//
//      this.dataService.getCustomerDetails(routeParams.id).subscribe(
//
//        (customerDetails: CustomerDetails) => {
//          this.customerDetails = customerDetails;
//          console.log(customerDetails);
//        });
//
//    });
    
    getCustomerDetails(): void {
        this.activeRoute.params.subscribe(routeParams => {
            this.allCustomerDetails.filter((x) => 
            { 
                if(x.id.toString() === routeParams.id) {
                    this.customerDetails = x;
                    console.log(this.customerDetails);
                }
            });
        });
  }

  goToCustomerPage() : void {
      this.router.navigateByUrl("/customers");
  }

}
