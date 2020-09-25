import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { AppComponent } from './app.component';



describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let response = {
    "id": "shop/new/all-new",
    "name": "All New",
    "categoryType": "subcat",
    "groups": [
        {
            "id": "organic-tassel-stripe-bath-mat-dark-horseradish-b3234",
            "name": "Organic Tassel Stripe Bath Mat - Dark Horseradish",
            "links": {
                "www": "https://www.westelm.com/products/organic-tassel-stripe-bath-mat-dark-horseradish-b3234/"
            },
            "priceRange": {
                "regular": {
                    "high": 60,
                    "low": 40
                },
                "selling": {
                    "high": 48,
                    "low": 32
                },
                "type": "special"
            },
            "thumbnail": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "thumbnail",
                "width": 363,
                "href": "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202039/0013/organic-tassel-stripe-bath-mat-dark-horseradish-m.jpg",
                "height": 363
            },
            "hero": {
                "size": "m",
                "meta": "",
                "alt": "",
                "rel": "hero",
                "width": 363,
                "href": "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202039/0013/organic-tassel-stripe-bath-mat-dark-horseradish-m.jpg",
                "height": 363
            },
            "images": [
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202035/0077/organic-tassel-stripe-bath-mat-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202036/0052/organic-tassel-stripe-bath-mat-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202038/0151/organic-tassel-stripe-bath-mat-stone-white-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202019/0034/west-elm-chelsea-bathroom-refresh-bundle-1-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202039/0013/organic-tassel-stripe-bath-mat-dark-horseradish-1-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202036/0053/organic-tassel-stripe-bath-mat-1-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202035/0076/organic-tassel-stripe-bath-mat-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202026/0006/organic-tassel-stripe-bath-mat-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202026/0006/belgian-flax-linen-shower-curtain-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202014/0951/organic-tassel-stripe-bath-mat-stone-white-m.jpg",
                    "height": 363
                },
                {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202029/0066/organic-striped-arrow-edge-jacquard-shower-curtain-m.jpg",
                    "height": 363
                }
            ],
            "swatches": [],
            "messages": [],
            "flags": [
                {
                    "bopisSuppress": false,
                    "rank": 11,
                    "id": "new_colors"
                }
            ],
            "reviews": {
                "recommendationCount": 0,
                "likelihood": 0,
                "reviewCount": 0,
                "averageRating": 0,
                "id": "organic-tassel-stripe-bath-mat-dark-horseradish-b3234",
                "type": "GROUP_REVIEWS"
            }
        },
    ],
    "totalPages": 73,
    "categories": []
};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it(`showModal has default value`, () => {
    expect(component.showModal).toEqual(false);
  });

  it(`closeModal should hide modal`, () => {
    component.showModal = true;
    component.closeModal();
    expect(component.showModal).toEqual(false);
  });

  it(`selectProduct should show modal`, () => {
    component.showModal = false;
    component.selectProduct(response.groups[0]);
    expect(component.showModal).toEqual(true);
  });

  describe('getProductDetails', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.get(HttpTestingController);
      component.getProductDetails().subscribe(res => {

        expect(res).toEqual(response);
      });

      const req = httpTestingController.expectOne(
        'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json'
      );
      expect(req.request.method).toEqual('GET');
      req.flush(response);
      
      httpTestingController.verify();
    });
  });
});
