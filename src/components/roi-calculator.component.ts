
import { Component, signal, computed } from '@angular/core';
import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roi-calculator',
  imports: [CommonModule, FormsModule, CurrencyPipe, DecimalPipe],
  template: `
    <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 font-sans">
      <div class="grid lg:grid-cols-12 min-h-[600px]">
        <!-- LEFT PANEL: INPUTS -->
        <div class="lg:col-span-5 bg-slate-50 p-6 lg:p-8 border-r border-slate-200 overflow-y-auto">
          <h2 class="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span class="material-symbols-outlined text-indigo-600">tune</span>
            Configure Metrics (INR)
          </h2>
          <!-- Section 1: Marketing Spend -->
          <div class="space-y-6 mb-8">
            <div class="flex justify-between items-end">
              <label class="text-sm font-semibold text-slate-600 uppercase tracking-wider">Monthly Ad Spend</label>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-200 space-y-4">
              <div>
                <label class="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                  <span class="text-blue-600 material-symbols-outlined text-[18px]">public</span> Meta Ads (FB/Insta)
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-2.5 text-slate-400">₹</span>
                  <input class="w-full pl-8 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-slate-700 font-medium" 
                         type="number" [(ngModel)]="spendMeta">
                </div>
              </div>
              <div>
                <label class="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                  <span class="text-blue-800 material-symbols-outlined text-[18px]">business_center</span> LinkedIn Ads
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-2.5 text-slate-400">₹</span>
                  <input class="w-full pl-8 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-slate-700 font-medium" 
                         type="number" [(ngModel)]="spendLinkedIn">
                </div>
              </div>
              <div>
                <label class="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1">
                  <span class="text-slate-500 material-symbols-outlined text-[18px]">newspaper</span> Old School / Events
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-2.5 text-slate-400">₹</span>
                  <input class="w-full pl-8 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-slate-700 font-medium" 
                         type="number" [(ngModel)]="spendOffline">
                </div>
              </div>
            </div>
          </div>
          <!-- Section 2: Sales Metrics -->
          <div class="space-y-6 mb-8">
            <div class="flex justify-between items-end">
              <label class="text-sm font-semibold text-slate-600 uppercase tracking-wider">Sales Performance</label>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-200 space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="text-xs text-slate-500 mb-1 block font-medium">Avg Deal Value (₹)</label>
                  <div class="relative">
                    <span class="absolute left-2 top-2 text-slate-400 text-xs">₹</span>
                    <input class="w-full pl-6 pr-2 py-2 text-sm border border-slate-200 rounded-lg focus:ring-indigo-500 font-bold text-slate-700" 
                           type="number" [(ngModel)]="dealValue">
                  </div>
                </div>
                <div>
                  <label class="text-xs text-slate-500 mb-1 block font-medium">Total Leads / Month</label>
                  <input class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-indigo-500 font-bold text-slate-700" 
                         type="number" [(ngModel)]="totalLeads">
                </div>
              </div>
              <div class="pt-2 border-t border-slate-100">
                <label class="text-sm font-medium text-slate-700 mb-2 block flex justify-between items-center">
                  <span>Deals Closed / Month</span>
                  <div class="relative tooltip-trigger cursor-help group">
                    <span class="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded border border-indigo-100">
                      Implied Rate: {{ currentImpliedRate() | number:'1.1-1' }}%
                    </span>
                    <div class="tooltip-content hidden group-hover:block absolute bottom-full right-0 mb-2 w-48 bg-slate-800 text-white text-[10px] p-2 rounded shadow-lg z-10">
                      Calculated automatically as: <br> (Closed Deals ÷ Total Leads) × 100
                    </div>
                  </div>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-2.5 text-slate-400 material-symbols-outlined text-[20px]">check_circle</span>
                  <input class="w-full pl-10 pr-3 py-2 border-2 border-indigo-100 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-indigo-900 font-bold text-lg" 
                         type="number" [(ngModel)]="closedDeals">
                </div>
                <div class="mt-3 bg-slate-50 p-2 rounded border border-slate-100">
                  <p class="text-[10px] text-slate-500 leading-tight">
                    <span class="font-semibold text-slate-600">Why calculated?</span> This rate reflects your <em>actual</em> current performance based on the deals you entered above, rather than a hypothetical target.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT PANEL: DASHBOARD -->
        <div class="lg:col-span-7 bg-white p-6 lg:p-10 relative flex flex-col">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-slate-800">ROI Dashboard (INR)</h2>
            <p class="text-slate-500 text-sm">Real-time analysis of your marketing efficiency</p>
          </div>
          
          <!-- Top Metrics Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <!-- Revenue Card -->
            <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <p class="text-sm font-medium text-slate-500 mb-1">Monthly Revenue</p>
              <h3 class="text-3xl font-bold text-slate-800 tracking-tight">{{ currentRevenue() | currency:'INR':'symbol':'1.0-0' }}</h3>
              <div class="w-full bg-slate-100 h-1.5 mt-3 rounded-full overflow-hidden">
                <div class="h-full bg-indigo-500 w-full"></div>
              </div>
            </div>
            <!-- ROI Card -->
            <div class="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 shadow-sm relative overflow-visible group hover:shadow-md transition-all">
              <div class="absolute right-0 top-0 opacity-10 transform translate-x-2 -translate-y-2">
                <span class="material-symbols-outlined text-8xl text-indigo-600">trending_up</span>
              </div>
              <p class="text-sm font-medium text-slate-500 mb-1 flex items-center gap-1">
                Marketing ROI
                <span class="material-symbols-outlined text-[16px] text-slate-400 cursor-help group/tooltip relative">
                    help
                    <span class="tooltip-content hidden group-hover/tooltip:block absolute left-0 bottom-full mb-2 w-64 bg-slate-800 text-white text-[11px] p-3 rounded shadow-lg z-20 font-normal">
                      Calculated as: <br>
                      <span class="text-indigo-200 font-mono">(Revenue - Total Ad Spend) / Total Ad Spend</span>
                      <br><br>
                      A value of <strong>3x</strong> means you made ₹3 profit for every ₹1 spent on ads.
                    </span>
                </span>
              </p>
              <h3 class="text-3xl font-bold tracking-tight" [class.text-red-600]="currentRoiVal() < 0" [class.text-indigo-700]="currentRoiVal() >= 0">
                {{ currentRoiVal() | number:'1.1-1' }}x
              </h3>
              <div class="mt-2 text-xs font-medium text-slate-400 flex items-center gap-1">
                <span class="material-symbols-outlined text-[14px]">info</span>
                <span>Returns per ₹1 spent</span>
              </div>
            </div>
            <!-- CPA Card -->
            <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <p class="text-sm font-medium text-slate-500 mb-1 flex items-center gap-1">
                Cost Per Acquisition
                <span class="material-symbols-outlined text-[16px] text-slate-400 cursor-help group/cpa-tooltip relative">
                    help
                    <span class="tooltip-content hidden group-hover/cpa-tooltip:block absolute right-0 top-full mt-2 w-64 bg-slate-800 text-white text-[11px] p-3 rounded shadow-lg z-20 font-normal">
                      <strong>CPA = Total Spend / Deals</strong><br>
                      The cost to acquire one paying customer. See full explanation below.
                    </span>
                </span>
              </p>
              <h3 class="text-3xl font-bold text-slate-800 tracking-tight">{{ currentCpa() | currency:'INR':'symbol':'1.0-0' }}</h3>
              <p class="mt-2 text-xs text-slate-500">Total Spend / Deals</p>
            </div>
          </div>

          <!-- The Revenue Leakage Visualizer -->
          <div class="flex-1 bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-6 relative overflow-hidden">
            <div class="flex justify-between items-start mb-4 z-10 relative">
              <div>
                <h3 class="font-bold text-slate-800 flex items-center gap-2">
                  Revenue Leakage Analysis
                  <span class="material-symbols-outlined text-slate-400 text-sm cursor-help group/leak relative">
                    help
                    <span class="tooltip-content hidden group-hover/leak:block absolute top-full left-0 mt-2 w-64 bg-slate-800 text-white text-[11px] p-3 rounded shadow-lg z-20 font-normal">
                      This chart estimates the revenue you are currently losing based on industry standard conversion drops for manual processes.
                    </span>
                  </span>
                </h3>
                <p class="text-xs text-slate-500 mt-1">Where is your money actually going?</p>
              </div>
              <div class="text-right">
                <span class="block text-2xl font-bold text-red-600">{{ totalMonthlyLoss() | currency:'INR':'symbol':'1.0-0' }}</span>
                <span class="text-[10px] text-red-400 font-medium uppercase tracking-wide">Total Monthly Loss</span>
              </div>
            </div>
            
            <!-- Charts / Bars for Leakage -->
            <div class="space-y-6 z-10 relative mb-6">
              <!-- 1. Slow Follow-up Loss -->
              <div class="relative group">
                <div class="flex justify-between text-xs mb-1">
                  <span class="font-medium text-slate-600 flex items-center gap-1">
                    <span class="material-symbols-outlined text-[16px] text-orange-500">timer</span>
                    Lost due to Slow Follow-up
                  </span>
                  <span class="font-bold text-red-600">{{ revenueLostSpeed() | currency:'INR':'symbol':'1.0-0' }}</span>
                </div>
                <div class="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div class="h-full bg-red-400 transition-all duration-700" [style.width]="lostSpeedBarWidth()"></div>
                </div>
              </div>
              <!-- 2. Lack of Persistence Loss -->
              <div class="relative group">
                <div class="flex justify-between text-xs mb-1">
                  <span class="font-medium text-slate-600 flex items-center gap-1">
                    <span class="material-symbols-outlined text-[16px] text-red-500">call_missed_outgoing</span>
                    Lost due to "Giving Up"
                  </span>
                  <span class="font-bold text-red-600">{{ revenueLostFollowUp() | currency:'INR':'symbol':'1.0-0' }}</span>
                </div>
                <div class="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div class="h-full bg-red-600 transition-all duration-700" [style.width]="lostFollowupBarWidth()"></div>
                </div>
              </div>
            </div>

            <!-- Detailed Explanation -->
            <div class="bg-indigo-50/50 rounded-xl p-4 border border-indigo-100 z-10 relative">
              <h4 class="text-xs font-bold text-indigo-900 mb-2 uppercase tracking-wide">How is this calculated?</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <p class="text-[11px] text-indigo-900 font-semibold mb-1">1. Slow Follow-up Loss</p>
                  <p class="text-[10px] text-slate-600 leading-relaxed">
                    <span class="font-mono bg-white px-1 rounded border border-indigo-100">Deals × 0.25</span><br>
                    Industry data shows a <strong>25% conversion drop</strong> when response time exceeds 5 minutes.
                  </p>
                </div>
                <div>
                  <p class="text-[11px] text-indigo-900 font-semibold mb-1">2. Giving Up Too Soon</p>
                  <p class="text-[10px] text-slate-600 leading-relaxed">
                    <span class="font-mono bg-white px-1 rounded border border-indigo-100">Deals × 0.30</span><br>
                    Automated persistent follow-ups typically recover an additional <strong>30% revenue</strong> that is currently ignored.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Insights Section -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start gap-3">
              <span class="material-symbols-outlined text-blue-600 bg-white rounded-full p-1 shadow-sm">timer_off</span>
              <div>
                <h4 class="font-bold text-sm text-blue-900">The 5-Minute Rule</h4>
                <p class="text-xs text-blue-700 mt-1 leading-relaxed">
                   Leads contacted within 5 mins are <strong>21x</strong> more likely to qualify.
                </p>
              </div>
            </div>
            <div class="bg-purple-50 p-4 rounded-xl border border-purple-100 flex items-start gap-3">
              <span class="material-symbols-outlined text-purple-600 bg-white rounded-full p-1 shadow-sm">repeat_one</span>
              <div>
                <h4 class="font-bold text-sm text-purple-900">The Persistence Gap</h4>
                <p class="text-xs text-purple-700 mt-1 leading-relaxed">
                   44% of salespeople give up after one follow-up, yet 80% of sales require 5.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `
})
export class RoiCalculatorComponent {
  // Inputs
  spendMeta = signal(10000);
  spendLinkedIn = signal(20000);
  spendOffline = signal(15000);
  
  dealValue = signal(15000);
  totalLeads = signal(500);
  closedDeals = signal(50);

  // Computeds
  totalAdSpend = computed(() => (this.spendMeta() || 0) + (this.spendLinkedIn() || 0) + (this.spendOffline() || 0));
  
  currentRevenue = computed(() => (this.closedDeals() || 0) * (this.dealValue() || 0));
  
  currentImpliedRate = computed(() => {
    const leads = this.totalLeads() || 0;
    const closed = this.closedDeals() || 0;
    return leads > 0 ? (closed / leads) * 100 : 0;
  });

  currentRoiVal = computed(() => {
    const spend = this.totalAdSpend();
    const revenue = this.currentRevenue();
    return spend > 0 ? (revenue - spend) / spend : 0;
  });

  currentCpa = computed(() => {
    const spend = this.totalAdSpend();
    const closed = this.closedDeals() || 0;
    return closed > 0 ? spend / closed : 0;
  });

  // Leakage Logic (based on 25% and 30% benchmarks)
  dealsLostToSpeed = computed(() => (this.closedDeals() || 0) * 0.25);
  dealsLostToFollowUp = computed(() => (this.closedDeals() || 0) * 0.30);
  
  revenueLostSpeed = computed(() => this.dealsLostToSpeed() * (this.dealValue() || 0));
  revenueLostFollowUp = computed(() => this.dealsLostToFollowUp() * (this.dealValue() || 0));
  
  totalMonthlyLoss = computed(() => this.revenueLostSpeed() + this.revenueLostFollowUp());

  // Projections for visual scaling (using projected max to scale bars)
  projectedRevenue = computed(() => this.currentRevenue() + this.totalMonthlyLoss());
  
  lostSpeedBarWidth = computed(() => {
    const max = this.projectedRevenue() || 1;
    return Math.min(100, (this.revenueLostSpeed() / max) * 100) + '%';
  });

  lostFollowupBarWidth = computed(() => {
    const max = this.projectedRevenue() || 1;
    return Math.min(100, (this.revenueLostFollowUp() / max) * 100) + '%';
  });
}
