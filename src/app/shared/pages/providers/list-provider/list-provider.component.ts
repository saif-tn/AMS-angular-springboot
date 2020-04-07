import { Component, OnInit, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ProviderService } from '../../../../services/provider.service';

import { Provider } from '../../../../entities/Provider';
import { PageProvider } from 'src/app/entities/PageProvider';

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})

@NgModule({})
export class ListProviderComponent implements OnInit {
  //providers: Observable<Provider[]>;
  providers: Provider[];
  pageProvider: PageProvider ;
  selectedPage: number = 0;

  constructor(private providerService: ProviderService,
              private router: Router) { }

  getProvider(): void {
    this.providerService.getProviders()
        .subscribe(
            providers => this.providers = providers
        );
  }

  getPageProvider(page:number): void {
    this.providerService.getPageProvider(page)
        .subscribe(
            page => this.pageProvider = page
        );
  }

  onSelect(page: number): void {
    console.log('selected page : ' + page);
    this.selectedPage = page;
    this.getPageProvider(page);
  }


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.getPageProvider(0);
    /* this.providers = this.providerService.getProviders();
    console.log('PROVIDERs' + this.providers); */
    console.log('list-provider fired');
  }

  providerDetails(id: number) {
    this.router.navigate(['providers/details', id]);
  }

  updateProvider(id: number) {
    this.router.navigate(['update', id]);
  }

  deleteProvider(id: number) {
    this.providerService.deleteProvider(id)
      .subscribe(
        data => {
          console.log('deleteProvider function ' + data);
          this.reloadData();
        },
        error => console.log(error)
      );
  }

}
