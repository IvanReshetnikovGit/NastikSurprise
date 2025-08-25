import { Component} from "@angular/core";
import { DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: 'app-home-dialog-demo',
  templateUrl: './home-dialog.html',
  imports: [],
})

export class HomeDialogDemo{
  constructor(public ref: DynamicDialogRef) {}
  closeDialog() {
    this.ref.close();
  }
}
