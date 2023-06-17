import { Component } from '@angular/core';
import { CardInterface, footerType } from 'src/app/core/interfaces/card-interface';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent {

card : CardInterface = {
  typeCard:'basic1',
  closeHeader:false,
  header:{
    title:'Test title',
    titleClass:'',
    siglas:'TT'
  },
  body:{
    title:'',
    titleClass:'',
    desc:'emailTest',
    descClass:'',
    subDesc:'phoneTest',
    subDescClass:''
  },
  footer: {
    footerClass:'',
    label:'Status',
    footerType:footerType.typeLbl
  }
}

}
