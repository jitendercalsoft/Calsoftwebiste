
import { Injectable, signal, computed } from '@angular/core';

export interface Deal {
  id: string;
  title: string;
  company: string;
  value: number;
  stage: 'qualification' | 'proposal' | 'negotiation' | 'closed';
  lastActivityDays: number; // For "rotting" indicator
  probability: number; // For weighted forecast
}

export interface KanbanColumn {
  id: string;
  title: string;
  stage: Deal['stage'];
}

@Injectable({
  providedIn: 'root'
})
export class CrmService {
  // Initial Mock Data
  private initialDeals: Deal[] = [
    { id: '1', title: 'Enterprise License', company: 'Acme Corp', value: 50000, stage: 'qualification', lastActivityDays: 2, probability: 0.2 },
    { id: '2', title: 'Consulting Package', company: 'Globex', value: 12000, stage: 'proposal', lastActivityDays: 5, probability: 0.5 },
    { id: '3', title: 'SaaS Subscription', company: 'Soylent Corp', value: 8500, stage: 'negotiation', lastActivityDays: 1, probability: 0.8 },
    { id: '4', title: 'Training Module', company: 'Initech', value: 3000, stage: 'qualification', lastActivityDays: 10, probability: 0.2 }, // Rotting
    { id: '5', title: 'Annual Renewal', company: 'Umbrella Corp', value: 120000, stage: 'closed', lastActivityDays: 0, probability: 1.0 },
    { id: '6', title: 'Pilot Program', company: 'Cyberdyne', value: 15000, stage: 'proposal', lastActivityDays: 0, probability: 0.5 },
  ];

  deals = signal<Deal[]>(this.initialDeals);
  
  columns: KanbanColumn[] = [
    { id: 'col-1', title: 'Qualification', stage: 'qualification' },
    { id: 'col-2', title: 'Proposal Sent', stage: 'proposal' },
    { id: 'col-3', title: 'Negotiation', stage: 'negotiation' },
    { id: 'col-4', title: 'Closed Won', stage: 'closed' },
  ];

  // Weighted Forecast: Sum of (Value * Probability)
  forecastValue = computed(() => {
    return this.deals().reduce((acc, deal) => acc + (deal.value * deal.probability), 0);
  });

  // Pipeline Total Value
  totalPipelineValue = computed(() => {
    return this.deals().reduce((acc, deal) => acc + deal.value, 0);
  });

  // Action: Move deal
  moveDeal(dealId: string, newStage: Deal['stage']) {
    this.deals.update(currentDeals => 
      currentDeals.map(d => {
        if (d.id === dealId) {
          // Update probability based on new stage (simple logic for demo)
          let newProb = d.probability;
          switch (newStage) {
            case 'qualification': newProb = 0.2; break;
            case 'proposal': newProb = 0.5; break;
            case 'negotiation': newProb = 0.8; break;
            case 'closed': newProb = 1.0; break;
          }
          return { ...d, stage: newStage, probability: newProb, lastActivityDays: 0 }; // Reset rotting on move
        }
        return d;
      })
    );
  }
}
