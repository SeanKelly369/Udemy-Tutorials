import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx'
import { Observable } from "rxjs/Rx";

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  storeServers(servers: any[]) {
    // headers not needed for Firebase, but can be for other databases.  MongoDB?
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    // return this.http.post('https://max-data-ef033.firebaseio.com/data.json', 
    //   servers,
    //   {headers: headers});
      return this.http.put('https://max-data-ef033.firebaseio.com/data.json', 
      servers,
      {headers: headers});
  }
  // Used to create an observable to get back the data
  getServers() {
    return this.http.get('https://max-data-ef033.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data
        }
      )
      // need to subscribe to observable
      .catch(
        (error:Response) => {
          console.log(error);
          return Observable.throw("Something went wrong");
        }
      );
    }
      getAppName() {
      return this.http.get('https://max-data-ef033.firebaseio.com/appName.json')
        .map(
          (response: Response) => {
            return response.json();
          }
        );
    }
}