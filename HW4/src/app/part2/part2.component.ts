import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component implements OnInit {
	 names: Array<any> = [];
	 
	constructor(){
		this.names =             
		['Bill Russell', 'Michael Jordan', 'Larry Bird'];
		}
	
	
	
	
	
	ngOnInit(): void {
		this.names =             
		['Bill Russell', 'Michael Jordan', 'Larry Bird'];

    
}
	
	

}
