import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { NavComponent } from './componets/nav/nav.component';
import { FooterComponent } from './componets/footer/footer.component';
import { ContentComponent } from './componets/content/content.component';
import { ProductsComponent } from './componets/products/products.component';
import { StdFormComponent } from './componets/std-form/std-form.component';
import { FormsModule } from '@angular/forms';
import { SelectTrackComponent } from './componets/select-track/select-track.component';
import { TodosListComponent } from './componets/todos-list/todos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ContentComponent,
    ProductsComponent,
    StdFormComponent,
    SelectTrackComponent,
    TodosListComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
