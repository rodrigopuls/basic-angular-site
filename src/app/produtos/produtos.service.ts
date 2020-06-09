import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "./produto";
import { Observable } from "rxjs";

@Injectable()
export class ProdutoService {
  constructor(private http: HttpClient) {}
  
  public id: string
  protected UrlServiceV1: string = "https://my-json-server.typicode.com/rodrigopuls/fake-json-server/"; 


  obterProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.UrlServiceV1 + "produtos");
  }

  obterProduto(id: string): Observable<Produto> {
    return this.http.get<Produto>(this.UrlServiceV1 + "produtos/" + id);
  }
}
