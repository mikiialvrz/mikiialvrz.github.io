import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { PriceSheetComponent } from './price-sheet/price-sheet.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'prices', component: PriceSheetComponent },
    { path: 'about', component: AboutMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
