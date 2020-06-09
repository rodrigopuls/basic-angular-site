import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html'
})
export class DetalheProdutoComponent implements OnInit {

  // Injeção do Serviço
  constructor(private activatedRoute: ActivatedRoute, private produtoService: ProdutoService) { }

  public id: string;
  public produto: Produto;

  // Assim que o componente for iniciado
  ngOnInit() {

    // Get Query Id
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });

    // Consulta o serviço e retorna um Observable
    this.produtoService.obterProduto(this.id)
      // Trata o resultado retornado
      .subscribe(
        // Sucesso
        produto => {
          this.produto = produto;
          console.log(produto);
        },
        // Erro
        error => console.log(error)
      );
  }
}