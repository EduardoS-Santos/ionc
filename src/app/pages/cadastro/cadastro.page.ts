import { Component, OnInit, inject } from '@angular/core';
import {
  FieldValue,
  Firestore,
  Timestamp,
  addDoc,
  collection,
  serverTimestamp,
} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public env = environment;
  public alertButtons = ['OK'];
  public cad = {
    nameT: '',
    descriptionT: '',
    locationT: '',
    dateT: 'received',
    statusT: '',
    sended: false,
  };

  private firestore: Firestore = inject(Firestore);

  constructor() {}

  ngOnInit() {}

  cadastroCollection = collection(this.firestore, 'Trecos');

  sendTreco() {
    if (
      this.cad.nameT.length < 3 ||
      this.cad.descriptionT.length < 5 ||
      this.cad.locationT.length < 10
    )
      return false;

    const d = new Date();
    this.cad.dateT = d.toISOString().split('.')[0].replace('T', ' ');

    addDoc(this.cadastroCollection, this.cad).then((data) => {
      console.log('Contato salvo com id' + data.id);
      this.cad.sended = true;
    });
    return false;
  }

  refresh() {
    this.cad.sended = false;
    this.cad.nameT = '';
    this.cad.descriptionT = '';
    this.cad.locationT = '';
    this.cad.statusT = '';
    this.cad.dateT = 'received';
  }
}
