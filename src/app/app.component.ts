import { Component } from '@angular/core';
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private http: HttpClient
  ) { }


  title = 'colorday-website';

  demoUrl = 'http://ec2-52-206-182-239.compute-1.amazonaws.com:8080/demo';

  test() {
    console.log('hhh');
    const test = this.http.request('GET', this.demoUrl).subscribe((data) => {
      console.log(data);
    });
  }
}
