
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  template: `
     <div class="bg-slate-50 min-h-screen">
       
        <!-- Hero -->
        <div class="bg-slate-900 text-white pt-20 pb-24 relative overflow-hidden">
            <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <span class="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4 block">California Software Company Limited</span>
                <h1 class="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">32 Years of Innovation</h1>
                <p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    Calsoft is not just another startup. We are bringing decades of enterprise experience to the modern SaaS world.
                </p>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-24">
            
            <!-- Mission Card -->
            <div class="bg-white p-10 rounded-2xl shadow-xl border border-slate-200 text-center mb-20">
                <h2 class="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
                <p class="text-2xl md:text-3xl text-indigo-600 font-medium italic max-w-4xl mx-auto leading-normal">
                    "To democratize enterprise-grade tools for the SME market, helping you <span class="underline decoration-wavy decoration-indigo-300">realize your ideas.</span>"
                </p>
            </div>

            <!-- Timeline Section -->
            <div class="mb-24">
                <h2 class="text-3xl font-bold text-slate-900 text-center mb-16">A Legacy of Excellence</h2>
                
                <div class="relative">
                    <!-- Vertical Line -->
                    <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-100 hidden md:block"></div>

                    <!-- 1992 -->
                    <div class="flex flex-col md:flex-row justify-between items-center mb-16 md:mb-0">
                        <div class="w-full md:w-[45%] bg-white p-6 rounded-xl shadow-sm border border-slate-200 md:text-right">
                            <h3 class="text-2xl font-bold text-slate-900 mb-2">Inception</h3>
                            <p class="text-slate-600">Founded in Chennai as a pioneering IT solutions provider. Started with Chemoil Group MIS services, setting the foundation for data-driven excellence.</p>
                        </div>
                        <div class="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold z-10 border-4 border-slate-50 my-4 md:my-0 shadow-lg">1992</div>
                        <div class="w-full md:w-[45%]"></div>
                    </div>

                    <!-- 2000 -->
                    <div class="flex flex-col md:flex-row justify-between items-center mb-16 md:mb-0">
                        <div class="w-full md:w-[45%] order-2 md:order-1"></div>
                        <div class="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold z-10 border-4 border-slate-50 my-4 md:my-0 shadow-lg order-1 md:order-2">2000</div>
                        <div class="w-full md:w-[45%] bg-white p-6 rounded-xl shadow-sm border border-slate-200 order-3">
                            <h3 class="text-2xl font-bold text-slate-900 mb-2">Enterprise Foundation</h3>
                            <p class="text-slate-600">Established core enterprise frameworks. A significant milestone representing our commitment to transparency, governance, and long-term value.</p>
                        </div>
                    </div>

                    <!-- 2005 -->
                    <div class="flex flex-col md:flex-row justify-between items-center mb-16 md:mb-0">
                        <div class="w-full md:w-[45%] bg-white p-6 rounded-xl shadow-sm border border-slate-200 md:text-right">
                            <h3 class="text-2xl font-bold text-slate-900 mb-2">Global Expansion</h3>
                            <p class="text-slate-600">Opened offices in Dubai and acquired US entities, establishing a true global footprint to serve international markets.</p>
                        </div>
                        <div class="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold z-10 border-4 border-slate-50 my-4 md:my-0 shadow-lg">2005</div>
                        <div class="w-full md:w-[45%]"></div>
                    </div>

                    <!-- Today -->
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <div class="w-full md:w-[45%] order-2 md:order-1"></div>
                        <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold z-10 border-4 border-slate-50 my-4 md:my-0 shadow-lg order-1 md:order-2">NOW</div>
                        <div class="w-full md:w-[45%] bg-white p-6 rounded-xl shadow-lg border border-indigo-100 order-3">
                            <h3 class="text-2xl font-bold text-slate-900 mb-2">The SaaS Era</h3>
                            <p class="text-slate-600 mb-4">Under the leadership of <strong>Dr. Mahalingam Vasudevan</strong>, Calsoft pivots to product-led growth with Calsoft CRM, empowering SMBs worldwide.</p>
                            <span class="inline-block bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase">Product-Led Growth</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-y border-slate-200 py-12 bg-white rounded-xl shadow-sm px-8">
                <div class="text-center">
                    <div class="text-4xl font-bold text-indigo-600 mb-2">1992</div>
                    <div class="text-sm text-slate-500 font-semibold uppercase tracking-wide">Year Founded</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl font-bold text-indigo-600 mb-2">2000+</div>
                    <div class="text-sm text-slate-500 font-semibold uppercase tracking-wide">Customers</div>
                </div>
                 <div class="text-center">
                    <div class="text-4xl font-bold text-indigo-600 mb-2">Global</div>
                    <div class="text-sm text-slate-500 font-semibold uppercase tracking-wide">Presence</div>
                </div>
                 <div class="text-center">
                    <div class="text-4xl font-bold text-indigo-600 mb-2">SaaS</div>
                    <div class="text-sm text-slate-500 font-semibold uppercase tracking-wide">Focus</div>
                </div>
            </div>

            <!-- Target Audience -->
            <div class="text-center mb-12">
                 <h2 class="text-3xl font-bold text-slate-900 mb-12">Built For</h2>
                 <div class="grid md:grid-cols-3 gap-8 text-left">
                     <div class="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                         <div class="w-12 h-12 bg-blue-50 rounded-lg shadow-sm flex items-center justify-center text-blue-600 mb-4 font-bold text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                         </div>
                         <h3 class="text-xl font-bold text-slate-900 mb-2">Startups</h3>
                         <p class="text-slate-600">Agile tools that scale from 1 to 100 users without breaking the bank.</p>
                     </div>
                     <div class="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                         <div class="w-12 h-12 bg-indigo-50 rounded-lg shadow-sm flex items-center justify-center text-indigo-600 mb-4 font-bold text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                         </div>
                         <h3 class="text-xl font-bold text-slate-900 mb-2">SMBs</h3>
                         <p class="text-slate-600">Enterprise capabilities like workflow automation, democratized for small business.</p>
                     </div>
                     <div class="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                         <div class="w-12 h-12 bg-purple-50 rounded-lg shadow-sm flex items-center justify-center text-purple-600 mb-4 font-bold text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
                         </div>
                         <h3 class="text-xl font-bold text-slate-900 mb-2">Mid-Market</h3>
                         <p class="text-slate-600">Robust reporting, security, and integration for growing sales organizations.</p>
                     </div>
                 </div>
            </div>

         </div>
     </div>
  `
})
export class AboutComponent {}
