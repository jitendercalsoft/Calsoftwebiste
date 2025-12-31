
import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FeatureCardComponent } from '../components/feature-card.component';
import { KanbanBoardComponent } from '../components/kanban-board.component';
import { FormsModule } from '@angular/forms';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  imgSrc: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, FeatureCardComponent, KanbanBoardComponent, FormsModule],
  template: `
  <!-- Split Layout Hero Section (Salesforce Style) -->
  <header class="relative bg-white pt-16 pb-24 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        
        <!-- Left: Copy -->
        <div class="max-w-2xl relative z-10">
           <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#ff5c35] text-xs font-bold uppercase tracking-wide mb-6">
            <span class="w-2 h-2 rounded-full bg-[#ff5c35] animate-pulse"></span>
            #1 Execution-First CRM
          </div>
          
          <h1 class="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
            The Execution-First CRM. <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5c35] to-orange-500">Start Selling in 1 Hour.</span>
          </h1>
          
          <p class="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
            Stop waiting weeks to go live. Calsoft CRM shifts your team from <strong>reactive</strong> data entry to <strong>proactive</strong> revenue generation. Automate the hustle and close deals—fast.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <button routerLink="/pricing" class="px-8 py-4 bg-[#ff5c35] text-white rounded text-base font-bold hover:bg-[#e04824] transition-all shadow-md active:translate-y-px text-center">
              Start Free Trial
            </button>
            <button routerLink="/pipeline" class="px-8 py-4 bg-white text-slate-700 border border-slate-300 rounded text-base font-bold hover:bg-slate-50 transition-colors text-center">
              Get a Demo
            </button>
          </div>
          <p class="mt-4 text-xs text-slate-500">Free 14-day trial • No credit card required • Setup in 60 mins</p>
        </div>

        <!-- Right: Visual (CSS Dashboard) -->
        <div class="relative lg:h-[600px] flex items-center justify-center">
           <!-- Decorative blob -->
           <div class="absolute inset-0 bg-gradient-to-tr from-orange-100 to-indigo-50 rounded-full blur-3xl opacity-60 transform scale-75"></div>
           
           <!-- The Product Mockup (Scaled to fit column) -->
           <div class="relative w-full max-w-[650px] transform transition-transform hover:scale-[1.01] duration-500">
               <div class="rounded-xl bg-white p-2 shadow-2xl ring-1 ring-slate-900/10 backdrop-blur-sm bg-opacity-90">
                  <div class="rounded-lg overflow-hidden bg-slate-50 border border-slate-200 aspect-[16/10] relative flex">
                     
                     <!-- Sidebar -->
                     <div class="w-16 border-r border-slate-200 bg-[#1e293b] flex flex-col items-center py-4 space-y-4">
                        <div class="w-8 h-8 bg-[#ff5c35] rounded-lg"></div>
                        <div class="w-full h-px bg-slate-700 my-2"></div>
                        <div class="w-6 h-6 rounded bg-slate-600 opacity-50"></div>
                        <div class="w-6 h-6 rounded bg-slate-600 opacity-50"></div>
                        <div class="w-6 h-6 rounded bg-slate-600 opacity-50"></div>
                        <div class="mt-auto w-6 h-6 rounded-full bg-slate-500"></div>
                     </div>

                     <!-- Main Content -->
                     <div class="flex-1 flex flex-col min-w-0">
                        <!-- Header -->
                        <div class="h-12 border-b border-slate-200 bg-white flex items-center justify-between px-6">
                           <div class="font-bold text-slate-700 text-sm">Sales Dashboard</div>
                           <div class="flex gap-2">
                              <div class="h-8 px-3 bg-[#ff5c35] text-white text-xs font-bold rounded flex items-center">Create Deal</div>
                           </div>
                        </div>

                        <!-- Dashboard Content -->
                        <div class="p-6 overflow-hidden bg-slate-50/50 flex-1">
                           <!-- Stats Row -->
                           <div class="grid grid-cols-3 gap-4 mb-6">
                              <div class="bg-white p-4 rounded border border-slate-200 shadow-sm">
                                 <div class="text-[10px] text-slate-400 uppercase font-bold mb-1">Total Pipeline</div>
                                 <div class="text-xl font-bold text-slate-800">$452k</div>
                              </div>
                              <div class="bg-white p-4 rounded border border-slate-200 shadow-sm">
                                 <div class="text-[10px] text-slate-400 uppercase font-bold mb-1">Deals Won</div>
                                 <div class="text-xl font-bold text-slate-800">18</div>
                              </div>
                              <div class="bg-white p-4 rounded border border-slate-200 shadow-sm">
                                 <div class="text-[10px] text-slate-400 uppercase font-bold mb-1">Win Rate</div>
                                 <div class="text-xl font-bold text-slate-800">32%</div>
                              </div>
                           </div>

                           <!-- Pipeline Columns -->
                           <div class="grid grid-cols-3 gap-4 h-full pb-6">
                              <!-- Column 1 -->
                              <div class="bg-slate-100 rounded p-2 border border-slate-200">
                                 <div class="text-xs font-bold text-slate-600 mb-3 px-1">Qualification</div>
                                 <div class="bg-white p-3 rounded shadow-sm border border-slate-200 mb-2 border-l-2 border-l-blue-500">
                                    <div class="h-2 w-16 bg-slate-800 rounded mb-2"></div>
                                    <div class="h-1.5 w-10 bg-slate-300 rounded"></div>
                                 </div>
                                  <div class="bg-white p-3 rounded shadow-sm border border-slate-200 mb-2 border-l-2 border-l-blue-500">
                                    <div class="h-2 w-20 bg-slate-800 rounded mb-2"></div>
                                    <div class="h-1.5 w-8 bg-slate-300 rounded"></div>
                                 </div>
                              </div>

                              <!-- Column 2 -->
                              <div class="bg-slate-100 rounded p-2 border border-slate-200">
                                 <div class="text-xs font-bold text-slate-600 mb-3 px-1">Proposal</div>
                                 <div class="bg-white p-3 rounded shadow-sm border border-slate-200 mb-2 border-l-2 border-l-orange-500 relative">
                                    <div class="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                    <div class="h-2 w-24 bg-slate-800 rounded mb-2"></div>
                                    <div class="h-1.5 w-12 bg-slate-300 rounded mb-2"></div>
                                    <div class="h-3 w-8 bg-green-100 rounded text-[8px] flex items-center justify-center text-green-700 font-bold">$45k</div>
                                 </div>
                              </div>
                              
                               <!-- Column 3 -->
                              <div class="bg-slate-100 rounded p-2 border border-slate-200">
                                 <div class="text-xs font-bold text-slate-600 mb-3 px-1">Negotiation</div>
                                 <div class="bg-white p-3 rounded shadow-sm border border-slate-200 mb-2 border-l-2 border-l-green-500">
                                    <div class="h-2 w-16 bg-slate-800 rounded mb-2"></div>
                                    <div class="h-1.5 w-10 bg-slate-300 rounded"></div>
                                 </div>
                              </div>

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
           </div>
        </div>

      </div>
    </div>
  </header>

  <!-- Social Proof Strip -->
  <section class="border-y border-slate-100 bg-slate-50 py-10">
     <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted by 2,000+ scaling companies</p>
        <div class="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale">
            <span class="text-xl font-bold text-slate-800 font-serif">ACME Corp</span>
            <span class="text-xl font-bold text-slate-800 italic">Globex</span>
            <span class="text-xl font-bold text-slate-800 tracking-tighter">Soylent</span>
            <span class="text-xl font-bold text-slate-800 font-mono">Initech</span>
            <span class="text-xl font-bold text-slate-800">Umbrella</span>
        </div>
     </div>
  </section>

  <!-- Interactive Demo Section -->
  <section id="demo" class="py-20 bg-slate-50 border-y border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-slate-900 mb-4">Experience the Visual Pipeline</h2>
        <p class="text-slate-600 max-w-2xl mx-auto">
          Drag and drop deals to see weighted forecasting in action. 
          See how easy it is to manage your sales process.
        </p>
      </div>
      
      <!-- The actual app demo container -->
      <div class="bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 md:p-4 h-[600px] overflow-hidden relative">
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"></div>
        <app-kanban-board></app-kanban-board>
      </div>
    </div>
  </section>

  <!-- Features Grid -->
  <section id="features" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Everything you need to execute</h2>
        <p class="text-xl text-slate-500">Powerful features designed to make you proactive.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Feature: Lead Management -->
        <a routerLink="/lead-management" class="group block h-full">
          <app-feature-card 
            class="h-full block transition-transform duration-300 group-hover:-translate-y-2 cursor-pointer"
            title="Lead Management" 
            description="Capture leads from all channels, organize them intelligently, and automate routing to ensure no opportunity is missed."
            [highlights]="['Omni-Channel Lead Capture', 'Smart Lead Assignment', 'Automated Nurturing']">
            <div icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
          </app-feature-card>
        </a>

        <!-- Feature 1: Visual Pipeline -->
        <a routerLink="/pipeline" class="group block h-full">
          <app-feature-card 
            class="h-full block transition-transform duration-300 group-hover:-translate-y-2 cursor-pointer"
            title="Visual Pipeline" 
            description="A clear, Kanban-style view of your entire sales landscape. Identify rotting deals instantly."
            [highlights]="['Drag & Drop Interface', 'Rotting Deal Indicators', 'Weighted Forecasting']">
            <div icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 7v7"/><path d="M16 7v7"/><path d="M12 7v7"/></svg>
            </div>
          </app-feature-card>
        </a>

        <!-- Feature 2: Proactive Follow-Up -->
        <a routerLink="/follow-up" class="group block h-full">
          <app-feature-card 
            class="h-full block transition-transform duration-300 group-hover:-translate-y-2 cursor-pointer"
            title="Proactive Follow-Up" 
            description="Be proactive, not reactive. The system chases leads for you with smart reminders and instant engagement triggers."
            [highlights]="['Smart Task Generation', 'Speed-to-Lead Triggers', 'Long-tail Drip Nurturing']">
            <div icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/><path d="m15 5 3 3"/></svg>
            </div>
          </app-feature-card>
        </a>

        <!-- Feature 3: Sales Sequencing -->
        <a routerLink="/sequencing" class="group block h-full">
          <app-feature-card 
            class="h-full block transition-transform duration-300 group-hover:-translate-y-2 cursor-pointer"
            title="Sales Sequencing" 
            description="Standardize your winning formula. Omnichannel cadences that stop automatically when a lead replies."
            [highlights]="['Email, WhatsApp & Call Steps', 'Auto-Stop on Reply', 'Repeatable Workflows']">
            <div icon>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
          </app-feature-card>
        </a>

        <!-- Feature 4: Real-Time Reports -->
        <a routerLink="/reports" class="group block h-full">
          <app-feature-card 
            class="h-full block transition-transform duration-300 group-hover:-translate-y-2 cursor-pointer"
            title="Real-Time Reports" 
            description="Gain total visibility with executive dashboards. Spot bottlenecks and optimize your sales process."
            [highlights]="['Conversion Rate Tracking', 'Bottleneck Analysis', 'Rep Performance Metrics']">
            <div icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
            </div>
          </app-feature-card>
        </a>

        <!-- Feature 5: WhatsApp CRM -->
        <a routerLink="/whatsapp" class="group block h-full">
          <app-feature-card 
            class="h-full block transition-transform duration-300 group-hover:-translate-y-2 cursor-pointer"
            title="WhatsApp CRM" 
            description="Engage leads 24/7 with automated chatbots, capture inquiries from social media, and manage conversations at scale."
            [highlights]="['Official Business API', 'Automated Lead Qualification', 'No-Code Chatbots']">
            <div icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            </div>
          </app-feature-card>
        </a>

      </div>
    </div>
  </section>

  <!-- Built for Teams Section (Updated for Startups/SMB/Mid-Market) -->
  <section class="py-20 bg-slate-50 border-y border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Designed for Every Stage of Growth</h2>
        <p class="text-xl text-slate-500">
          From your first deal to your IPO, Calsoft CRM adapts to your needs.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Startups -->
        <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
          <div class="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
             <span class="material-symbols-outlined text-3xl">rocket_launch</span>
          </div>
          <h3 class="font-bold text-xl text-slate-900 mb-3">Startups</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
             <strong>Move Fast.</strong> Get set up in <strong>1 hour</strong>, not months. Capture every early lead and close deals without the overhead of complex enterprise software.
          </p>
        </div>

        <!-- SMBs -->
        <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
          <div class="absolute top-0 right-0 bg-[#ff5c35] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
          <div class="w-14 h-14 bg-orange-100 text-[#ff5c35] rounded-full flex items-center justify-center mb-6">
             <span class="material-symbols-outlined text-3xl">storefront</span>
          </div>
          <h3 class="font-bold text-xl text-slate-900 mb-3">SMBs</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
             <strong>Build Structure.</strong> Standardize your sales process. Use automated follow-ups and pipelines to turn a chaotic sales floor into a predictable revenue machine.
          </p>
        </div>

        <!-- Mid-Market -->
        <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
          <div class="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-6">
             <span class="material-symbols-outlined text-3xl">domain</span>
          </div>
          <h3 class="font-bold text-xl text-slate-900 mb-3">Mid-Market</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
             <strong>Scale Power.</strong> Advanced reporting, role-based security, and custom integrations give you the control of a legacy CRM with the agility of a modern platform.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- How it Works Section -->
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-slate-900">How Calsoft CRM Works</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center relative">
        <!-- Connecting lines -->
        <div class="hidden lg:block absolute top-1/2 left-0 w-full h-px -mt-4">
          <div class="max-w-3xl mx-auto h-px border-t border-dashed border-slate-300"></div>
        </div>
        
        <!-- Step 1 -->
        <div class="flex flex-col items-center z-10">
          <div class="w-20 h-20 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mb-4 shadow-sm">
            <span class="text-4xl">📥</span>
          </div>
          <h3 class="font-bold text-slate-900 mb-2">1. Capture Every Lead</h3>
          <p class="text-sm text-slate-600">Collect leads from websites, ads, WhatsApp, and social platforms in one place.</p>
        </div>
        <!-- Step 2 -->
        <div class="flex flex-col items-center z-10">
          <div class="w-20 h-20 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mb-4 shadow-sm">
            <span class="text-4xl">🗂️</span>
          </div>
          <h3 class="font-bold text-slate-900 mb-2">2. Organize & Assign</h3>
          <p class="text-sm text-slate-600">Manage leads, assign ownership, and track progress across your pipeline.</p>
        </div>
        <!-- Step 3 -->
        <div class="flex flex-col items-center z-10">
          <div class="w-20 h-20 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mb-4 shadow-sm">
            <span class="text-4xl">⏰</span>
          </div>
          <h3 class="font-bold text-slate-900 mb-2">3. Proactive Follow-Up</h3>
          <p class="text-sm text-slate-600">The system creates follow-ups and sets reminders, ensuring you stay consistent.</p>
        </div>
        <!-- Step 4 -->
        <div class="flex flex-col items-center z-10">
          <div class="w-20 h-20 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mb-4 shadow-sm">
            <span class="text-4xl">🎯</span>
          </div>
          <h3 class="font-bold text-slate-900 mb-2">4. Track, Analyze & Close</h3>
          <p class="text-sm text-slate-600">Use real-time reports and dashboards to improve performance and close more deals.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section class="py-20 bg-slate-50 border-t border-slate-200">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-slate-900">Why Teams Choose Calsoft CRM</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        <div class="flex items-start gap-3">
          <span class="material-symbols-outlined text-green-500 mt-1">check_circle</span>
          <p class="text-slate-700">Simple, no-code setup in under 1 hour</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="material-symbols-outlined text-green-500 mt-1">check_circle</span>
          <p class="text-slate-700">User-friendly interface for sales teams</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="material-symbols-outlined text-green-500 mt-1">check_circle</span>
          <p class="text-slate-700">Powerful pipeline & reporting tools</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="material-symbols-outlined text-green-500 mt-1">check_circle</span>
          <p class="text-slate-700">WhatsApp and omni-channel lead management</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="material-symbols-outlined text-green-500 mt-1">check_circle</span>
          <p class="text-slate-700">Flexible workflows without forced automation</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="material-symbols-outlined text-green-500 mt-1">check_circle</span>
          <p class="text-slate-700">Transparent pricing with scalable plans</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Big Stats Section -->
  <section class="py-24 bg-slate-900 text-white relative overflow-hidden">
     <!-- Abstract cubes/shapes -->
     <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
     
     <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 class="text-3xl font-bold mb-16">Results that speak for themselves</h2>
        
        <div class="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-700">
           <div class="p-8">
              <div class="text-5xl md:text-6xl font-extrabold text-[#ff5c35] mb-4">2.5x</div>
              <p class="text-lg text-slate-300 font-medium">Increase in lead velocity</p>
           </div>
           <div class="p-8">
              <div class="text-5xl md:text-6xl font-extrabold text-blue-500 mb-4">40%</div>
              <p class="text-lg text-slate-300 font-medium">Reduction in sales cycle time</p>
           </div>
           <div class="p-8">
              <div class="text-5xl md:text-6xl font-extrabold text-green-500 mb-4">32</div>
              <p class="text-lg text-slate-300 font-medium">Years of enterprise excellence</p>
           </div>
        </div>
     </div>
  </section>

  <!-- Integrations Section -->
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Connect Your Favorite Tools</h2>
        <p class="text-xl text-slate-500 max-w-3xl mx-auto">
          Calsoft CRM works seamlessly with the apps you already use, creating a unified hub for your sales data.
        </p>
      </div>
      <div class="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 text-slate-500">
        <div class="flex items-center gap-3 text-lg font-semibold">
          <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.8 10.1c0-.7-.1-1.4-.2-2.1h-9.3v4h5.3c-.2 1.3-1 2.4-2.1 3.2v2.6h3.4c2-1.8 3.2-4.5 3.2-7.7z" fill="#4285F4"/><path d="M12.3 22c2.6 0 4.8-2.1 5.3-3.2l-3.4-2.6c-.8.5-1.9.9-3.2.9-2.4 0-4.5-1.6-5.2-3.8H2.2v2.7C4.2 19.9 7.9 22 12.3 22z" fill="#34A853"/><path d="M7.1 13.2c-.2-.6-.2-1.2-.2-1.8s0-1.2.2-1.8V7.1H2.2C1.4 8.7 1 10.3 1 12s.4 3.3 1.2 4.9l4.9-3.7z" fill="#FBBC05"/><path d="M12.3 5.4c1.4 0 2.7.5 3.7 1.4l3-3c-1.8-1.7-4.2-2.8-7-2.8C7.9 1 4.2 3.1 2.2 6.8l4.9 3.7c.7-2.2 2.8-3.8 5.2-3.8z" fill="#EA4335"/></svg>
          <span>Google</span>
        </div>
        <div class="flex items-center gap-3 text-lg font-semibold">
          <svg class="w-8 h-8 text-[#0062E0]" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.5c-.83 0-1 .17-1 .83V12h2.5l-.5 3H14v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
          <span>Meta</span>
        </div>
        <div class="flex items-center gap-3 text-lg font-semibold">
          <svg class="w-8 h-8" viewBox="0 0 24 24"><path fill="#36C5F0" d="M9.75 12a2.25 2.25 0 01-2.25-2.25V7.5a2.25 2.25 0 014.5 0v2.25A2.25 2.25 0 019.75 12z"/><path fill="#2EB67D" d="M12 9.75a2.25 2.25 0 012.25-2.25h2.25a2.25 2.25 0 010 4.5h-2.25A2.25 2.25 0 0112 9.75z"/><path fill="#ECB22E" d="M14.25 12a2.25 2.25 0 012.25 2.25v2.25a2.25 2.25 0 01-4.5 0v-2.25a2.25 2.25 0 012.25-2.25z"/><path fill="#E01E5A" d="M12 14.25a2.25 2.25 0 01-2.25 2.25H7.5a2.25 2.25 0 010-4.5h2.25a2.25 2.25 0 012.25 2.25z"/></svg>
          <span>Slack</span>
        </div>
         <div class="flex items-center gap-3 text-lg font-semibold">
          <svg class="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M16.23 7.77a5.32 5.32 0 00-7.53 0L2 14.47l1.41 1.41 2.12-2.12c1.43-1.42 3.8-1.31 5.4.31l.5.5c.39.39 1.02.39 1.41 0l7.07-7.07-1.41-1.41-5.3 5.3zM8.47 16.23a5.32 5.32 0 007.53 0L22 9.53l-1.41-1.41-2.12 2.12c-1.43 1.42-3.8 1.31-5.4-.31l-.5-.5a.996.996 0 00-1.41 0L4.1 16.4l1.41 1.41 2.96-2.58z"/></svg>
          <span>WhatsApp</span>
        </div>
        <div class="flex items-center gap-3 text-lg font-semibold">
          <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.32 12.38c.11.23-.02.51-.26.6l-1.99.78c-.23.1-.49-.02-.6-.24l-1.66-3.86-2.5 2.5a.501.501 0 01-.71 0l-1.41-1.41a.498.498 0 010-.71l2.5-2.5-3.86-1.66c-.22-.09-.34-.36-.24-.6l.78-1.99c.11-.24.37-.36.6-.26l9.36 3.93c.24.1.36.36.26.6l-1 2.25z"/></svg>
          <span>Calendly</span>
        </div>
      </div>
       <div class="text-center mt-16">
          <a routerLink="/integrations" class="px-8 py-4 bg-slate-100 text-slate-800 rounded-lg font-bold hover:bg-slate-200 transition-all border border-slate-200 shadow-sm text-base">
            Explore All Integrations
          </a>
        </div>
    </div>
  </section>

  <!-- Testimonial Slider Section -->
  <section class="py-24 bg-slate-900 relative overflow-hidden">
    <div class="absolute inset-0 opacity-[.03] bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')]"></div>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
            <h2 class="text-3xl font-bold text-white mb-2">Loved by Sales Leaders</h2>
            <p class="text-slate-300 mb-12 max-w-2xl mx-auto">Don't just take our word for it. Here's what our customers are saying.</p>
        </div>

        <div class="relative">
            <!-- Slider Viewport -->
            <div class="overflow-hidden">
                <!-- Sliding Track -->
                <div class="flex transition-transform duration-500 ease-in-out" [style.transform]="'translateX(-' + currentIndex() * 100 + '%)'">
                    @for (testimonial of testimonials; track testimonial.name) {
                    <div class="w-full flex-shrink-0 px-2">
                        <!-- Testimonial Card -->
                        <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden min-h-[320px] flex flex-col justify-center">
                            <div class="absolute -top-4 -left-4 text-slate-100 w-32 h-32">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
                                </svg>
                            </div>

                            <div class="relative z-10">
                                <blockquote class="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-8" [innerHTML]="testimonial.quote">
                                </blockquote>
                                <div class="flex items-center gap-4">
                                    <img class="w-16 h-16 rounded-full border-2 border-white/50 object-cover shadow-md" [src]="testimonial.imgSrc" [alt]="testimonial.name">
                                    <div>
                                        <p class="font-bold text-lg text-slate-900">{{ testimonial.name }}</p>
                                        <p class="text-slate-500">{{ testimonial.title }}, {{ testimonial.company }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>

            <!-- Navigation Buttons -->
            <button (click)="prevTestimonial()" aria-label="Previous testimonial" class="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 w-10 h-10 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>
            <button (click)="nextTestimonial()" aria-label="Next testimonial" class="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 w-10 h-10 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </button>
        </div>

        <!-- Navigation Dots -->
        <div class="mt-8 flex justify-center gap-3">
            @for (t of testimonials; track $index; let i = $index) {
            <button (click)="goToTestimonial(i)" aria-label="Go to slide {{ i + 1 }}" class="w-2.5 h-2.5 rounded-full transition-colors duration-200" 
            [class.bg-white]="currentIndex() === i" 
            [class.bg-slate-600]="currentIndex() !== i" 
            [class.hover:bg-slate-400]="currentIndex() !== i">
            </button>
            }
        </div>
    </div>
</section>

  <!-- Lead Capture Form Section -->
  <section class="py-24 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="bg-indigo-50 rounded-3xl p-8 md:p-12 border border-indigo-100 shadow-xl">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-extrabold text-slate-900 mb-4">Ready to Transform Your Sales?</h2>
          <p class="text-lg text-slate-600">
             Fill out the form below to schedule a personalized demo with our experts.
          </p>
        </div>

        <form class="space-y-6">
           <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                <input type="text" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#ff5c35] focus:border-transparent outline-none transition-all" placeholder="Jane">
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                <input type="text" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#ff5c35] focus:border-transparent outline-none transition-all" placeholder="Doe">
              </div>
           </div>
           
           <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
                <input type="email" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#ff5c35] focus:border-transparent outline-none transition-all" placeholder="jane@company.com">
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                <input type="tel" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#ff5c35] focus:border-transparent outline-none transition-all" placeholder="+1 (555) 000-0000">
              </div>
           </div>

           <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">Company Size</label>
              <select class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#ff5c35] focus:border-transparent outline-none transition-all bg-white">
                <option>1 - 10 employees</option>
                <option>11 - 50 employees</option>
                <option>51 - 200 employees</option>
                <option>201+ employees</option>
              </select>
           </div>
           
           <button type="submit" class="w-full bg-[#ff5c35] text-white font-bold text-lg py-4 rounded-lg hover:bg-[#e04824] transition-colors shadow-md active:translate-y-px">
             Request My Demo
           </button>
           <p class="text-xs text-center text-slate-500 mt-4">By submitting this form, you agree to our Terms of Service and Privacy Policy.</p>
        </form>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
        <p class="text-lg text-slate-500 mt-2">Have questions? We've got answers.</p>
      </div>
      <div class="space-y-4">
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
  </section>

  <!-- Final CTA (Condensed) -->
  <section class="py-12 bg-white text-center border-t border-slate-100">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-2xl font-bold text-slate-900 mb-4">Start growing with Calsoft CRM today</h2>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
         <button routerLink="/pricing" class="px-6 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-all">
            Get Started Free
         </button>
      </div>
    </div>
  </section>
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
export class HomeComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [
    {
      quote: "Calsoft CRM has been a game-changer. We've seen a <strong>40% reduction</strong> in our sales cycle time, and the visual pipeline gives me a level of clarity I never had with spreadsheets. It’s the enterprise power we needed, without the enterprise complexity.",
      name: 'Sarah Connor',
      title: 'Head of Sales',
      company: 'Cyberdyne Systems',
      imgSrc: 'https://picsum.photos/seed/sarah/100/100'
    },
    {
      quote: "The automation features are incredible. Our speed-to-lead has improved by <strong>2.5x</strong>, and no lead ever falls through the cracks. It's like having a digital assistant for every single sales rep on my team.",
      name: 'John Anderton',
      title: 'VP of Growth',
      company: 'PreCrime Inc.',
      imgSrc: 'https://picsum.photos/seed/john/100/100'
    },
    {
      quote: "As a startup, we need tools that are both powerful and affordable. Calsoft CRM's pricing is transparent and scales with us. The real-time reporting gives me the data I need to report to our investors with confidence.",
      name: 'Ellen Ripley',
      title: 'Founder & CEO',
      company: 'Weyland-Yutani Corp',
      imgSrc: 'https://picsum.photos/seed/ellen/100/100'
    }
  ];

  faqs: FaqItem[] = [
    {
      question: 'Can I import my existing data from a spreadsheet?',
      answer: 'Yes! Our importer allows you to easily map columns from any CSV or Excel file to your Calsoft CRM fields. For Enterprise customers, we offer a white-glove migration service.'
    },
    {
      question: 'How does the 14-day free trial work?',
      answer: 'You get full access to our Pro Growth plan for 14 days, no credit card required. You can import your data and use all the features. At the end of the trial, you can choose a plan or your account will be paused.'
    },
    {
      question: 'What integrations are available?',
      answer: 'We have native integrations with Google Workspace, Meta (Facebook/Instagram), WhatsApp, Slack, and more. We also support thousands of other apps through our Zapier integration. You can <a href="/integrations" class="text-indigo-600 font-semibold underline">explore all integrations here</a>.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use industry-standard encryption for data in transit and at rest. Our infrastructure is hosted on AWS, providing world-class security and reliability.'
    }
  ];

  currentIndex = signal(0);
  openFaqIndex = signal<number | null>(null);
  private intervalId?: number;

  ngOnInit() {
    this.startSlider();
  }

  ngOnDestroy() {
    this.stopSlider();
  }

  startSlider() {
    this.intervalId = window.setInterval(() => {
      this.currentIndex.update(current => (current + 1) % this.testimonials.length);
    }, 5000); // Change slide every 5 seconds
  }

  stopSlider() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  prevTestimonial() {
    this.stopSlider();
    this.currentIndex.update(current => (current - 1 + this.testimonials.length) % this.testimonials.length);
    this.startSlider();
  }

  nextTestimonial() {
    this.stopSlider();
    this.currentIndex.update(current => (current + 1) % this.testimonials.length);
    this.startSlider();
  }

  goToTestimonial(index: number) {
    this.stopSlider();
    this.currentIndex.set(index);
    this.startSlider();
  }

  toggleFaq(index: number) {
    this.openFaqIndex.update(current => (current === index ? null : index));
  }
}
