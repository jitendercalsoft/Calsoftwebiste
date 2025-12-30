
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanBoardComponent } from '../components/kanban-board.component';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-pipeline',
  imports: [CommonModule, KanbanBoardComponent],
  template: `
    <div class="pt-10 pb-12 px-4 max-w-7xl mx-auto">
      <div class="mb-12 text-center max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold text-slate-900 mb-6">Sales Pipeline</h1>
        <p class="text-slate-600 text-lg mb-8">
          See your success before it happens. Gain a "bird’s-eye view" of your entire sales landscape, manage deals with drag-and-drop simplicity, and prioritize your revenue.
        </p>
      </div>

      <!-- WHY YOU NEED A PIPELINE (Moved to Top) -->
      <div class="mb-16">
        <div class="bg-indigo-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <div class="relative z-10">
                <h2 class="text-3xl font-bold mb-6 text-center">Why Your Business Needs a Sales Pipeline</h2>
                <p class="text-center text-indigo-100 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
                    A sales pipeline isn't just a tracking tool—it's the visual roadmap of your revenue engine. It transforms a chaotic list of leads into a structured process that drives growth.
                </p>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Benefit 1 -->
                    <div class="bg-indigo-800/50 p-6 rounded-xl border border-indigo-700/50 backdrop-blur-sm hover:bg-indigo-800 transition-colors">
                        <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 text-white">
                            <span class="material-symbols-outlined">map</span>
                        </div>
                        <h3 class="font-bold text-white mb-2">A Clear Roadmap</h3>
                        <p class="text-sm text-indigo-200 leading-relaxed">
                            Standardize your sales process. Every rep knows exactly what steps to take next, reducing confusion and ensuring a consistent customer experience.
                        </p>
                    </div>

                    <!-- Benefit 2 -->
                    <div class="bg-indigo-800/50 p-6 rounded-xl border border-indigo-700/50 backdrop-blur-sm hover:bg-indigo-800 transition-colors">
                        <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 text-white">
                            <span class="material-symbols-outlined">trending_up</span>
                        </div>
                        <h3 class="font-bold text-white mb-2">Accurate Forecasting</h3>
                        <p class="text-sm text-indigo-200 leading-relaxed">
                            Knowing deal stages and closing probabilities lets you predict future revenue with precision rather than guesswork.
                        </p>
                    </div>

                    <!-- Benefit 3 -->
                    <div class="bg-indigo-800/50 p-6 rounded-xl border border-indigo-700/50 backdrop-blur-sm hover:bg-indigo-800 transition-colors">
                        <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 text-white">
                            <span class="material-symbols-outlined">speed</span>
                        </div>
                        <h3 class="font-bold text-white mb-2">Faster Sales Cycles</h3>
                        <p class="text-sm text-indigo-200 leading-relaxed">
                            Visualizing the pipeline highlights bottlenecks. Identify where deals stall and optimize your process to unblock revenue.
                        </p>
                    </div>

                    <!-- Benefit 4 -->
                    <div class="bg-indigo-800/50 p-6 rounded-xl border border-indigo-700/50 backdrop-blur-sm hover:bg-indigo-800 transition-colors">
                        <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 text-white">
                            <span class="material-symbols-outlined">person_check</span>
                        </div>
                        <h3 class="font-bold text-white mb-2">Resource Allocation</h3>
                        <p class="text-sm text-indigo-200 leading-relaxed">
                            Focus on the right deals. Reps can prioritize high-value opportunities that are moving forward, optimizing their time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <!-- Demo Instructions -->
      <div class="bg-indigo-50 text-indigo-900 p-4 rounded-lg text-sm text-left max-w-2xl mx-auto border border-indigo-100 shadow-sm mb-6">
        <p class="font-bold mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>
          Interactive Demo Guide:
        </p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Drag & Drop:</strong> Move cards between columns. Notice the <em>Weighted Forecast</em> at the top updates automatically based on the stage probability.</li>
          <li><strong>Rotting Deals:</strong> Look for the <span class="w-2 h-2 rounded-full bg-red-500 inline-block align-middle"></span> red dot. This alerts you to deals inactive for > 7 days.</li>
        </ul>
      </div>

      <!-- Kanban Board Visual -->
      <div class="bg-white rounded-2xl shadow-xl border border-slate-200 p-2 md:p-4 h-[700px] overflow-hidden flex flex-col relative mb-16">
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        <div class="flex-1 overflow-hidden">
           <app-kanban-board></app-kanban-board>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 7v7"/><path d="M16 7v7"/><path d="M12 7v7"/></svg>
          </div>
          <h3 class="font-bold text-lg mb-2">Kanban-Style Management</h3>
          <p class="text-slate-600 text-sm">Move deals through customizable stages: Qualification → Proposal → Negotiation → Closed.</p>
        </div>
        <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
           <div class="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
          </div>
          <h3 class="font-bold text-lg mb-2">Deal Health Indicators</h3>
          <p class="text-slate-600 text-sm">Identify "rotting" deals that haven't been touched in over 7 days with visual alerts.</p>
        </div>
        <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
           <div class="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <h3 class="font-bold text-lg mb-2">Weighted Forecasting</h3>
          <p class="text-slate-600 text-sm">Automatically calculate expected revenue based on deal probability at each stage.</p>
        </div>
      </div>

      <!-- SEO Content Area -->
      <div class="border-t border-slate-200 pt-12">
        <h2 class="text-2xl font-bold text-slate-900 mb-6 text-center">Why Top Sales Teams Switch to Visual Pipelines</h2>
        <div class="grid md:grid-cols-2 gap-12 text-slate-600 leading-relaxed">
           <div>
             <h3 class="font-bold text-slate-900 mb-2">Eliminate Pipeline Blindspots</h3>
             <p class="mb-4">
               Traditional spreadsheets hide critical information in rows and columns. A <strong>visual sales pipeline</strong> brings your data to life, allowing you to instantly spot bottlenecks, stalling deals, and uneven distribution of opportunities. Calsoft CRM's interface ensures that no high-value deal is ever hidden from view.
             </p>
             <h3 class="font-bold text-slate-900 mb-2">Forecast with Confidence</h3>
             <p>
               Predicting future revenue shouldn't be a guessing game. By assigning <strong>probability percentages</strong> to each stage of your sales cycle (e.g., Qualification = 20%, Proposal = 50%), our Weighted Forecasting engine gives you a realistic view of your expected cash flow, helping you make better hiring and budgeting decisions.
             </p>
           </div>
           <div>
             <h3 class="font-bold text-slate-900 mb-2">Prevent Revenue Leakage</h3>
             <p class="mb-4">
               The "Rotting Deal" feature is your early warning system. In sales, time kills all deals. By visually highlighting opportunities that haven't had activity in 7+ days, Calsoft CRM prompts your reps to re-engage or disqualify, ensuring your pipeline remains healthy and active.
             </p>
           </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-20 pt-12 border-t border-slate-200">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          <p class="text-lg text-slate-500 mt-2">Have questions? We've got answers.</p>
        </div>
        <div class="space-y-4 max-w-4xl mx-auto">
          @for (faq of faqs; track $index; let i = $index) {
            <div class="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300">
              <button (click)="toggleFaq(i)" class="w-full flex justify-between items-center text-left p-6">
                <span class="font-bold text-lg text-slate-900">{{ faq.question }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-slate-500 transition-transform duration-300" [class.rotate-180]="openFaqIndex() === i">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              @if (openFaqIndex() === i) {
                <div class="px-6 pb-6 text-slate-600 text-sm leading-relaxed animate-fade-in">
                  <p [innerHTML]="faq.answer"></p>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-5px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 0.3s ease-out forwards;
    }
  `]
})
export class PipelineComponent {
  openFaqIndex = signal<number | null>(null);

  faqs: FaqItem[] = [
    { question: 'Can I customize the deal stages?', answer: 'Yes, you can rename, add, or remove stages to match your specific sales process. You can also assign custom win probabilities to each stage.' },
    { question: 'How many pipelines can I create?', answer: 'The Basic plan includes 1 pipeline. Pro and Enterprise plans allow for multiple pipelines (e.g., separate pipelines for Direct Sales, Partnerships, and Renewals).' },
    { question: 'What happens to "Lost" deals?', answer: 'Lost deals are archived but remain in your database. You can filter them later for "Win-Back" campaigns or analysis.' },
    { question: 'Does it work on mobile?', answer: 'Absolutely. Our mobile app (iOS and Android) gives you full access to your pipeline, so you can update deal stages while on the go.' }
  ];

  toggleFaq(index: number) {
    this.openFaqIndex.update(current => (current === index ? null : index));
  }
}
