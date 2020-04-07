import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from 'src/app/services/provider.service';
import { Provider } from 'src/app/entities/Provider';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.css']
})
export class ProviderDetailsComponent implements OnInit {

  id: number;
  provider: Provider;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private providerService: ProviderService) { }

  ngOnInit() {
    this.provider = new Provider();
    this.id = this.route.snapshot.params['id'];

    this.providerService.getProvider(this.id)
    .subscribe( data => {
      this.provider = data;
    }, error => console.log(error));
  }

  backToList() {
    this.router.navigate(['providers']);
  }

}
