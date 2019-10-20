import { Component} from '@angular/core';

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.css']
})
export class MyappComponent {

  users : string[];
  showList : boolean;

  constructor(){
    this.showList = true;
    this.users = [ "rayan", "nicolas", "sebastian", "ana", "maria"];
  }

  isShowList(){
    this.showList = !this.showList;
  }

  addUser(input){
    this.users.push(input.value);
    input.value = "";
    input.focus();
    return false;
  }

  deleteUser(the_user: string){
    for (let index = 0; index < this.users.length; index++) {
        if (this.users[index] == the_user) {
          this.users.splice(index,1);   
        }
    }
  }






}
