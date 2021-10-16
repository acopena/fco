import { Component, OnInit, OnDestroy } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy  {
  editor: any = Editor;
  public html = '';
  constructor() { }

  ngOnInit(): void {
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
