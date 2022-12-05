import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DoctorsService } from 'src/app/services/doctors.service';
declare let $: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   pageTitle:string="Dashboard";
  constructor(private route:ActivatedRoute,private d:DoctorsService,private router:Router) { }
  ngOnInit(): void {
   // this.pageTitleChange();
   this.d.Title.subscribe(res=>this.pageTitle=res )

   
    $('#b').click(function () {
      alert('dsf');
    });
    $("#menu-toggle").click(function () {
      $("#wrapper").toggleClass("toggled");
    });
    $("#menu-toggle-2").click(function () {
      $("#wrapper").toggleClass("toggled-2");
      $('#menu ul').hide();
    });

    $('#menu ul').hide();
    $('#menu ul').children('.current').parent().show();
    //$('#menu ul:first').show();
    $('#menu li a').click(
      function () {
        var checkElement = $('#menu li a').next();
        if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
          return false;
        }
        if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
          $('#menu ul:visible').slideUp('normal');
          checkElement.slideDown('normal');
          return false;
        }
        return;
    });
  }

  pageTitleChange():void{
    this.pageTitle=this.route.snapshot.data['titlepage'];
    //if(this.Router.snapshot.data['title']){
      
   // }
    console.log(this.pageTitle)
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['\login'])
  }

}
