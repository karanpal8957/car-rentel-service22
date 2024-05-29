import {NgModule} from '@angular/core';
  
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
    exports:[
        NzSpinModule,
        NzFormModule,
        NzLayoutModule,
        NzButtonModule,
        NzInputModule,
    ]
    
})




 export class NgZorroImportsModule{}