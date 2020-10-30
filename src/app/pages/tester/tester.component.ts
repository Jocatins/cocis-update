import { Component,OnDestroy, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page';
import { HttpService } from '../../services/http/http.service';
import { IAppState } from '../../interfaces/app-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  DataStateChangeEventArgs,
  DataSourceChangedEventArgs,
} from '@syncfusion/ej2-angular-grids';
import { EditSettingsModel, ToolbarItems, SaveEventArgs } from '@syncfusion/ej2-angular-grids';
import { ProductStoreService } from './product-store.service';
import { Internationalization} from '@syncfusion/ej2-base'

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss']
})
export class TesterComponent 
extends BasePageComponent
implements OnInit, OnDestroy {
  title = 'syncgrid';
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public products: Observable<DataStateChangeEventArgs>;
  public orderData: object;
  public val: any;
  public Intl: Internationalization = new Internationalization()

  actionBegin(args: SaveEventArgs){
    if(args.requestType === 'beginEdit' || args.requestType === 'add'){
      this.orderData = Object.assign({},args.rowData);
    }
    if(args.requestType === 'save'){
      const Validity = 'Validity';
      args.data[Validity] = this.orderData[Validity]
    }
  }

  public dateformatter = (value: any) => {
    let dFormatter: Function = this.Intl.getDateFormat({skeleton: 'y', type: 'date'})
    return dFormatter(new Date(value))
  }

  public valueAccess = (field: string, value: object, column : object) => {
    this.val = this.dateformatter(new Date(value[field][0])) + ' - ' + this.dateformatter(new Date(value[field][1]));
    return this.val
  }


  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    public productservice: ProductStoreService) 
    {
      
    super(store, httpSv);

    this.pageData = {
      title: 'Payments',
      breadcrumbs: [
        {
          title: 'Agreements',
          route: 'default-dashboard',
        },
        {
          title: 'Payments',
        },
      ],
    };
    this.products = productservice;
  }
   

  ngOnInit() {
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Normal',
      newRowPosition: 'Bottom',
    };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const state: any = { skip: 0, take: 5 };
    this.productservice.execute(state);
  }
  public dataStateChange(state: DataStateChangeEventArgs): void {
    this.productservice.execute(state);
  }
  public dataSourceChanged(state: DataSourceChangedEventArgs): void {
    if (state.action === 'add') {
      this.productservice.addRecord(state).subscribe(() => {
        state.endEdit();
      });
    } else if (state.action === 'edit') {
      this.productservice.updateRecord(state).subscribe(() => {
        state.endEdit();
      });
    } else if (state.requestType === 'delete') {
      this.productservice.deleteRecord(state).subscribe(() => {
        state.endEdit();
      });
    }
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

}
