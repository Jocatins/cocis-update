import { Component,OnDestroy, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page';
import { HttpService } from '../../services/http/http.service';
import { IAppState } from '../../interfaces/app-state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-fileuploads',
  templateUrl: './fileuploads.component.html',
  styleUrls: ['./fileuploads.component.scss']
})
export class FileuploadsComponent
 extends BasePageComponent
implements OnInit, OnDestroy {

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
  ) {
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
  }

  ngOnInit() {
    super.ngOnInit();

    this.getData('assets/data/departments.json', 'departments', 'setLoaded');
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

}
