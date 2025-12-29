import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Activity {
  id: number;
  text: string;
  time: string;
  type: 'reminder';
}

interface Task {
  id: number;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  due: string;
}

@Component({
  selector: 'app-follow-up',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="pt-10 pb-12 px-4 max-w-7xl mx-auto">
      <div class="mb-10 text-center max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-slate-900 mb-4">Smart Automation & Speed-to-Lead</h1>
        <p class="text-slate-600 text-lg">
          The follow-up that never sleeps. Your 24/7 digital assistant automatically generates prioritized tasks based on real-time lead behavior.
        </p>
      </div>

      <!-- Demo Area -->
      <div class="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row h-[700px] md:h-[650px] mb-12">
        
        <!-- Simulation Controls (Left) -->
        <div class="w-full md:w-1/3 bg-slate-50 border-r border-slate-200 p-6 flex flex-col overflow-y-auto">
          <h3 class="font-bold text-slate-800 mb-2">Lead Simulation</h3>
          <p class="text-sm text-slate-500 mb-6">
            Trigger real-world lead actions or set manual reminders. Watch how the CRM instantly creates prioritized tasks.
          </p>
          
          <div class="space-y-4">
            <!-- Reminder Feature -->
            <div class="bg-white border border-slate-200 rounded-lg p-4">
              <div class="flex items-center gap-3 mb-3">
                 <span class="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                 </span>
                 <div class="font-medium text-slate-900">Set a Custom Reminder</div>
              </div>
              <div class="space-y-3 text-sm">
                <input type="text" [(ngModel)]="reminderTitle" placeholder="Reminder title..." class="w-full px-3 py-2 text-xs rounded-md border border-slate-300 focus:ring-1 focus:ring-indigo-500 outline-none">
                <div class="grid grid-cols-2 gap-2">
                  <input type="date" [(ngModel)]="reminderDate" class="w-full px-3 py-2 text-xs rounded-md border border-slate-300 focus:ring-1 focus:ring-indigo-500 outline-none">
                  <input type="time" [(ngModel)]="reminderTime" class="w-full px-3 py-2 text-xs rounded-md border border-slate-300 focus:ring-1 focus:ring-indigo-500 outline-none">
                </div>
                <button (click)="setReminder()" class="w-full bg-slate-800 text-white font-semibold py-2 rounded-md hover:bg-slate-700 transition-colors text-xs">Set Reminder</button>
              </div>
               <p class="text-xs text-slate-400 mt-3 leading-relaxed">
                <strong>Why?</strong> Manually set reminders for important follow-ups, contract renewals, or custom tasks. The system will create a <span class="text-red-500 font-bold">High Priority</span> task.
              </p>
            </div>
          </div>
        </div>

        <!-- Live Feed (Right) -->
        <div class="flex-1 bg-white p-6 flex flex-col">
          <div class="flex justify-between items-center mb-6">
             <h3 class="font-bold text-slate-800">Live Activity Feed</h3>
             <span class="flex h-3 w-3 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
             </span>
          </div>

          <!-- Activity Stream -->
          <div class="flex-1 overflow-y-auto pr-2 space-y-4 mb-6 border-b border-slate-100 pb-4">
            @for (activity of activities(); track activity.id) {
              <div class="flex gap-3 animate-fade-in-up">
                <div class="mt-1 flex items-center justify-center h-4 w-4 shrink-0">
                   <div class="text-yellow-500"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg></div>
                </div>
                <div>
                   <p class="text-sm text-slate-900">{{ activity.text }}</p>
                   <p class="text-xs text-slate-400">{{ activity.time }}</p>
                </div>
              </div>
            } @empty {
              <p class="text-center text-slate-400 text-sm py-4">Waiting for lead activity...</p>
            }
          </div>

          <!-- Generated Tasks -->
           <h3 class="font-bold text-slate-800 mb-4 flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/><path d="m15 5 3 3"/></svg>
             Generated Tasks
           </h3>
           <div class="space-y-3">
             @for (task of tasks(); track task.id) {
                <div class="bg-indigo-50 border border-indigo-100 p-3 rounded-lg flex justify-between items-center animate-slide-in">
                  <div class="flex items-center gap-3">
                    <input type="checkbox" class="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-gray-300">
                    <div>
                      <p class="text-sm font-semibold text-indigo-900">{{ task.title }}</p>
                      <p class="text-xs text-indigo-600">{{ task.due }}</p>
                    </div>
                  </div>
                  <span class="px-2 py-1 rounded text-xs font-bold" 
                    [class.bg-red-100]="task.priority === 'High'" 
                    [class.text-red-700]="task.priority === 'High'"
                    [class.bg-blue-100]="task.priority === 'Medium'" 
                    [class.text-blue-700]="task.priority === 'Medium'">
                    {{ task.priority }}
                  </span>
                </div>
             } @empty {
                <p class="text-sm text-slate-400 italic">No tasks generated yet.</p>
             }
           </div>

        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div class="p-6 bg-slate-50 rounded-xl">
           <h4 class="font-bold text-lg mb-2">Smart Reminders</h4>
           <p class="text-slate-600 text-sm">Automatically generates tasks based on lead behavior or lets you set manual reminders for critical follow-ups.</p>
        </div>
        <div class="p-6 bg-slate-50 rounded-xl">
           <h4 class="font-bold text-lg mb-2">Speed-to-Lead Triggers</h4>
           <p class="text-slate-600 text-sm">Send instant automated responses or alert reps the second a lead interacts with your website or ads.</p>
        </div>
      </div>

       <!-- SEO Content Area -->
      <div class="border-t border-slate-200 pt-12">
        <h2 class="text-2xl font-bold text-slate-900 mb-6 text-center">Why Automation is Essential for Modern Sales</h2>
        <div class="grid md:grid-cols-2 gap-12 text-slate-600 leading-relaxed">
           <div>
             <h3 class="font-bold text-slate-900 mb-2">Never Miss a Critical Follow-up</h3>
             <p class="mb-4">
              While automation handles routine tasks, our manual reminder system ensures high-touch, critical follow-ups are never missed. Set reminders for contract renewals, post-demo check-ins, or any custom task that requires a personal touch at a specific time.
             </p>
             <h3 class="font-bold text-slate-900 mb-2">Eliminate Human Error</h3>
             <p>
               Sales reps are busy. They forget to follow up. Calsoft CRM acts as a safety net, ensuring every single lead gets nurtured. Whether it's an automated sequence or a manual reminder, our system handles the details so your team can focus on closing.
             </p>
           </div>
           <div>
             <h3 class="font-bold text-slate-900 mb-2">Nurture the Long Tail</h3>
             <p class="mb-4">
               Only 3% of your market is ready to buy <em>right now</em>. The other 97% need nurturing. Our <strong>Drip Campaigns</strong> keep you top-of-mind for months or even years with helpful content, positioning you as the trusted advisor when they are finally ready to sign the check.
             </p>
             <h3 class="font-bold text-slate-900 mb-2">Behavior-Based Triggers</h3>
             <p>
               Don't just blast generic emails. Our system listens to customer signals. If an old lead suddenly visits your pricing page, the CRM detects this high-intent behavior and instantly alerts your sales team to pick up the phone.
             </p>
           </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-20 pt-12 border-t border-slate-200">
        <h2 class="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">How are tasks prioritized?</h3>
                <p class="text-slate-600 text-sm">Tasks are assigned "High", "Medium", or "Low" priority. Manual reminders are always set to "High", while automated tasks can be customized based on lead behavior.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">Does this work with my website?</h3>
                <p class="text-slate-600 text-sm">Yes, you can install our tracking pixel on any website (WordPress, Shopify, etc.) to monitor visitor behavior and trigger automations.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">Can I turn off automation for specific leads?</h3>
                <p class="text-slate-600 text-sm">Yes, you can manually pause automation for any contact or set up global exclusion lists (e.g., exclude existing customers).</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">Is there a limit to how many emails I can send?</h3>
                <p class="text-slate-600 text-sm">Limits depend on your plan. The Pro plan includes 5,000 automated emails/month, while the Enterprise plan offers unlimited sending volume.</p>
            </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.3s ease-out forwards;
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-10px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-slide-in {
      animation: slideIn 0.3s ease-out forwards;
    }
  `]
})
export class FollowUpComponent {
  activities = signal<Activity[]>([]);
  tasks = signal<Task[]>([]);

  reminderTitle = signal('');
  reminderDate = signal('');
  reminderTime = signal('');
  
  setReminder() {
    if (!this.reminderTitle() || !this.reminderDate() || !this.reminderTime()) {
      return;
    }
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const formattedDate = new Date(`${this.reminderDate()}T${this.reminderTime()}`).toLocaleString([], {
        month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    this.addActivity(`Reminder set: "${this.reminderTitle()}"`, 'reminder', now);
    setTimeout(() => this.addTask(this.reminderTitle(), 'High', `Due: ${formattedDate}`), 300);

    // Reset form
    this.reminderTitle.set('');
    this.reminderDate.set('');
    this.reminderTime.set('');
  }

  addActivity(text: string, type: Activity['type'], time: string) {
    this.activities.update(list => [{ id: Date.now(), text, type, time }, ...list]);
  }

  addTask(title: string, priority: 'High'|'Medium'|'Low', dueText: string = 'Due: Today') {
    this.tasks.update(list => [{ id: Date.now(), title, priority, due: dueText }, ...list]);
  }
}