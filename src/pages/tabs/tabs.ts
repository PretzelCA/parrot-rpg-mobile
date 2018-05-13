import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { BattlePage } from '../battle/battle';
import { StatsPage } from '../stats/stats';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BattlePage;
  tab3Root = StatsPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
