
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface SequenceStep {
  id: number;
  type: 'email' | 'call' | 'whatsapp' | 'wait' | 'linkedin';
  day: number;
  description: string;
}

@Component({
  selector: 'app-sequencing',
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <div class="relative bg-white overflow-hidden">
      <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div class="pt-20 pb-24 px-4 max-w-7xl mx-auto text-center relative z-10">
        <span class="inline-block py-1 px-3 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wide mb-6">Sales Engagement</span>
        <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          Turn Cold Leads into <br class="hidden md:block" /> <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Warm Conversations.</span>
        </h1>
        <p class="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Build predictable pipeline with multi-channel sales sequences. Automate emails, calls, WhatsApp, and tasks to engage prospects at scale—without losing the human touch.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="px-8 py-4 bg-purple-600 text-white rounded-lg text-base font-bold hover:bg-purple-700 transition-all shadow-lg active:translate-y-px">
              Start Building Sequences
            </button>
            <button class="px-8 py-4 bg-white text-slate-700 border border-slate-300 rounded-lg text-base font-bold hover:bg-slate-50 transition-colors">
              Watch Demo
            </button>
        </div>
      </div>
    </div>

    <!-- Main Content Container -->
    <div class="px-4 max-w-7xl mx-auto pb-24">
      
      <!-- Existing Value Props Grid -->
      <div class="grid md:grid-cols-3 gap-8 mb-24">
         <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <span class="material-symbols-outlined text-3xl">hub</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Multi-Channel Outreach</h3>
            <p class="text-slate-600 leading-relaxed">
              Don't rely on just email. Weave together <strong>Phone Calls</strong>, <strong>WhatsApp messages</strong>, <strong>LinkedIn tasks</strong>, and <strong>Emails</strong> into a single, cohesive narrative.
            </p>
         </div>
         <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div class="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
              <span class="material-symbols-outlined text-3xl">autopay</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Intelligent Automation</h3>
            <p class="text-slate-600 leading-relaxed">
              Set it and forget it. Leads automatically progress through steps. The moment they reply or book a meeting, the sequence <strong>stops automatically</strong> to prevent awkward overlap.
            </p>
         </div>
         <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div class="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
              <span class="material-symbols-outlined text-3xl">query_stats</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">A/B Testing & Analytics</h3>
            <p class="text-slate-600 leading-relaxed">
              Guesswork kills sales. Test subject lines, call scripts, and send times. Track open rates, click rates, and reply rates in real-time.
            </p>
         </div>
      </div>

      <!-- NEW SECTION: Why Calsoft CRM with Built-in Sequences? -->
      <div class="mb-24">
        <h2 class="text-3xl font-bold text-slate-900 mb-10 text-center">Why Calsoft CRM with Built-in Sequences?</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Card 1 -->
          <div class="bg-white p-6 rounded-xl border-2 border-slate-100 hover:border-blue-500 transition-colors text-center shadow-sm">
            <div class="w-14 h-14 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-3xl">alt_route</span>
            </div>
            <h3 class="font-bold text-lg text-slate-900 mb-3">Unified Workflow</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Contacts, leads, deals, and outreach automation — all in one place. No separate sequence tool or integration required.
            </p>
          </div>
          <!-- Card 2 -->
          <div class="bg-white p-6 rounded-xl border-2 border-slate-100 hover:border-blue-500 transition-colors text-center shadow-sm">
            <div class="w-14 h-14 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-3xl">schedule_send</span>
            </div>
            <h3 class="font-bold text-lg text-slate-900 mb-3">Automated Follow-ups</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Create and schedule sequences (emails / calls / WhatsApp / reminders), so leads are nurtured automatically.
            </p>
          </div>
          <!-- Card 3 -->
          <div class="bg-white p-6 rounded-xl border-2 border-slate-100 hover:border-blue-500 transition-colors text-center shadow-sm">
            <div class="w-14 h-14 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-3xl">groups</span>
            </div>
            <h3 class="font-bold text-lg text-slate-900 mb-3">Better Productivity</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Sales reps spend less time on repetitive tasks — they view, manage, and follow-up from a single platform.
            </p>
          </div>
          <!-- Card 4 -->
          <div class="bg-white p-6 rounded-xl border-2 border-slate-100 hover:border-blue-500 transition-colors text-center shadow-sm">
            <div class="w-14 h-14 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-3xl">insights</span>
            </div>
            <h3 class="font-bold text-lg text-slate-900 mb-3">Accurate Data & Tracking</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Lead & activity history, pipeline status and outreach logs are unified — giving real insight into sales performance.
            </p>
          </div>
        </div>
      </div>

      <!-- NEW SECTION: How It Works -->
      <div class="mb-24 py-12 bg-slate-50 rounded-3xl px-8">
        <h2 class="text-3xl font-bold text-slate-900 mb-12 text-center">How It Works: Simple 4-Step Process</h2>
        <div class="grid md:grid-cols-4 gap-8 relative">
          <!-- Step 1 -->
          <div class="flex flex-col items-center text-center relative z-10">
            <div class="w-16 h-16 bg-white border border-slate-200 shadow-md rounded-2xl flex items-center justify-center mb-4 text-purple-600">
               <span class="material-symbols-outlined text-3xl">group_add</span>
            </div>
            <h3 class="font-bold text-slate-900 mb-2">1. Add or Import Leads</h3>
            <p class="text-xs text-slate-600">Manually add leads or import from spreadsheets/forms securely into the CRM.</p>
          </div>
          <!-- Step 2 -->
          <div class="flex flex-col items-center text-center relative z-10">
             <div class="w-16 h-16 bg-white border border-slate-200 shadow-md rounded-2xl flex items-center justify-center mb-4 text-purple-600">
               <span class="material-symbols-outlined text-3xl">playlist_add_check</span>
            </div>
            <h3 class="font-bold text-slate-900 mb-2">2. Select or Build Sequence</h3>
            <p class="text-xs text-slate-600">Choose from pre-built sequences or configure your own for outreach + follow-ups.</p>
          </div>
          <!-- Step 3 -->
          <div class="flex flex-col items-center text-center relative z-10">
             <div class="w-16 h-16 bg-white border border-slate-200 shadow-md rounded-2xl flex items-center justify-center mb-4 text-purple-600">
               <span class="material-symbols-outlined text-3xl">rocket_launch</span>
            </div>
            <h3 class="font-bold text-slate-900 mb-2">3. Start Automation</h3>
            <p class="text-xs text-slate-600">Schedule automatic follow-ups (email/SMS/WhatsApp/calls) with custom intervals.</p>
          </div>
          <!-- Step 4 -->
          <div class="flex flex-col items-center text-center relative z-10">
             <div class="w-16 h-16 bg-white border border-slate-200 shadow-md rounded-2xl flex items-center justify-center mb-4 text-purple-600">
               <span class="material-symbols-outlined text-3xl">manage_accounts</span>
            </div>
            <h3 class="font-bold text-slate-900 mb-2">4. Track & Manage</h3>
            <p class="text-xs text-slate-600">All lead activity, communications, and deal progress logged in CRM pipeline + outreach data in one view.</p>
          </div>
        </div>
      </div>

      <!-- Interactive Builder Section -->
      <div class="mb-24">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-slate-900">Design Your Perfect Workflow</h2>
            <p class="text-slate-600 mt-2">Try our visual sequence builder below.</p>
        </div>

        <div class="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          
          <!-- Toolbox (Left) -->
          <div class="w-full md:w-80 bg-slate-50 border-r border-slate-200 p-6 flex flex-col">
             <h3 class="font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span class="material-symbols-outlined">add_circle</span> Add Step
             </h3>
             <div class="space-y-3 flex-1">
               <button (click)="addStep('email')" class="w-full bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex items-center gap-3 text-left group">
                 <div class="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                   <span class="material-symbols-outlined">mail</span>
                 </div>
                 <div>
                    <span class="font-bold text-slate-700 block text-sm">Automated Email</span>
                    <span class="text-xs text-slate-500">Send personalized email</span>
                 </div>
               </button>

               <button (click)="addStep('call')" class="w-full bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-green-300 transition-all flex items-center gap-3 text-left group">
                 <div class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                   <span class="material-symbols-outlined">call</span>
                 </div>
                 <div>
                    <span class="font-bold text-slate-700 block text-sm">Phone Call</span>
                    <span class="text-xs text-slate-500">Create call task</span>
                 </div>
               </button>

               <button (click)="addStep('whatsapp')" class="w-full bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex items-center gap-3 text-left group">
                 <div class="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                 </div>
                 <div>
                    <span class="font-bold text-slate-700 block text-sm">WhatsApp</span>
                    <span class="text-xs text-slate-500">Send template message</span>
                 </div>
               </button>

               <button (click)="addStep('linkedin')" class="w-full bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-300 transition-all flex items-center gap-3 text-left group">
                 <div class="w-10 h-10 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-100 transition-colors">
                   <span class="material-symbols-outlined">link</span>
                 </div>
                 <div>
                    <span class="font-bold text-slate-700 block text-sm">LinkedIn Task</span>
                    <span class="text-xs text-slate-500">Connect or Message</span>
                 </div>
               </button>

               <button (click)="addStep('wait')" class="w-full bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all flex items-center gap-3 text-left group">
                 <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                   <span class="material-symbols-outlined">hourglass_empty</span>
                 </div>
                 <div>
                    <span class="font-bold text-slate-700 block text-sm">Time Delay</span>
                    <span class="text-xs text-slate-500">Wait specific duration</span>
                 </div>
               </button>
             </div>
             
             <div class="mt-6 pt-6 border-t border-slate-200">
               <div class="bg-indigo-50 border border-indigo-100 rounded-lg p-3">
                 <p class="text-xs text-indigo-800 leading-relaxed">
                   <strong>Pro Tip:</strong> Sequences with at least 3 channels (e.g. Email + LinkedIn + Phone) have a <span class="font-bold">2.4x higher connection rate</span>.
                 </p>
               </div>
             </div>
          </div>

          <!-- Canvas (Right) -->
          <div class="flex-1 bg-slate-100 p-8 overflow-y-auto relative bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]">
             <div class="max-w-xl mx-auto relative min-h-full pb-20">
               <!-- Vertical Line -->
               <div class="absolute left-[27px] top-8 bottom-0 w-0.5 bg-slate-300 -z-0"></div>

               <!-- Start Node -->
               <div class="flex items-center gap-6 mb-8 relative z-10">
                 <div class="w-14 h-14 rounded-full bg-slate-800 text-white flex items-center justify-center border-4 border-slate-100 shadow-md font-bold text-[10px] tracking-wider">
                   START
                 </div>
                 <div class="bg-white px-5 py-3 rounded-xl shadow-sm border border-slate-200 text-slate-600 text-sm flex items-center gap-2">
                   <span class="material-symbols-outlined text-slate-400">bolt</span>
                   Trigger: Lead assigned or stage changed
                 </div>
               </div>

               <!-- Steps -->
               @for (step of steps(); track step.id; let i = $index) {
                  <div class="flex items-start gap-6 mb-8 relative z-10 animate-scale-in group">
                     <!-- Icon Node -->
                     <div class="w-14 h-14 rounded-full bg-white border-4 border-slate-100 shadow-sm flex items-center justify-center shrink-0 z-10 relative">
                        @switch (step.type) {
                          @case ('email') { <span class="material-symbols-outlined text-blue-500 text-2xl">mail</span> }
                          @case ('call') { <span class="material-symbols-outlined text-green-500 text-2xl">call</span> }
                          @case ('whatsapp') { <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg> }
                          @case ('linkedin') { <span class="material-symbols-outlined text-sky-500 text-2xl">link</span> }
                          @case ('wait') { <span class="material-symbols-outlined text-amber-500 text-2xl">hourglass_bottom</span> }
                        }
                     </div>
                     
                     <!-- Card -->
                     <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex-1 relative hover:shadow-md transition-shadow hover:border-purple-200">
                        <button (click)="removeStep(step.id)" class="absolute top-3 right-3 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-50 rounded">
                          <span class="material-symbols-outlined text-sm">close</span>
                        </button>
                        
                        <div class="flex items-center justify-between mb-2">
                            <h4 class="font-bold text-slate-800 text-sm flex items-center gap-2">
                                <span class="bg-slate-100 text-slate-500 text-[10px] font-mono px-1.5 py-0.5 rounded">STEP {{ i + 1 }}</span>
                                {{ getStepTitle(step.type) }}
                            </h4>
                            <div class="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-1 rounded">Day {{ step.day }}</div>
                        </div>
                        
                        <p class="text-sm text-slate-600">{{ step.description }}</p>
                        
                        @if(step.type === 'email') {
                            <div class="mt-3 text-xs text-slate-400 bg-slate-50 p-2 rounded border border-slate-100 truncate">
                                Subject: Checking in on {{ '{' }}Company{{ '}' }}...
                            </div>
                        }
                     </div>
                  </div>
               }

               <!-- End Node -->
               @if (steps().length > 0) {
                <div class="flex items-center gap-6 relative z-10 animate-fade-in">
                   <div class="w-14 h-14 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center border-4 border-slate-100 shadow-sm font-bold text-[10px] tracking-wider">
                     END
                   </div>
                   <div class="text-xs text-slate-400 font-medium uppercase tracking-wide">Sequence Complete</div>
                </div>
               }

             </div>
          </div>
        </div>
      </div>

       <!-- NEW SECTION: Key Features at a Glance -->
      <div class="mb-24">
         <h2 class="text-3xl font-bold text-slate-900 mb-10 text-center">Key Features at a Glance</h2>
         <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Feature 1 -->
            <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
               <div class="flex items-center gap-3 mb-4">
                  <div class="text-indigo-600"><span class="material-symbols-outlined text-4xl">contacts</span></div>
                  <h3 class="font-bold text-lg text-slate-900">Contact & Lead Management</h3>
               </div>
               <p class="text-sm text-slate-600">Unified customer database, activity history, and detailed lead scoring.</p>
            </div>
            <!-- Feature 2 -->
            <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
               <div class="flex items-center gap-3 mb-4">
                  <div class="text-indigo-600"><span class="material-symbols-outlined text-4xl">waterfall_chart</span></div>
                  <h3 class="font-bold text-lg text-slate-900">Sales Pipeline & Deal Management</h3>
               </div>
               <p class="text-sm text-slate-600">Track deals across stages, manage forecasts, and visualize progress easily.</p>
            </div>
            <!-- Feature 3 -->
            <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
               <div class="flex items-center gap-3 mb-4">
                  <div class="text-indigo-600"><span class="material-symbols-outlined text-4xl">campaign</span></div>
                  <h3 class="font-bold text-lg text-slate-900">Outreach Sequences & Follow-ups</h3>
               </div>
               <p class="text-sm text-slate-600">Automated, multi-channel outreach built right into the CRM, no extra tools needed.</p>
            </div>
            <!-- Feature 4 -->
            <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
               <div class="flex items-center gap-3 mb-4">
                  <div class="text-indigo-600"><span class="material-symbols-outlined text-4xl">linear_scale</span></div>
                  <h3 class="font-bold text-lg text-slate-900">Multi-step Sequences</h3>
               </div>
               <p class="text-sm text-slate-600">Schedule reminders, follow-up calls, and messages for complex sales flows.</p>
            </div>
            <!-- Feature 5 -->
            <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
               <div class="flex items-center gap-3 mb-4">
                  <div class="text-indigo-600"><span class="material-symbols-outlined text-4xl">settings_suggest</span></div>
                  <h3 class="font-bold text-lg text-slate-900">Workflow Automation</h3>
               </div>
               <p class="text-sm text-slate-600">Eliminate repetitive tasks, manage leads efficiently, and standardize processes.</p>
            </div>
            <!-- Feature 6 -->
            <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
               <div class="flex items-center gap-3 mb-4">
                  <div class="text-indigo-600"><span class="material-symbols-outlined text-4xl">move_to_inbox</span></div>
                  <h3 class="font-bold text-lg text-slate-900">Unified Inbox / Communication Log</h3>
               </div>
               <p class="text-sm text-slate-600">All interactions, emails, and tasks in one place for complete context.</p>
            </div>
         </div>
      </div>

       <!-- Detailed Features (Existing) -->
       <div class="grid md:grid-cols-2 gap-16 items-center mb-24">
           <div>
              <h2 class="text-3xl font-bold text-slate-900 mb-6">Personalization at Scale</h2>
              <p class="text-slate-600 mb-6 text-lg">
                  Templates doesn't mean generic. Use dynamic liquid tags to insert specific details like <code>{{ '{' }}FirstName{{ '}' }}</code>, <code>{{ '{' }}CompanyName{{ '}' }}</code>, or <code>{{ '{' }}Industry{{ '}' }}</code>.
              </p>
              <ul class="space-y-4">
                  <li class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-green-500">check_circle</span>
                      <span class="text-slate-700">Dynamic placeholders for any CRM field</span>
                  </li>
                  <li class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-green-500">check_circle</span>
                      <span class="text-slate-700">Sender signatures auto-match the assigned rep</span>
                  </li>
                  <li class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-green-500">check_circle</span>
                      <span class="text-slate-700">Threaded replies to boost deliverability</span>
                  </li>
              </ul>
           </div>
           <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative">
               <div class="absolute -top-4 -right-4 w-20 h-20 bg-purple-100 rounded-full blur-2xl"></div>
               <div class="font-mono text-sm text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-200">
                   <span class="text-slate-400">To:</span> <span class="text-purple-600">{{ '{' }}Email{{ '}' }}</span><br>
                   <span class="text-slate-400">Subject:</span> Question about <span class="text-purple-600">{{ '{' }}Company{{ '}' }}</span><br><br>
                   Hi <span class="text-purple-600">{{ '{' }}FirstName{{ '}' }}</span>,<br><br>
                   I noticed that <span class="text-purple-600">{{ '{' }}Company{{ '}' }}</span> is expanding its sales team...
               </div>
           </div>
       </div>

      <!-- FAQ Section -->
      <div class="pt-12 border-t border-slate-200">
        <h2 class="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 class="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span class="material-symbols-outlined text-slate-400">help</span>
                    Does the sequence stop if someone replies?
                </h3>
                <p class="text-slate-600 text-sm">Yes! The moment a lead replies to an email, answers a connected call, or books a meeting, they are automatically unenrolled to prevent awkward automated follow-ups.</p>
            </div>
            <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 class="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span class="material-symbols-outlined text-slate-400">help</span>
                    Can I create different sequences?
                </h3>
                <p class="text-slate-600 text-sm">Yes, you can create unlimited sequences for different segments (e.g., "Cold Outreach - Tech", "Inbound Lead Nurture", "Renewal Reminder").</p>
            </div>
            <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 class="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span class="material-symbols-outlined text-slate-400">help</span>
                    Is there A/B testing?
                </h3>
                <p class="text-slate-600 text-sm">Yes, Pro and Enterprise plans allow you to A/B test email subject lines and body copy. We automatically rotate versions and track which one gets more opens.</p>
            </div>
            <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 class="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span class="material-symbols-outlined text-slate-400">help</span>
                    Can I connect my personal email?
                </h3>
                <p class="text-slate-600 text-sm">Yes, we support Gmail, Outlook, and SMTP connections. Emails appear to come directly from you, improving deliverability compared to marketing blast tools.</p>
            </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes scaleIn {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .animate-scale-in {
      animation: scaleIn 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
  `]
})
export class SequencingComponent {
  steps = signal<SequenceStep[]>([
    { id: 1, type: 'email', day: 1, description: 'Send "Introduction" Email Template' },
    { id: 2, type: 'wait', day: 3, description: 'Wait for 2 days' },
  ]);

  addStep(type: SequenceStep['type']) {
    const lastDay = this.steps().length > 0 ? this.steps()[this.steps().length - 1].day : 0;
    
    // Logic for day calculation based on new step
    const newDay = type === 'wait' ? lastDay : lastDay + 1;
    
    let description = '';
    switch(type) {
      case 'email': description = 'Send "Follow Up" Email Template'; break;
      case 'call': description = 'Create Task: "Call Lead"'; break;
      case 'whatsapp': description = 'Send: "Hi, checking in..."'; break;
      case 'linkedin': description = 'Task: Connect on LinkedIn'; break;
      case 'wait': description = 'Wait for 2 days'; break;
    }

    this.steps.update(s => [...s, {
      id: Date.now(),
      type,
      day: type === 'wait' ? newDay : newDay + 1,
      description
    }]);
  }

  removeStep(id: number) {
    this.steps.update(s => s.filter(step => step.id !== id));
  }

  getStepTitle(type: string): string {
    if (type === 'linkedin') return 'LinkedIn';
    return type.charAt(0).toUpperCase() + type.slice(1);
  }
}
