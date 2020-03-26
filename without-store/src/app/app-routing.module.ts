import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";

// Problem with production build
// const ListComponent = () =>
//   import(/* webpackChunkName: "list" */ "./views/list/list.module").then(
//     mod => mod.ListModule
//   );
// const ItemComponent = () =>
//   import(/* webpackChunkName: "item" */ "./views/item/item.module").then(
//     mod => mod.ItemModule
//   );
// const NotFoundComponent = () =>
//   import(
//     /* webpackChunkName: "not-found" */ "./views/not-found/not-found.module"
//   ).then(mod => mod.NotFoundModule);

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: { animation: "home" }
  },
  {
    path: "planets",
    loadChildren: "./views/list/list.module#ListModule",
    data: { animation: "planets" }
  },
  {
    path: "people",
    loadChildren: "./views/list/list.module#ListModule",
    data: { animation: "people" }
  },
  {
    path: "films",
    loadChildren: "./views/list/list.module#ListModule",
    data: { animation: "films" }
  },
  {
    path: "species",
    loadChildren: "./views/list/list.module#ListModule",
    data: { animation: "species" }
  },
  {
    path: "planets/:id",
    loadChildren: "./views/item/item.module#ItemModule",
    data: { animation: "planetsID" }
  },
  {
    path: "people/:id",
    loadChildren: "./views/item/item.module#ItemModule",
    data: { animation: "peopleID" }
  },
  {
    path: "films/:id",
    loadChildren: "./views/item/item.module#ItemModule",
    data: { animation: "filmsID" }
  },
  {
    path: "species/:id",
    loadChildren: "./views/item/item.module#ItemModule",
    data: { animation: "speciesID" }
  },
  {
    path: "not-found",
    loadChildren: "./views/not-found/not-found.module#NotFoundModule",
    data: { animation: "not-found" }
  },
  {
    path: "**",
    redirectTo: "not-found",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
