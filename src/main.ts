import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { StatisticalAnalysisAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(StatisticalAnalysisAppComponent, [ROUTER_PROVIDERS]);
