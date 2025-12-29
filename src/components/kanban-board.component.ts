
import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CrmService, Deal } from '../services/crm.service';

@Component({
  selector: 'app-kanban-board',
  imports: [CommonModule, CurrencyPipe],
  template: `
    <div class="p-6 bg-slate-100 rounded-xl border border-slate-200 shadow-inner h-full flex flex-col">
      
      <!-- Dashboard Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
          <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Pipeline Value</p>
          <p class="text-2xl font-bold text-slate-900">{{ crmService.totalPipelineValue() | currency:'USD':'symbol':'1.0-0' }}</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
          <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Weighted Forecast</p>
          <p class="text-2xl font-bold text-indigo-600">{{ crmService.forecastValue() | currency:'USD':'symbol':'1.0-0' }}</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex items-center justify-between">
           <div>
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Active Deals</p>
            <p class="text-2xl font-bold text-slate-900">{{ crmService.deals().length }}</p>
           </div>
           <div class="bg-indigo-50 p-2 rounded-full">
             <!-- Activity Icon -->
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
           </div>
        </div>
      </div>

      <!-- Kanban Columns -->
      <div class="flex-1 overflow-x-auto kanban-scroll">
        <div class="flex gap-4 min-w-[1000px] h-full pb-4">
          @for (col of crmService.columns; track col.id) {
            <div 
              class="flex-1 min-w-[240px] bg-slate-200/50 rounded-lg p-3 flex flex-col"
              (dragover)="onDragOver($event)"
              (drop)="onDrop($event, col.stage)">
              
              <div class="flex justify-between items-center mb-3 px-1">
                <h3 class="font-semibold text-slate-700 text-sm">{{ col.title }}</h3>
                <span class="bg-slate-300 text-slate-600 text-xs px-2 py-0.5 rounded-full font-medium">
                  {{ getDealsByStage(col.stage).length }}
                </span>
              </div>

              <div class="flex-1 flex flex-col gap-3">
                @for (deal of getDealsByStage(col.stage); track deal.id) {
                  <div 
                    class="bg-white p-4 rounded-lg shadow-sm border border-slate-200 cursor-move hover:shadow-md transition-shadow group relative"
                    draggable="true"
                    (dragstart)="onDragStart($event, deal.id)">
                    
                    <!-- Rotting Indicator -->
                    @if (deal.lastActivityDays > 7) {
                      <div class="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 animate-pulse" title="Rotting Deal: Inactive > 7 days"></div>
                    }

                    <p class="font-medium text-slate-900 text-sm mb-1">{{ deal.title }}</p>
                    <p class="text-slate-500 text-xs mb-2">{{ deal.company }}</p>
                    
                    <div class="flex justify-between items-center mt-3">
                      <span class="font-semibold text-indigo-600 text-sm">{{ deal.value | currency:'USD':'symbol':'1.0-0' }}</span>
                    </div>
                  </div>
                }
              </div>

            </div>
          }
        </div>
      </div>

    </div>
  `
})
export class KanbanBoardComponent {
  crmService = inject(CrmService);
  
  getDealsByStage(stage: string): Deal[] {
    return this.crmService.deals().filter(d => d.stage === stage);
  }

  onDragStart(event: DragEvent, dealId: string) {
    if (event.dataTransfer) {
      event.dataTransfer.setData('text/plain', dealId);
      event.dataTransfer.effectAllowed = 'move';
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault(); // Necessary to allow dropping
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
  }

  onDrop(event: DragEvent, newStage: Deal['stage']) {
    event.preventDefault();
    if (event.dataTransfer) {
      const dealId = event.dataTransfer.getData('text/plain');
      this.crmService.moveDeal(dealId, newStage);
    }
  }
}
