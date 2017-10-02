import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { InscricaoComponent } from './inscricao/inscricao.component';
import { EventoComponent } from './evento/evento.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent,
        InscricaoComponent,
        EventoComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
