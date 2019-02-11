import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { PlanComponent } from "./plan/plan.component";
import { ModuleComponent } from "./module/module.component";
import { UserComponent } from "./user/user.component";
import { AdminComponent } from "./admin/admin.component";
import { ClientComponent } from "./client/client.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { ConfirmGuard } from "./guards/confirm/confirm.guard";

const routes: Routes = [
  {
    path: "",
    component: PlanComponent,
    pathMatch: "full"
  },
  {
    path: "products",
    component: ProductComponent
  },
  {
    path: "modules",
    component: ModuleComponent
  },
  {
    path: "user",
    component: UserComponent,
    canDeactivate: [ConfirmGuard]
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "client",
    component: ClientComponent
  },
  {
    path: "notfound",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ConfirmGuard]
})
export class AppRoutingModule {}
