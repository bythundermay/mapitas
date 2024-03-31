import { Routes } from '@angular/router';
import { MapaComponent } from './pages/mapa/mapa.component';
import { CountryviewComponent } from './pages/countryview/countryview.component';

export const routes: Routes = [
    {path:"", pathMatch: 'full', redirectTo:'mapa'},
    {path: "mapa", component: MapaComponent},
    {path: "country/:code", component: CountryviewComponent}
];
