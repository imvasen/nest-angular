import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'nest-angular';
  apiMessage: string;
  failed = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api').subscribe(
      (res: any) => (this.apiMessage = res.txt),
      err => {
        this.failed = true;
        console.error(err);
      },
    );
  }
}
