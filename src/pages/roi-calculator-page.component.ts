
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoiCalculatorComponent } from '../components/roi-calculator.component';

@Component({
  selector: 'app-roi-calculator-page',
  imports: [CommonModule, RoiCalculatorComponent],
  template: `
    <div class="pt-10 pb-12 px-4 max-w-7xl mx-auto">
      <div class="mb-10 text-center max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-slate-900 mb-4">Revenue Leakage Calculator</h1>
        <p class="text-slate-600 text-lg">
          Discover hidden revenue opportunities. Analyze your marketing spend, sales performance, and identify exactly where you are losing money in your pipeline.
        </p>
      </div>
      <app-roi-calculator></app-roi-calculator>
      
      <!-- Educational Content below the tool -->
      <div class="mt-16 border-t border-slate-200 pt-12">
        <h2 class="text-2xl font-bold text-slate-900 mb-6 text-center">Understanding Your Metrics</h2>
        <div class="grid md:grid-cols-2 gap-12 text-slate-600 leading-relaxed max-w-5xl mx-auto">
           <div>
             <h3 class="font-bold text-slate-900 mb-2">The Hidden Cost of Inaction</h3>
             <p class="mb-4">
               Most businesses focus on generating <em>more</em> leads to increase revenue. However, the fastest way to grow is often plugging the holes in your existing bucket. "Revenue Leakage" refers to the potential income lost due to inefficiencies in your sales process, primarily slow response times and lack of follow-up.
             </p>
             <h3 class="font-bold text-slate-900 mb-2">How We Calculate Leakage</h3>
             <p>
               Our model uses industry benchmarks (Harvard Business Review, InsideSales.com) which indicate that a 5-minute response time increases qualification odds by 21x, and that 80% of sales require 5+ follow-ups. If your current process is manual, you are likely losing the amounts shown above.
             </p>
           </div>
           
           <div class="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
             <h3 class="font-bold text-indigo-900 mb-3 text-lg flex items-center gap-2">
                <span class="material-symbols-outlined">monetization_on</span>
                What is Cost Per Acquisition (CPA)?
             </h3>
             <p class="mb-4 text-sm text-indigo-800 leading-relaxed">
               <strong>Cost Per Acquisition (CPA)</strong> is a vital financial metric that measures the aggregate cost to acquire one paying customer on a campaign or channel level. Unlike "Cost Per Lead" (CPL), which tracks inquiries, CPA tracks actual revenue-generating deals.
             </p>
             <div class="bg-white p-3 rounded-lg border border-indigo-100 mb-4 shadow-sm">
                <code class="text-xs font-mono text-indigo-600 font-bold block mb-1">Formula:</code>
                <p class="text-sm font-bold text-slate-800">CPA = Total Ad Spend / Number of Converted Deals</p>
             </div>
             <p class="mb-4 text-sm text-indigo-800 leading-relaxed">
               <strong>Why it matters:</strong> If your CPA is higher than your Average Deal Value (or Customer Lifetime Value), you are losing money on every sale.
             </p>
             <p class="text-sm text-indigo-800 leading-relaxed">
               <strong>Example:</strong> You spend ₹10,000 on ads. You get 50 leads. 2 of them buy a product worth ₹8,000 each.
             </p>
             <ul class="list-disc pl-5 mt-2 text-sm text-indigo-800 space-y-1">
                <li>Your Cost Per Lead (CPL) is ₹200.</li>
                <li>Your <strong>CPA</strong> is ₹5,000.</li>
                <li>Since ₹5,000 (Cost) < ₹8,000 (Revenue), you are profitable.</li>
             </ul>
           </div>
        </div>
      </div>
    </div>
  `
})
export class RoiCalculatorPageComponent {}
