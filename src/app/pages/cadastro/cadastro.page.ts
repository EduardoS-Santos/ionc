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
    name: '',
    description: '',
    location: '',
    date: 'received',
    status: '',
    sended: false,
  };

  private firestore: Firestore = inject(Firestore);

  constructor() {}

  ngOnInit() {}

  cadastroCollection = collection(this.firestore, 'things');

  sendTreco() {
    if (
      this.cad.name.length < 3 ||
      this.cad.description.length < 5 ||
      this.cad.location.length < 10
    )
      return false;

    const d = new Date();
    this.cad.date = d.toISOString().split('.')[0].replace('T', ' ');

    addDoc(this.cadastroCollection, this.cad).then((data) => {
      console.log('Contato salvo com id' + data.id);
      this.cad.sended = true;
    });
    return false;
  }

  refresh() {
    this.cad.sended = false;
    this.cad.name = '';
    this.cad.description = '';
    this.cad.location = '';
    this.cad.status = '';
    this.cad.date = 'received';
  }
}
