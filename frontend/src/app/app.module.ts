import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularHalModule } from "angular4-hal";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ExternalService } from "./_services/external.service";
import { ProductComponent } from "./product/product.component";
import { ModuleComponent } from "./module/module.component";
import { ModuleDirective } from "./directives/module.directive";
import { PlanComponent } from "./plan/plan.component";
import { SubscriptionComponent } from "./subscription/subscription.component";
import { HeadingDirective } from "./directives/heading.directive";
import { NavbarComponent } from "./navbar/navbar.component";
import { UserComponent } from "./user/user.component";
import { AdminComponent } from "./admin/admin.component";
import { ClientComponent } from "./client/client.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { FormsModule } from "@angular/forms";
import { ConfirmGuard } from "./guards/confirm/confirm.guard";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ModuleComponent,
    ModuleDirective,
    PlanComponent,
    SubscriptionComponent,
    HeadingDirective,
    NavbarComponent,
    UserComponent,
    AdminComponent,
    ClientComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularHalModule.forRoot()
  ],
  providers: [
    { provide: "ExternalConfigurationService", useClass: ExternalService },
    [ConfirmGuard]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
