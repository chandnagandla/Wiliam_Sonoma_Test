import { Component, VERSION } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  productList:any[];
  selectedProduct: any;
  showModal = false;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getProductDetails()
      .subscribe((res: any) => {
        this.productList = res.groups;
      });
  }

  getProductDetails() {
    return this.http
    .get("https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json");
  }

  selectProduct(product){
    this.showModal = true;
    this.selectedProduct = product;
  }

  closeModal(){
    this.showModal = false;
  }
}
