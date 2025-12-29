
import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Integration {
  id: string;
  name: string;
  description: string;
  category: string;
  color: string;
  status: 'Active' | 'Connect';
  popular?: boolean;
}

@Component({
  selector: 'app-integrations',
  imports: [CommonModule],
  template: `
    <div class="bg-slate-50 min-h-screen pb-20">
      
      <!-- Header -->
      <div class="bg-slate-900 text-white pt-16 pb-24 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 class="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Integration Marketplace</h1>
          <p class="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Supercharge your CRM by connecting your favorite tools. 
            Sync leads, automate scheduling, and streamline communication in one click.
          </p>
          
          <!-- Search Bar -->
          <div class="max-w-xl mx-auto relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </div>
            <input 
              type="text" 
              [value]="searchQuery()"
              (input)="updateSearch($event)"
              class="block w-full pl-10 pr-3 py-4 border-none rounded-full leading-5 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-xl"
              placeholder="Search integrations (e.g., 'Google', 'Meta')..."
            >
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        
        <!-- Categories -->
        <div class="flex flex-wrap justify-center gap-2 mb-10">
          @for (cat of categories; track cat) {
            <button 
              (click)="selectedCategory.set(cat)"
              class="px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm"
              [class.bg-indigo-600]="selectedCategory() === cat"
              [class.text-white]="selectedCategory() === cat"
              [class.bg-white]="selectedCategory() !== cat"
              [class.text-slate-600]="selectedCategory() !== cat"
              [class.hover:bg-slate-100]="selectedCategory() !== cat">
              {{ cat }}
            </button>
          }
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (app of filteredIntegrations(); track app.id) {
            <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
              <div class="flex justify-between items-start mb-4">
                <div class="w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-sm" [ngClass]="app.color">
                  <!-- Dynamic Initials or Icon based on app name -->
                  @if (app.id === 'meta') {
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                  } @else if (app.id === 'google') {
                    <span class="font-bold">G</span>
                  } @else if (app.id === 'calendly') {
                    <span class="font-bold">C</span>
                  } @else if (app.id === 'justdial') {
                    <span class="font-bold tracking-tighter">Jd</span>
                  } @else if (app.id === 'slack') {
                    <span class="font-bold">#</span>
                  } @else {
                     {{ app.name.charAt(0) }}
                  }
                </div>
                @if (app.popular) {
                  <span class="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide border border-indigo-100">Popular</span>
                }
              </div>
              
              <div class="flex-1">
                <h3 class="text-lg font-bold text-slate-900 mb-2">{{ app.name }}</h3>
                <p class="text-slate-500 text-sm leading-relaxed mb-4">{{ app.description }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-800">
                    {{ app.category }}
                  </span>
                </div>
              </div>

              <div class="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                 @if (app.status === 'Active') {
                   <div class="flex items-center text-green-600 text-sm font-semibold gap-1">
                     <span class="w-2 h-2 rounded-full bg-green-500"></span>
                     Connected
                   </div>
                   <button class="text-slate-400 hover:text-slate-600 text-sm font-medium">Manage</button>
                 } @else {
                   <button class="w-full py-2 bg-white border border-indigo-600 text-indigo-600 rounded-lg font-semibold text-sm hover:bg-indigo-50 transition-colors">
                     Connect
                   </button>
                 }
              </div>
            </div>
          }
        </div>

        <!-- Missing Integration CTA -->
        <div class="mt-16 bg-white rounded-2xl p-8 border border-slate-200 text-center shadow-sm">
           <h3 class="text-xl font-bold text-slate-900 mb-2">Can't find what you're looking for?</h3>
           <p class="text-slate-600 mb-6">We add new integrations every week. Request a specific tool and we'll prioritize it.</p>
           <button class="px-6 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors">
             Request Integration
           </button>
        </div>

        <!-- FAQ Section -->
        <div class="mt-20 pt-12 border-t border-slate-200">
          <h2 class="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-white p-6 rounded-xl border border-slate-200">
                  <h3 class="font-bold text-slate-900 mb-2">Are these integrations free?</h3>
                  <p class="text-slate-600 text-sm">Most native integrations (Google, Meta, Slack) are included in all plans. Some premium integrations may require a Zapier account.</p>
              </div>
              <div class="bg-white p-6 rounded-xl border border-slate-200">
                  <h3 class="font-bold text-slate-900 mb-2">Do you have a public API?</h3>
                  <p class="text-slate-600 text-sm">Yes, our REST API is available on the Enterprise plan for building custom connections to your proprietary systems.</p>
              </div>
              <div class="bg-white p-6 rounded-xl border border-slate-200">
                  <h3 class="font-bold text-slate-900 mb-2">How often does data sync?</h3>
                  <p class="text-slate-600 text-sm">Native integrations like Google Calendar and Meta Ads sync in near real-time (usually within seconds).</p>
              </div>
              <div class="bg-white p-6 rounded-xl border border-slate-200">
                  <h3 class="font-bold text-slate-900 mb-2">Can I connect multiple accounts?</h3>
                  <p class="text-slate-600 text-sm">Yes, you can connect multiple Gmail or Calendar accounts depending on your user license count.</p>
              </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class IntegrationsComponent {
  searchQuery = signal('');
  selectedCategory = signal('All');
  
  categories = ['All', 'Lead Capture', 'Communication', 'Scheduling', 'Advertising'];

  allIntegrations: Integration[] = [
    {
      id: 'meta',
      name: 'Meta (Facebook & Instagram)',
      description: 'Automatically sync leads from Facebook and Instagram Lead Forms directly into your pipeline in real-time.',
      category: 'Lead Capture',
      color: 'bg-blue-600',
      status: 'Connect',
      popular: true
    },
    {
      id: 'google',
      name: 'Google Workspace',
      description: 'Two-way sync for Gmail and Google Calendar. Import leads directly from Google Ads forms.',
      category: 'Advertising',
      color: 'bg-red-500',
      status: 'Active',
      popular: true
    },
    {
      id: 'calendly',
      name: 'Calendly',
      description: 'Schedule meetings without the back-and-forth. Meetings booked via Calendly automatically appear in deal activity.',
      category: 'Scheduling',
      color: 'bg-blue-500',
      status: 'Connect',
      popular: true
    },
    {
      id: 'justdial',
      name: 'Justdial',
      description: 'Capture leads instantly from Justdial inquiries and assign them to sales reps via round-robin.',
      category: 'Lead Capture',
      color: 'bg-orange-500',
      status: 'Connect'
    },
    {
      id: 'slack',
      name: 'Slack',
      description: 'Get real-time notifications for new deals, stage changes, and closed won opportunities in your team channels.',
      category: 'Communication',
      color: 'bg-purple-600',
      status: 'Connect'
    },
    {
      id: 'zoom',
      name: 'Zoom',
      description: 'Automatically generate unique Zoom meeting links for every appointment scheduled within the CRM.',
      category: 'Communication',
      color: 'bg-blue-400',
      status: 'Connect'
    },
    {
      id: 'indiamart',
      name: 'IndiaMART',
      description: 'Seamlessly import buy leads from IndiaMART into your sales pipeline for immediate follow-up.',
      category: 'Lead Capture',
      color: 'bg-red-600',
      status: 'Connect'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Business API',
      description: 'Native integration for sending messages, automated notifications, and payment links directly from the CRM.',
      category: 'Communication',
      color: 'bg-green-500',
      status: 'Active'
    }
  ];

  filteredIntegrations = computed(() => {
    const query = this.searchQuery().toLowerCase();
    const category = this.selectedCategory();
    
    return this.allIntegrations.filter(app => {
      const matchesSearch = app.name.toLowerCase().includes(query) || app.description.toLowerCase().includes(query);
      const matchesCategory = category === 'All' || app.category === category;
      return matchesSearch && matchesCategory;
    });
  });

  updateSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }
}
