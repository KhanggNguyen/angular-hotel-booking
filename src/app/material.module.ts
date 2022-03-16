import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatCardModule, MatBadgeModule, MatButtonModule],
  exports: [MatCardModule, MatBadgeModule, MatButtonModule],
})
export class MaterialModule {}
