
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanBoardComponent } from '../components/kanban-board.component';

@Component({
  selector: 'app-pipeline',
  imports: [CommonModule, KanbanBoardComponent],
  template: `
    <div class="pt-10 pb-12 px-4 max-w-7xl mx-auto">
      <div class="mb-8 text-center max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-slate-900 mb-4">Visual Pipeline & Forecasting</h1>
        <p class="text-slate-600 text-lg mb-6">
          See your success before it happens. Gain a "bird’s-eye view" of your entire sales landscape, manage deals with drag-and-drop simplicity, and prioritize your revenue.
        </p>

        <!-- Demo Instructions -->
        <div class="bg-indigo-50 text-indigo-900 p-4 rounded-lg text-sm text-left max-w-2xl mx-auto border border-indigo-100 shadow-sm">
          <p class="font-bold mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>
            Interactive Demo Guide:
          </p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Drag & Drop:</strong> Move cards between columns. Notice the <em>Weighted Forecast</em> at the top updates automatically based on the stage probability.</li>
            <li><strong>Rotting Deals:</strong> Look for the <span class="w-2 h-2 rounded-full bg-red-500 inline-block align-middle"></span> red dot. This alerts you to deals inactive for > 7 days.</li>
          </ul>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-xl border border-slate-200 p-2 md:p-4 h-[700px] overflow-hidden flex flex-col relative mb-12">
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
        <h2 class="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">Can I customize the deal stages?</h3>
                <p class="text-slate-600 text-sm">Yes, you can rename, add, or remove stages to match your specific sales process. You can also assign custom win probabilities to each stage.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">How many pipelines can I create?</h3>
                <p class="text-slate-600 text-sm">The Basic plan includes 1 pipeline. Pro and Enterprise plans allow for multiple pipelines (e.g., separate pipelines for Direct Sales, Partnerships, and Renewals).</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">What happens to "Lost" deals?</h3>
                <p class="text-slate-600 text-sm">Lost deals are archived but remain in your database. You can filter them later for "Win-Back" campaigns or analysis.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">Does it work on mobile?</h3>
                <p class="text-slate-600 text-sm">Absolutely. Our mobile app (iOS and Android) gives you full access to your pipeline, so you can update deal stages while on the go.</p>
            </div>
        </div>
      </div>

    </div>
  `
})
export class PipelineComponent {}
