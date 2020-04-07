import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './shared/header-component/header-component.component';
import { SidebarComponentComponent } from './shared/sidebar-component/sidebar-component.component';
import { FooterComponentComponent } from './shared/footer-component/footer-component.component';
import { ListProviderComponent } from './shared/pages/providers/list-provider/list-provider.component';
import { AddProviderComponent } from './shared/pages/providers/add-provider/add-provider.component';
import { UpdateProviderComponent } from './shared/pages/providers/update-provider/update-provider.component';
import { ArticleDetailsComponent } from './shared/pages/articles/article-details/article-details.component';
import { ArticleListComponent } from './shared/pages/articles/article-list/article-list.component';
import { ArticleAddComponent } from './shared/pages/articles/article-add/article-add.component';
import { ArticleUpdateComponent } from './shared/pages/articles/article-update/article-update.component';
import { ProviderDetailsComponent } from './shared/pages/providers/provider-details/provider-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    SidebarComponentComponent,
    FooterComponentComponent,
    ListProviderComponent,
    AddProviderComponent,
    UpdateProviderComponent,
    ArticleDetailsComponent,
    ArticleListComponent,
    ArticleAddComponent,
    ArticleUpdateComponent,
    ProviderDetailsComponent,
  ],
  //exports: [ListProviderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ListProviderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
