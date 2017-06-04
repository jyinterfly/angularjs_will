import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';
  color = '#ff0000';

  onclicktest(){
      this.title ='Hello world';
      this.color = '#99bf00';
  }

}
