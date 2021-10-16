import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.scss']
})
export class GrouplistComponent implements OnInit {
  public errorMessage = '';
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    const url = 'fcoGroup/GetFCO_GroupList';
    this.api.get(url).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => (this.errorMessage = error)
    );
  }

}
