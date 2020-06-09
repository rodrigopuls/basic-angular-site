import { Component, OnInit } from '@angular/core';

import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html' 
})
export class ListaProdutoComponent implements OnInit {

  // Injeção do Serviço
  constructor(private produtoService: ProdutoService) { }

  public produtos: Produto[];

  // Assim que o componente for iniciado
  ngOnInit() {
    // Consulta o serviço e retorna um Observable
    this.produtoService.obterProdutos()
      // Trata o resultado retornado
      .subscribe(
        // Sucesso
        produtos => {
          this.produtos = produtos;
          console.log(produtos);
        },
        // Erro
        error => console.log(error)
      );
  }
}
