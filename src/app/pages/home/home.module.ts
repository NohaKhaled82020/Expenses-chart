import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeResolver } from '../home.resolver';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule],
  providers: [HomeResolver],
})
export class HomeModule {}
