import { Component ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

messageFrwd : string = "message using eventEmitter";

@Output() eventMessage = new EventEmitter<string>()

sendMessage () : void{
this.eventMessage.emit(this.messageFrwd);

}
}
