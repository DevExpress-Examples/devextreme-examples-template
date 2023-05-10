import { Component, Input, ViewChild } from '@angular/core';
import { Employee } from '../app.service';
import { DxDataGridComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'grid-popup',
  templateUrl: './grid-popup.component.html',
  styleUrls: ['./grid-popup.component.scss'],
})
export class GridPopupComponent {
  @ViewChild('targetDataGrid', { static: false })
  dataGrid!: DxDataGridComponent;

  @Input() employees!: Employee[];

  successButtonOptions: any;
  cancelButtonOptions: any;
  copyButtonOptions: any;

  constructor() {
    this.successButtonOptions = {
      type: 'success',
      stylingMode: 'outlined',
      text: 'Save',
      onClick: () => {
        this.dataGrid.instance.saveEditData();
      },
    };

    this.cancelButtonOptions = {
      type: 'danger',
      stylingMode: 'outlined',
      text: 'Cancel',
      onClick: () => {
        this.dataGrid.instance.cancelEditData();
      },
    };

    this.copyButtonOptions = {
      text: 'Copy Data',
      stylingMode: 'outlined',
      onClick: () => {
        const rowKey = this.dataGrid.instance.option('editing.editRowKey');
        const rowIndex = this.dataGrid.instance.getRowIndexByKey(rowKey);
        const name = this.dataGrid.instance.cellValue(rowIndex, 'FirstName');
        const message = name ? name + "'s " : '';
        notify(`Copy ${message}data`);
      },
    };
  }
}
