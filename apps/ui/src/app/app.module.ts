import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule.forRoot(
      [
        {
          loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
          path: '',
        },
        {
          loadChildren: () => import('./accounts/accounts.module').then((m) => m.AccountsModule),
          path: 'accounts',
        },
        {
          loadChildren: () => import('./schedule/schedule.module').then((m) => m.ScheduleModule),
          path: 'schedule',
        },
      ],
      {
        initialNavigation: 'enabledBlocking',
      },
    ),
  ],
  providers: [],
})
export class AppModule {}
