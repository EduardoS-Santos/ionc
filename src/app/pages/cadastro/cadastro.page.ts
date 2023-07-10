import { Component, OnInit, inject } from '@angular/core';
import { FieldValue, Firestore, Timestamp, addDoc, collection, serverTimestamp } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public env = environment;
  public cad = {
    nameT:'',
    descriptionT:'',
    locationT:'',
    dateT:'received',
    statust:'',
  }
  constructor() { }
  

  private firestore: Firestore = inject(Firestore);

  ngOnInit(): void {
  }

const cadastroCollection = collection(this.firestore,'Trecos')

sendTreco(){

if(
  this.cad.nameT.length<3||
  this.cad.descriptionT.length<5||
  this.cad.locationT.length<10
)return false

}

// const d = new Date();
//     this.cad.dateT = d.toISOString().split('.')[0].replace('T', ' ');

    addDoc(this.cadastroCollection,this.cad).then(()=>{
      console.log()
    })

}
