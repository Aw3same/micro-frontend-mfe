import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const URL = 'http://localhost:3000/remoteEntry.js';


const routes: Routes = [
  // {
  //   path: 'admin',
  //   loadChildren: () => loadRemoteModule({
  //     type: 'module',
  //     remoteEntry: URL,
  //     exposedModule: './Module'
  //   })
  //   .then(m => m.FlightsModule)
  // },
  {
    path: 'admin',
    loadChildren: () => import('admin/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('dashboard/Module').then((m) => m.RemoteEntryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
