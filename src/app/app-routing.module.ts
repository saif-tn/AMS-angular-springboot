import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProviderComponent } from './shared/pages/providers/add-provider/add-provider.component';
import { ListProviderComponent } from './shared/pages/providers/list-provider/list-provider.component';
import { ArticleListComponent } from './shared/pages/articles/article-list/article-list.component';
import { ArticleAddComponent } from './shared/pages/articles/article-add/article-add.component';
import { UpdateProviderComponent } from './shared/pages/providers/update-provider/update-provider.component';
import { ProviderDetailsComponent } from './shared/pages/providers/provider-details/provider-details.component';


const routes: Routes = [
/* {path: 'providers',   component: ListProviderComponent,
    children: [
      { path: '',                 component: ListProviderComponent },
      { path: 'add',              component: AddProviderComponent },
      { path: 'update/:id',       component: UpdateProviderComponent },
      { path: 'details/:id',      component: ArticleAddComponent }
    ]}, */
  {path: 'providers',             component: ListProviderComponent},
  {path: 'update/:id',            component: UpdateProviderComponent},
  {path: 'providers/details/:id', component: ProviderDetailsComponent},
  {path: 'providers/addProvider', component: AddProviderComponent},
  {path: 'articles',              component: ArticleListComponent},
  {path: 'articles/addArticle',  component: ArticleAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
