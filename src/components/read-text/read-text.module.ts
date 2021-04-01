import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ReadTextComponent } from './read-text';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { MathJaxModule } from '../math-jax/math-jax.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../../assets/i18n/', '.json');
}

@NgModule({
  declarations: [ReadTextComponent],
  imports: [
    IonicModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    MathJaxModule
  ],
  exports: [ReadTextComponent]
})
export class ReadTextModule {}
