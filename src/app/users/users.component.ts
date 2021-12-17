import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  parametros: any;

  ngOnInit(): void {
    this.route.params.subscribe(paramMap => {
      console.log(paramMap);
      this.parametros = paramMap;
    })
  }

}
