import { InfoServiceService } from './info-service.service';
import { GroupServiceService } from './group-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, ConnectionBackend } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GroupInfoTabComponent } from './group-info-tab/group-info-tab.component';
import { ProductGroupTabComponent } from './product-group-tab/product-group-tab.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { AddInfoComponent } from './add-info/add-info.component';


const routes: Routes = [
  /* { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'newspack', component: NewspackComponent } */
  { path: 'groupinfo', component: GroupInfoTabComponent },
  { path: 'group', component: ProductGroupTabComponent },
  { path: 'addgroup', component: AddGroupComponent },
  { path: 'addinfo', component: AddInfoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    GroupInfoTabComponent,
    ProductGroupTabComponent,
    AddGroupComponent,
    AddInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GroupServiceService,
              InfoServiceService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
