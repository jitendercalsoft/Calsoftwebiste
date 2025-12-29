
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resources',
  imports: [CommonModule],
  template: `
    <div class="pt-10 pb-16 px-4 max-w-7xl mx-auto">
        <div class="text-center mb-16">
            <h1 class="text-4xl font-extrabold text-slate-900 mb-4">Resources</h1>
            <p class="text-xl text-slate-600 max-w-3xl mx-auto">
                Guides, documentation, and insights to help you get the most out of Calsoft CRM.
            </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Blog Card 1 -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                <div class="h-48 bg-indigo-50 flex items-center justify-center text-indigo-300 group-hover:bg-indigo-100 transition-colors">
                    <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                </div>
                <div class="p-6">
                    <span class="text-xs font-bold text-indigo-600 uppercase">Blog</span>
                    <h3 class="text-xl font-bold text-slate-900 mt-2 mb-3">5 Strategies to Close Deals Faster in 2024</h3>
                    <p class="text-slate-600 text-sm mb-4">Learn the top techniques high-performing sales teams use to shorten their sales cycles and increase conversion.</p>
                    <span class="text-indigo-600 font-semibold text-sm group-hover:underline">Read Article &rarr;</span>
                </div>
            </div>
            
            <!-- Documentation -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                <div class="h-48 bg-blue-50 flex items-center justify-center text-blue-300 group-hover:bg-blue-100 transition-colors">
                     <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
                </div>
                <div class="p-6">
                    <span class="text-xs font-bold text-blue-600 uppercase">Help Center</span>
                    <h3 class="text-xl font-bold text-slate-900 mt-2 mb-3">Getting Started Guide</h3>
                    <p class="text-slate-600 text-sm mb-4">Everything you need to set up your pipeline, import contacts, and invite your team members.</p>
                    <span class="text-blue-600 font-semibold text-sm group-hover:underline">View Docs &rarr;</span>
                </div>
            </div>

             <!-- API -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                <div class="h-48 bg-slate-100 flex items-center justify-center text-slate-300 group-hover:bg-slate-200 transition-colors">
                    <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
                </div>
                <div class="p-6">
                    <span class="text-xs font-bold text-slate-600 uppercase">Developers</span>
                    <h3 class="text-xl font-bold text-slate-900 mt-2 mb-3">API Reference</h3>
                    <p class="text-slate-600 text-sm mb-4">Integrate Calsoft CRM with your existing stack using our comprehensive REST API.</p>
                    <span class="text-slate-700 font-semibold text-sm group-hover:underline">Read API Docs &rarr;</span>
                </div>
            </div>
            
             <!-- Community -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                <div class="h-48 bg-purple-50 flex items-center justify-center text-purple-300 group-hover:bg-purple-100 transition-colors">
                    <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                </div>
                <div class="p-6">
                    <span class="text-xs font-bold text-purple-600 uppercase">Community</span>
                    <h3 class="text-xl font-bold text-slate-900 mt-2 mb-3">Join the Conversation</h3>
                    <p class="text-slate-600 text-sm mb-4">Connect with other sales professionals, share tips, and request features.</p>
                    <span class="text-purple-600 font-semibold text-sm group-hover:underline">Join Forum &rarr;</span>
                </div>
            </div>

            <!-- Webinars -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                <div class="h-48 bg-orange-50 flex items-center justify-center text-orange-300 group-hover:bg-orange-100 transition-colors">
                    <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z"/></svg>
                </div>
                <div class="p-6">
                    <span class="text-xs font-bold text-orange-600 uppercase">Webinars</span>
                    <h3 class="text-xl font-bold text-slate-900 mt-2 mb-3">Weekly Live Demos</h3>
                    <p class="text-slate-600 text-sm mb-4">Watch our experts demonstrate advanced workflows and Q&A sessions.</p>
                    <span class="text-orange-600 font-semibold text-sm group-hover:underline">Watch Now &rarr;</span>
                </div>
            </div>
            
             <!-- Templates -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                <div class="h-48 bg-green-50 flex items-center justify-center text-green-300 group-hover:bg-green-100 transition-colors">
                    <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                </div>
                <div class="p-6">
                    <span class="text-xs font-bold text-green-600 uppercase">Templates</span>
                    <h3 class="text-xl font-bold text-slate-900 mt-2 mb-3">Email & Script Library</h3>
                    <p class="text-slate-600 text-sm mb-4">Copy-paste proven sales scripts and email templates directly into your sequences.</p>
                    <span class="text-green-600 font-semibold text-sm group-hover:underline">Browse Library &rarr;</span>
                </div>
            </div>
        </div>
    </div>
  `
})
export class ResourcesComponent {}
