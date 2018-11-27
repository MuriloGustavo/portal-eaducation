import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { TurmasPage } from '../pages/turmas/turmas';
import { AgendaPage } from '../pages/agenda/agenda';
import { NotificacoesPage } from '../pages/notificacoes/notificacoes';
import { TarefasPage } from '../pages/tarefas/tarefas';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TurmasPage,
    AgendaPage,
    NotificacoesPage,
    TarefasPage,
    ConfiguracoesPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TurmasPage,
    AgendaPage,
    NotificacoesPage,
    TarefasPage,
    ConfiguracoesPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
