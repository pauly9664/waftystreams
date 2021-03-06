import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'upload-modal',
    loadChildren: () => import('./upload-modal/upload-modal.module').then( m => m.UploadModalPageModule)
  },
  {
    path: 'preview-modal',
    loadChildren: () => import('./preview-modal/preview-modal.module').then( m => m.PreviewModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
