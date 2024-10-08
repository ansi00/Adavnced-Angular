import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule, NgForm, FormBuilder, NgModel, ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AppendPipe } from './Pipes/append.pipe';
import { AppendCLIPipe } from './Pipes/append-cli.pipe';
import { SummaryPipe } from './Pipes/summary.pipe';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './Services/post.service';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule, NavbarComponent,PostListComponent, PostComponent, NgIf,FormsModule, NgFor, CommonModule, AppendPipe, AppendCLIPipe, SummaryPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [PostService]
})
export class AppComponent implements AfterViewInit{
//   parentMessage: string = 'Message coming from the parent component';
//   message: string = '';
//   outputMessage : string = '';
//   imgUrl : string = "data:image/jpeg;base64,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"
// bool : boolean = false;
// userName : string = "";

// For Task in course

// title : string = "";
// details : string = "";
// imageUrl : string = "";
// postUrl : string = "";
// linkAvailable : boolean = false;
// moreDetails : string = "More Details";
//  addBackground : boolean = false;

// Directives Practise

// postArray : Array <string> = ["Post1", "Post2", "Post3", "Post4", "Post5"];

// For Switch Directive

// stepForm : string = "";

// onClick(status : string){
// this.stepForm = status;
// }


// objArray : Array <any> = [
//   // {id : 1 , value : "Post1"},
//   // {id : 2 , value : "Post2"},
//   // {id : 3 , value : "Post3"},
//   // {id : 4 , value : "Post4"},
//   // {id : 5 , value : "Post5"}
// ]

// addData(){
//   let newData = {
//     id : 6 , value : "Post6"
//   }
//   this.objArray.push(newData);

// }

// delData(i:number){
//  this.objArray.splice(i ,1)
// }

  @ViewChild(PostComponent) childComponent!: PostComponent;

  ngAfterViewInit() {
    // this.message = this.childComponent.messageFromChild;
  }

//   receiveMessage($event:string):void{
// this.outputMessage = $event;

//   }

//   buttonCLick():void{
// console.log("working");

//   }
// //   onKeyUp($event:any):void{
// // console.log($event.target.value);

// //   }
//   onKeyUpForNgModel():void{
//     console.log(this.userName);
    
//       }

// NgStyle Directive

// isActive : boolean = false;

// Task (User Details) Soloution
// name : string = "";
// email : string = "";
// address : string = "";


// dataArray : Array <any> = [];

// addData(){
//   let newEntry = {name: this.name, email: this.email, address: this.address}
//   this.dataArray.push(newEntry);
  
//   this.name = "";
//   this.email = "";
//   this.address = "";
// }

// delData(i:number){
// this.dataArray.splice(i,1)
// }

// variables for pipes demo

// title : string = "Angular Course";
// count : number = 246178613;
// dcValue : number = 89.8371971;
// money : number = 8383839381209735256;
// today : Date = new Date();

// postObj : object = {
//   id : 1,
//   content : "Post1"
// }

// postArray : Array <string> = ["Post1","Post2","Post3","Post4","Post5","Post6"]

// variables for custom pipes demo

// userDetails = {
//   name : "User1",
//   city : "NewYork",
//   country :  "US"
// }

// Pipes with Arguments

// dummyText : string = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
 

// Working with template driven forms

// onSubmit(f:NgForm){
// console.log(f.value);

// }

// getValue(f:NgModel){
// console.log(f);

// }


// Working with Reactive forms

form: FormGroup;
emailRegex : string = '[a-zA-Z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$';
contactRegex : string = '[789][0-9]{9}'


// FormBuilder cleaner Approach

constructor(fb : FormBuilder) {

this.form = fb.group({
  fullName : ['', [Validators.required, Validators.minLength(5)]],
  email : ['', [Validators.required, Validators.pattern(this.emailRegex)]],
  contactDetails : fb.group({
    address : ['', Validators.required],
    shippingAddress : ['', Validators.required],
    contactNo : ['', [Validators.required , Validators.pattern(this.contactRegex)] ]
  }),
skills : fb.array([])
})


// Traditional Approach for formGroups and formControls

//   this.form = new FormGroup({
//     fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
//     email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
//     contactDetails: new FormGroup({
//       address: new FormControl('', [Validators.required]),
//       shippingAddress: new FormControl('', [Validators.required]),
//       contactNo: new FormControl('', [Validators.required , Validators.pattern(this.contactRegex)])
//     }),

// skills : new FormArray([])

//   });
}

get fullName() {
  return this.form.get('fullName');
}

get email() {
  return this.form.get('email');
}

get contactDetails() {
  return this.form.get('contactDetails') as FormGroup;
}

get address() {
  return this.contactDetails.get('address');
}

get shippingAddress() {
  return this.contactDetails.get('shippingAddress');
}

get contactNo() {
  return this.contactDetails.get('contactNo');
}

 get skills(){
  return this.form.get('skills') as FormArray;
}

onSubmit(){
  console.log(this.form.value);
  
}

addSkills(skill: HTMLInputElement) {
  if (skill.value) {
    this.skills.push(new FormControl(skill.value));
    skill.value = '';  
    console.log(this.form.value);
  }
}

removeSkills(index:number){
this.skills.removeAt(index)
}
}

