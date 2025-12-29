import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lead-management',
  imports: [CommonModule],
  template: `
    <div class="pt-10 pb-12 px-4 max-w-7xl mx-auto">
      <div class="mb-10 text-center max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-slate-900 mb-4">Lead Management Software</h1>
        <p class="text-slate-600 text-lg">
          Convert prospects into loyal customers. Calsoft CRM helps you track every lead from first click to final sale with automated capture and built-in nurturing tools.
        </p>
      </div>

      <!-- Visual Diagram Section -->
      <div class="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12 mb-12 flex flex-col items-center">
        <h3 class="text-xl font-bold text-slate-800 text-center mb-2">Capture Leads from All Channels</h3>
        <p class="text-slate-500 text-center text-sm mb-8 max-w-2xl">
          Leads from web forms, ads, marketplaces (IndiaMart, JustDial), WhatsApp, and email flow automatically into one central system.
        </p>
        <div class="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl">
            <!-- Sources -->
            <div class="grid grid-cols-2 gap-4 w-full md:w-1/3">
                <div class="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center gap-2"><div class="text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg></div><span class="text-xs font-semibold">Web Forms</span></div>
                <div class="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center gap-2"><div class="text-red-500"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12.22 2h-4.44a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8.88a2 2 0 0 0 2-2v-8.88Z"/><path d="M18 2h2v2h-2z"/><path d="M15 5h5"/><path d="M15 8h5"/></svg></div><span class="text-xs font-semibold">Ad Forms</span></div>
                <div class="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center gap-2"><div class="text-green-500"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg></div><span class="text-xs font-semibold">WhatsApp</span></div>
                <div class="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center gap-2"><div class="text-orange-500"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></div><span class="text-xs font-semibold">Email</span></div>
            </div>
            <!-- Arrow -->
            <div class="text-slate-300 transform md:rotate-0 rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
            <!-- CRM -->
            <div class="flex-shrink-0 text-center">
                 <div class="w-24 h-24 bg-[#ff5c35] rounded-full flex items-center justify-center text-white shadow-lg mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                 </div>
                 <span class="font-bold text-lg text-slate-800">Calsoft CRM</span>
                 <p class="text-xs text-slate-500">Unified Lead Database</p>
            </div>
             <!-- Arrow -->
            <div class="text-slate-300 transform md:rotate-0 rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
            <!-- Team -->
            <div class="flex flex-col gap-4 w-full md:w-1/3">
                <div class="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center gap-2"><div class="text-indigo-500"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><span class="text-xs font-semibold">Sales Team</span></div>
                <div class="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center gap-2"><div class="text-indigo-500"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg></div><span class="text-xs font-semibold">Analytics</span></div>
            </div>
        </div>
      </div>

      <!-- SEO Content Area -->
      <div class="border-t border-slate-200 pt-12">
        <h2 class="text-2xl font-bold text-slate-900 mb-10 text-center">Capture, Nurture, and Convert Like a Pro</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-slate-600 leading-relaxed">
           <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
             <h3 class="font-bold text-slate-900 mb-2">Organize Leads & Prioritize</h3>
             <p class="text-sm">Consolidate leads into a unified database. Use smart filters, custom fields, and auto-assignment to route the hottest opportunities to the right reps instantly.</p>
           </div>
           <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
             <h3 class="font-bold text-slate-900 mb-2">Automate Routing & Alerts</h3>
             <p class="text-sm">Use round-robin distribution to assign leads. Reps get real-time notifications, and escalation rules prevent inquiries from falling through the cracks.</p>
           </div>
           <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
             <h3 class="font-bold text-slate-900 mb-2">Engage with Multichannel Outreach</h3>
             <p class="text-sm">Email, call, or WhatsApp leads directly from their record. Schedule automated drip campaigns to stay top-of-mind and build trust.</p>
           </div>
           <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
             <h3 class="font-bold text-slate-900 mb-2">One-Click Conversion</h3>
             <p class="text-sm">Once a lead is qualified, convert it into a deal or contact record with a single click, moving it seamlessly into your sales pipeline without losing any data.</p>
           </div>
           <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
             <h3 class="font-bold text-slate-900 mb-2">Source & Campaign ROI</h3>
             <p class="text-sm">Measure and compare ROI across all marketing channels. Know exactly which ad campaigns or marketplaces generate the most qualified prospects.</p>
           </div>
           <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
             <h3 class="font-bold text-slate-900 mb-2">Higher Conversion Rates</h3>
             <p class="text-sm">Organized pipelines and multi-touch engagement significantly boost close rates, turning more prospects into paying customers.</p>
           </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-20 pt-12 border-t border-slate-200">
        <h2 class="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">Which channels can I capture leads from?</h3>
                <p class="text-slate-600 text-sm">You can automatically capture leads from web forms, Google/Facebook Ads, marketplaces like IndiaMart and JustDial, WhatsApp, and email inboxes.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">How are leads assigned to my team?</h3>
                <p class="text-slate-600 text-sm">Leads can be assigned automatically using round-robin distribution or rule-based workflows based on territory, product interest, or other custom criteria.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">Does the system prevent duplicate leads?</h3>
                <p class="text-slate-600 text-sm">Yes, Calsoft CRM automatically detects and provides an option to merge duplicate lead entries, ensuring a clean and accurate database.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">Can I track which lead sources are most effective?</h3>
                <p class="text-slate-600 text-sm">Yes, our built-in analytics and real-time dashboards provide detailed ROI data for each lead source, helping you optimize your marketing spend.</p>
            </div>
        </div>
      </div>
    </div>
  `
})
export class LeadManagementComponent {}
