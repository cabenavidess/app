import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MainService{

  private headers = new Headers({'Content-Type': 'application/json'});
  private apiURL = 'http://wst.omnesweb.com/api/web/v1/';

  constructor(private http: Http){}

  private handleError(error:any)
  {
    console.log(error);
  }

  getEventos():Promise<Object[]>
  {
    return this.http.get(this.apiURL + 'evento/getEventos')
    .toPromise()
    .then(responce => responce.json() as Object[])
    .catch(this.handleError);
  }

  getAtractivoTipo(idTipo : number):Promise<Object[]>
  {
    return  this.http.get(this.apiURL + 'atractivo/getAtractivoTipo?tipo='+ idTipo)
      .toPromise()
      .then(responce => responce.json() as Object[])
      .catch(this.handleError);
  }
}
