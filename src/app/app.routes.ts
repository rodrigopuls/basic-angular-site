import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { NotFoundComponent } from './shared/notfound/notfound.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { DetalheProdutoComponent } from './produtos/detalhe-produto/detalhe-produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'produtos', component: ListaProdutoComponent },
  { path: 'produto/:id', component: DetalheProdutoComponent },
  { path: 'carrinho/:id', component: CarrinhoComponent },
  { path: 'feature-data-binding', component: DataBindingComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];
