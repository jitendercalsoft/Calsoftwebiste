
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SequenceStep {
  id: number;
  type: 'email' | 'call' | 'whatsapp' | 'wait';
  day: number;
  description: string;
}

@Component({
  selector: 'app-sequencing',
  imports: [CommonModule],
  template: `
    <div class="pt-10 pb-12 px-4 max-w-7xl mx-auto">
      <div class="mb-8 text-center max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-slate-900 mb-4">Multi-Channel Sequencing</h1>
        <p class="text-slate-600 text-lg mb-6">
          Your winning sales formula on autopilot. Build repeatable, multi-channel workflows that automatically stop when a lead replies.
        </p>

        <!-- Demo Explanation -->
        <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg max-w-2xl mx-auto text-left">
          <h3 class="font-bold text-indigo-900 text-sm mb-1">Understanding Sequencing Logic</h3>
          <p class="text-sm text-indigo-700 leading-relaxed">
             In this demo, you can build a schedule of touchpoints. 
             Crucially, Calsoft's <strong>Engagement Logic</strong> monitors the lead continuously. 
             If they reply to an email or answer a call (Step 1), the subsequent steps (e.g., Step 2, 3) are <em>automatically cancelled</em>. 
             This prevents awkward "Are you there?" messages sending after you've already booked a meeting.
          </p>
        </div>
      </div>

      <!-- Builder Demo -->
      <div class="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row min-h-[600px] mb-12">
        
        <!-- Toolbox (Left) -->
        <div class="w-full md:w-1/4 bg-slate-50 border-r border-slate-200 p-6">
           <h3 class="font-bold text-slate-800 mb-6">Add Steps</h3>
           <div class="space-y-4">
             <button (click)="addStep('email')" class="w-full bg-white p-3 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all flex items-center gap-3 text-left">
               <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
               </div>
               <span class="font-medium text-slate-700">Email</span>
             </button>
             <button (click)="addStep('call')" class="w-full bg-white p-3 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-green-300 transition-all flex items-center gap-3 text-left">
               <div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
               </div>
               <span class="font-medium text-slate-700">Call Task</span>
             </button>
             <button (click)="addStep('whatsapp')" class="w-full bg-white p-3 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex items-center gap-3 text-left">
               <div class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
               </div>
               <span class="font-medium text-slate-700">WhatsApp</span>
             </button>
             <button (click)="addStep('wait')" class="w-full bg-white p-3 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-orange-300 transition-all flex items-center gap-3 text-left">
               <div class="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
               </div>
               <span class="font-medium text-slate-700">Wait Delay</span>
             </button>
           </div>
           
        </div>

        <!-- Canvas (Right) -->
        <div class="flex-1 bg-slate-100 p-8 overflow-y-auto relative">
           <div class="max-w-md mx-auto relative min-h-full pb-20">
             <!-- Vertical Line -->
             <div class="absolute left-8 top-4 bottom-0 w-1 bg-slate-300 -z-0"></div>

             <!-- Start Node -->
             <div class="flex items-center gap-4 mb-8 relative z-10">
               <div class="w-16 h-16 rounded-full bg-slate-800 text-white flex items-center justify-center border-4 border-slate-100 shadow-sm font-bold text-xs">
                 START
               </div>
               <div class="bg-white px-4 py-2 rounded-lg shadow-sm text-slate-500 text-sm">
                 Trigger: Lead enters stage "Qualification"
               </div>
             </div>

             <!-- Steps -->
             @for (step of steps(); track step.id; let i = $index) {
                <div class="flex items-center gap-4 mb-8 relative z-10 animate-scale-in">
                   <!-- Icon Node -->
                   <div class="w-16 h-16 rounded-full bg-white border-4 border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                      @switch (step.type) {
                        @case ('email') { <span class="text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span> }
                        @case ('call') { <span class="text-green-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span> }
                        @case ('whatsapp') { <span class="text-emerald-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg></span> }
                        @case ('wait') { <span class="text-orange-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span> }
                      }
                   </div>
                   
                   <!-- Card -->
                   <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex-1 relative group">
                      <button (click)="removeStep(step.id)" class="absolute top-2 right-2 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
                      </button>
                      <h4 class="font-bold text-slate-800 text-sm">Step {{ i + 1 }}: {{ getStepTitle(step.type) }}</h4>
                      <p class="text-xs text-slate-500 mt-1">{{ step.description }}</p>
                      <div class="mt-2 text-xs font-mono bg-slate-50 inline-block px-2 py-1 rounded text-slate-400">
                        Day {{ step.day }}
                      </div>
                   </div>
                </div>
             }

             <!-- End Node -->
             @if (steps().length > 0) {
              <div class="flex items-center gap-4 relative z-10 animate-fade-in">
                 <div class="w-16 h-16 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center border-4 border-slate-100 shadow-sm font-bold text-xs">
                   END
                 </div>
              </div>
             }

           </div>
        </div>
      </div>

       <!-- SEO Content Area -->
      <div class="border-t border-slate-200 pt-12">
        <h2 class="text-2xl font-bold text-slate-900 mb-6 text-center">Perfecting the Art of Outreach</h2>
        <div class="grid md:grid-cols-2 gap-12 text-slate-600 leading-relaxed">
           <div>
             <h3 class="font-bold text-slate-900 mb-2">Why Single-Channel Outreach Fails</h3>
             <p class="mb-4">
               Relying solely on email is a strategy for failure. Inboxes are crowded, and open rates are declining. Calsoft CRM's <strong>Omnichannel Sequencing</strong> allows you to diversify your approach by mixing emails with phone calls and WhatsApp messages, increasing your contact rate by up to 300%.
             </p>
             <h3 class="font-bold text-slate-900 mb-2">Standardize Your Best Reps</h3>
             <p>
               Every sales team has a top performer. With Sequences, you can take their exact workflow—what they say, when they call, how they follow up—and turn it into a template that every junior rep can follow. This creates a scalable, predictable revenue machine.
             </p>
           </div>
           <div>
             <h3 class="font-bold text-slate-900 mb-2">Automated Yet Personal</h3>
             <p class="mb-4">
               Automation shouldn't sound robotic. Our builder allows for deep personalization tokens (Name, Company, Industry) within every email template. Furthermore, the ability to insert manual "Call Tasks" ensures that the most critical touchpoints are handled by a human, not a bot.
             </p>
             <h3 class="font-bold text-slate-900 mb-2">Never Drop the Ball</h3>
             <p>
               The average sale requires 8 touches. Most reps give up after 2. A sequence ensures that persistence is built into the system. You set the schedule once, and Calsoft CRM executes it flawlessly until the prospect engages or the sequence concludes.
             </p>
           </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-20 pt-12 border-t border-slate-200">
        <h2 class="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">Does the sequence stop if someone replies?</h3>
                <p class="text-slate-600 text-sm">Yes! The moment a lead replies to an email, answers a call, or books a meeting, the sequence is automatically paused to prevent awkward automated follow-ups.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">Can I create different sequences for different industries?</h3>
                <p class="text-slate-600 text-sm">Yes, you can create unlimited sequences (e.g., "Cold Outreach - Tech", "Inbound Lead", "Renewal"). You can then assign contacts to the most relevant sequence.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">Is there A/B testing?</h3>
                <p class="text-slate-600 text-sm">Yes, Pro and Enterprise plans allow you to A/B test email subject lines and body copy to see which versions yield higher open and reply rates.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">Can I connect my personal email?</h3>
                <p class="text-slate-600 text-sm">Yes, we support Gmail, Outlook, and SMTP connections so emails appear to come directly from you, not a generic marketing server.</p>
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

  addStep(type: 'email' | 'call' | 'whatsapp' | 'wait') {
    const lastDay = this.steps().length > 0 ? this.steps()[this.steps().length - 1].day : 0;
    
    // Fix: Remove redundant logic that causes Type overlap error in Ternary branch
    const newDay = type === 'wait' ? lastDay : lastDay + 1;
    
    let description = '';
    switch(type) {
      case 'email': description = 'Send "Follow Up" Email Template'; break;
      case 'call': description = 'Create Task: "Call Lead"'; break;
      case 'whatsapp': description = 'Send: "Hi, checking in..."'; break;
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
    return type.charAt(0).toUpperCase() + type.slice(1);
  }
}
