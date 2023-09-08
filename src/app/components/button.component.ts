import {Component, Input} from '@angular/core'

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export  class ButtonComponent{
  @Input() label:string ='';
  buttonText: string='ACESSAR';
  buttonTexts: string[]=['VENDER', 'COMPRAR','COISAR'];
  buttonNumber: number=1;
  buttonObject = {
    label: 'adicionar ao carrinho'
  }

  getAlert(num: number){
    alert(num)
  }

}