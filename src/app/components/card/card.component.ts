  import { Component, OnInit } from '@angular/core';
  import { ApiService } from './api.service'

  @Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrl: './card.component.css'
  })
  export class CardComponent implements OnInit {

    campeaoList:any;
    champions:any[]= []
    champImgUrls: string[] = [];

    constructor(private apiService: ApiService){ }

    ngOnInit(): void {

      this.apiService.pegarchamp().subscribe((data:any)=> {
        this.campeaoList = data.data;

        let campeaoIds = Object.keys(this.campeaoList).slice(0,100);

        for(let i=0; i < campeaoIds.length; i++){

          let id = campeaoIds[i];
          let campeao = this.campeaoList[id];
          

          this.champions.push(campeao)
        
          let imgUrl = `https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${campeao.image.full}`;
          this.champImgUrls.push(imgUrl);

          console.log(this.champImgUrls)
          
        }


      }
      )};

}

