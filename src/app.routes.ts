
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { FeaturesComponent } from './pages/features.component';
import { PipelineComponent } from './pages/pipeline.component';
import { FollowUpComponent } from './pages/follow-up.component';
import { SequencingComponent } from './pages/sequencing.component';
import { ReportsComponent } from './pages/reports.component';
import { WhatsappComponent } from './pages/whatsapp.component';
import { ResourcesComponent } from './pages/resources.component';
import { AboutComponent } from './pages/about.component';
import { IntegrationsComponent } from './pages/integrations.component';
import { PricingComponent } from './pages/pricing.component';
import { PartnerComponent } from './pages/partner.component';
import { LeadManagementComponent } from './pages/lead-management.component';
import { RoiCalculatorPageComponent } from './pages/roi-calculator-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'pipeline', component: PipelineComponent },
  { path: 'follow-up', component: FollowUpComponent },
  { path: 'sequencing', component: SequencingComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'whatsapp', component: WhatsappComponent },
  { path: 'integrations', component: IntegrationsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'partner', component: PartnerComponent },
  { path: 'lead-management', component: LeadManagementComponent },
  { path: 'roi-calculator', component: RoiCalculatorPageComponent },
  { path: '**', redirectTo: '' }
];
