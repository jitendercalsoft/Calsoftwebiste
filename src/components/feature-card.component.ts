
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card',
  imports: [CommonModule],
  template: `
    <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      <div class="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
        <ng-content select="[icon]"></ng-content>
      </div>
      <h3 class="text-xl font-bold text-slate-900 mb-2">{{ title() }}</h3>
      <p class="text-slate-600 leading-relaxed text-sm flex-1">{{ description() }}</p>
      
      <div class="mt-4 pt-4 border-t border-slate-50">
        <ul class="space-y-2">
          @for (item of highlights(); track item) {
            <li class="flex items-start gap-2 text-xs text-slate-500">
              <svg class="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span>{{ item }}</span>
            </li>
          }
        </ul>
      </div>
    </div>
  `
})
export class FeatureCardComponent {
  title = input.required<string>();
  description = input.required<string>();
  highlights = input<string[]>([]);
}
