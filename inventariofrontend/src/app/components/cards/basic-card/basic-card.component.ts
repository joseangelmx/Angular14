import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CardInterface, footerType } from 'src/app/core/interfaces/card-interface';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent implements OnChanges {

@Input() UserData!:any;
  card : CardInterface = {
  typeCard:'basic1',
  closeHeader:false,
  header:{
    title:['firstName','lastName'],
    titleClass:'text-uppercase text-start',
    siglas:'TT'
  },
  body:{
    title:'',
    titleClass:'',
    desc:'email',
    descClass:'',
    subDesc:'phoneNumber',
    subDescClass:''
  },
  footer: {
    footerClass:'col-md-12 fw-bolder text-color-green',
    label:'status',
    footerType:footerType.typeLbl
  }
}
ngOnChanges(changes: SimpleChanges): void {
  const {UserData} = changes;
  if(!!UserData.currentValue){
    this.loadUserData();
  }

  }
  loadUserData() {
   if(this.card.header && !this.card.header?.siglas){
    let tmpA: string[] = [];
    this.card.header?.title?.forEach(elem=>tmpA.push((this.UserData[elem]).charAt(0)))
    this.card.header.siglas = tmpA.join('');
   }
  }
  getArrayToText(arrayText: string[]){
    let tmpA: any[] = [];
    arrayText.forEach(title => tmpA.push(this.UserData[title]));
    return tmpA.join(' ');
  }
  }


