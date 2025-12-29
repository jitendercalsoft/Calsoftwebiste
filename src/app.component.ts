
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      
      <!-- Enterprise Navigation -->
      <nav class="sticky top-0 z-50 bg-white border-b border-slate-200 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-20 items-center">
            <!-- Logo -->
            <a routerLink="/" class="flex items-center gap-2.5 group relative z-50 mr-8">
              <div class="w-9 h-9 bg-[#ff5c35] rounded-full flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <!-- Abstract "C" logo similar to SF cloud or HubSpot sprocket -->
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
              </div>
              <span class="font-bold text-xl tracking-tight text-slate-900">Calsoft<span class="text-[#ff5c35]">CRM</span></span>
            </a>
            
            <!-- Desktop Menu -->
            <div class="hidden lg:flex items-center space-x-6">
              
              <!-- Features Dropdown -->
              <div class="relative group">
                <button class="flex items-center gap-1.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#ff5c35] transition-colors focus:outline-none">
                  Features
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:rotate-180 transition-transform duration-200 opacity-70"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                
                <!-- Mega Menu -->
                <div class="absolute left-0 top-full pt-4 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform group-hover:translate-y-0 translate-y-2">
                  <div class="bg-white rounded-lg shadow-xl border border-slate-200 p-4 ring-1 ring-slate-900/5">
                    <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-3">The Platform</div>
                    
                    <a routerLink="/lead-management" class="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-lg group/item transition-colors">
                      <div class="mt-1 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      </div>
                      <div>
                        <div class="font-bold text-slate-900 text-sm">Lead Management</div>
                        <p class="text-xs text-slate-500 mt-0.5">Capture & Nurture</p>
                      </div>
                    </a>
                    
                    <a routerLink="/pipeline" class="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-lg group/item transition-colors">
                      <div class="mt-1 w-8 h-8 rounded-full bg-orange-100 text-[#ff5c35] flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                      </div>
                      <div>
                        <div class="font-bold text-slate-900 text-sm">Visual Pipeline</div>
                        <p class="text-xs text-slate-500 mt-0.5">Deals & Forecasting</p>
                      </div>
                    </a>

                    <a routerLink="/follow-up" class="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-lg group/item transition-colors">
                      <div class="mt-1 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                      </div>
                      <div>
                        <div class="font-bold text-slate-900 text-sm">Automated Follow-Up</div>
                        <p class="text-xs text-slate-500 mt-0.5">Smart Tasks & Email</p>
                      </div>
                    </a>

                    <a routerLink="/sequencing" class="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-lg group/item transition-colors">
                      <div class="mt-1 w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      </div>
                      <div>
                        <div class="font-bold text-slate-900 text-sm">Sales Sequencing</div>
                        <p class="text-xs text-slate-500 mt-0.5">Multi-channel Outreach</p>
                      </div>
                    </a>

                    <a routerLink="/reports" class="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-lg group/item transition-colors">
                      <div class="mt-1 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                      </div>
                      <div>
                        <div class="font-bold text-slate-900 text-sm">Real-Time Reports</div>
                        <p class="text-xs text-slate-500 mt-0.5">Executive Analytics</p>
                      </div>
                    </a>

                    <a routerLink="/whatsapp" class="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-lg group/item transition-colors">
                      <div class="mt-1 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                      </div>
                      <div>
                        <div class="font-bold text-slate-900 text-sm">WhatsApp CRM</div>
                        <p class="text-xs text-slate-500 mt-0.5">Chat & Automation</p>
                      </div>
                    </a>

                    <a routerLink="/integrations" class="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-lg group/item transition-colors">
                      <div class="mt-1 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
                      </div>
                      <div>
                        <div class="font-bold text-slate-900 text-sm">Integrations</div>
                        <p class="text-xs text-slate-500 mt-0.5">Marketplace & API</p>
                      </div>
                    </a>

                    <div class="border-t border-slate-100 mt-2 pt-2">
                       <a routerLink="/features" class="block w-full text-center text-sm font-semibold text-[#ff5c35] hover:underline">View All Features</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- ROI Calculator as Top Level Item -->
              <a routerLink="/roi-calculator" routerLinkActive="text-[#ff5c35]" class="text-sm font-semibold text-slate-700 hover:text-[#ff5c35] transition-colors">Calculator</a>

              <a routerLink="/pricing" class="text-sm font-semibold text-slate-700 hover:text-[#ff5c35] transition-colors">Pricing</a>
              <a routerLink="/resources" class="text-sm font-semibold text-slate-700 hover:text-[#ff5c35] transition-colors">Resources</a>
              <a routerLink="/partner" class="text-sm font-semibold text-slate-700 hover:text-[#ff5c35] transition-colors">Partner</a>
              <a routerLink="/about" class="text-sm font-semibold text-slate-700 hover:text-[#ff5c35] transition-colors">Company</a>
            </div>

            <!-- CTA Actions -->
            <div class="hidden lg:flex items-center gap-4 ml-auto">
               <button class="text-slate-900 font-bold text-sm hover:text-[#ff5c35] transition-colors">Log in</button>
               <a routerLink="/pricing" class="bg-[#ff5c35] text-white px-6 py-2.5 rounded text-sm font-bold hover:bg-[#e04824] transition-colors shadow-sm active:translate-y-px">Get a demo</a>
            </div>

            <!-- Mobile Menu Button -->
            <div class="lg:hidden">
              <button (click)="toggleMobileMenu()" class="text-slate-600 p-2 hover:bg-slate-100 rounded-lg">
                @if(!mobileMenuOpen()) {
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                } @else {
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
                }
              </button>
            </div>
          </div>
        </div>
        
        <!-- Mobile Menu -->
        @if (mobileMenuOpen()) {
          <div class="lg:hidden bg-white border-b border-slate-100 p-4 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl absolute w-full top-20 left-0 z-40 animate-in slide-in-from-top-4 duration-200">
            <div class="space-y-1">
               <a routerLink="/roi-calculator" (click)="toggleMobileMenu()" class="block px-4 py-3 text-slate-700 font-semibold hover:bg-slate-50 rounded-lg bg-teal-50 text-teal-700">ROI Calculator</a>
               <a routerLink="/lead-management" (click)="toggleMobileMenu()" class="block px-4 py-3 text-slate-700 font-semibold hover:bg-slate-50 rounded-lg">Lead Management</a>
               <a routerLink="/pipeline" (click)="toggleMobileMenu()" class="block px-4 py-3 text-slate-700 font-semibold hover:bg-slate-50 rounded-lg">Visual Pipeline</a>
               <a routerLink="/follow-up" (click)="toggleMobileMenu()" class="block px-4 py-3 text-slate-700 font-semibold hover:bg-slate-50 rounded-lg">Automated Follow-Up</a>
               <a routerLink="/sequencing" (click)="toggleMobileMenu()" class="block px-4 py-3 text-slate-700 font-semibold hover:bg-slate-50 rounded-lg">Sales Sequencing</a>
               <a routerLink="/reports" (click)="toggleMobileMenu()" class="block px-4 py-3 text-slate-700 font-semibold hover:bg-slate-50 rounded-lg">Real-Time Reports</a>
               <a routerLink="/whatsapp" (click)="toggleMobileMenu()" class="block px-4 py-3 text-slate-700 font-semibold hover:bg-slate-50 rounded-lg">WhatsApp CRM</a>
               <a routerLink="/integrations" (click)="toggleMobileMenu()" class="block px-4 py-3 text-slate-700 font-semibold hover:bg-slate-50 rounded-lg">Integrations</a>
            </div>
            <div class="border-t border-slate-100 pt-2 space-y-1">
                <a routerLink="/pricing" (click)="toggleMobileMenu()" class="block px-4 py-3 text-slate-700 font-semibold hover:bg-slate-50 rounded-lg">Pricing</a>
                <a routerLink="/about" (click)="toggleMobileMenu()" class="block px-4 py-3 text-slate-700 font-semibold hover:bg-slate-50 rounded-lg">About Us</a>
                <a routerLink="/partner" (click)="toggleMobileMenu()" class="block px-4 py-3 text-slate-700 font-semibold hover:bg-slate-50 rounded-lg">Partner Program</a>
            </div>
            <div class="pt-4">
               <button class="w-full bg-[#ff5c35] text-white px-4 py-3 rounded-lg text-sm font-bold shadow-sm">Get Started Free</button>
            </div>
          </div>
        }
      </nav>

      <!-- Main Content -->
      <main class="flex-1 w-full">
        <router-outlet></router-outlet>
      </main>

      <!-- Enterprise Footer -->
      <footer class="bg-[#1e293b] text-slate-300 pt-20 pb-12 border-t border-slate-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
                
                <!-- Col 1 -->
                <div class="col-span-2 lg:col-span-2">
                    <a routerLink="/" class="flex items-center gap-2 mb-6">
                        <div class="w-8 h-8 bg-[#ff5c35] rounded-full flex items-center justify-center text-white">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                        </div>
                        <span class="font-bold text-xl text-white">Calsoft<span class="text-[#ff5c35]">CRM</span></span>
                    </a>
                    <p class="text-sm leading-relaxed text-slate-400 mb-6 max-w-sm">
                        The customer platform for scaling companies. 
                        Bringing 32 years of enterprise innovation to the SME market.
                    </p>
                    <div class="flex gap-5">
                        <a href="#" class="text-slate-400 hover:text-white transition-colors"><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
                        <a href="#" class="text-slate-400 hover:text-white transition-colors"><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg></a>
                        <a href="#" class="text-slate-400 hover:text-white transition-colors"><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                    </div>
                </div>

                <!-- Col 2 -->
                <div>
                    <h4 class="text-white font-bold mb-6">Popular Features</h4>
                    <ul class="space-y-3 text-sm">
                        <li><a routerLink="/pipeline" class="hover:text-[#ff5c35] transition-colors">Visual Pipeline</a></li>
                        <li><a routerLink="/whatsapp" class="hover:text-[#ff5c35] transition-colors">WhatsApp CRM</a></li>
                        <li><a routerLink="/sequencing" class="hover:text-[#ff5c35] transition-colors">Email Sequences</a></li>
                        <li><a routerLink="/reports" class="hover:text-[#ff5c35] transition-colors">Sales Reporting</a></li>
                        <li><a routerLink="/integrations" class="hover:text-[#ff5c35] transition-colors">Integrations</a></li>
                    </ul>
                </div>

                <!-- Col 3 -->
                <div>
                    <h4 class="text-white font-bold mb-6">Resources</h4>
                    <ul class="space-y-3 text-sm">
                        <li><a routerLink="/resources" class="hover:text-[#ff5c35] transition-colors">Blog</a></li>
                        <li><a routerLink="/resources" class="hover:text-[#ff5c35] transition-colors">Ebooks & Guides</a></li>
                        <li><a href="#" class="hover:text-[#ff5c35] transition-colors">Customer Stories</a></li>
                        <li><a href="#" class="hover:text-[#ff5c35] transition-colors">Developers API</a></li>
                        <li><a href="#" class="hover:text-[#ff5c35] transition-colors">Help Center</a></li>
                    </ul>
                </div>

                <!-- Col 4 -->
                <div>
                    <h4 class="text-white font-bold mb-6">Company</h4>
                    <ul class="space-y-3 text-sm">
                        <li><a routerLink="/about" class="hover:text-[#ff5c35] transition-colors">About Us</a></li>
                        <li><a href="#" class="hover:text-[#ff5c35] transition-colors">Careers</a></li>
                        <li><a href="#" class="hover:text-[#ff5c35] transition-colors">Investor Relations</a></li>
                        <li><a href="#" class="hover:text-[#ff5c35] transition-colors">Contact Us</a></li>
                        <li><a routerLink="/partner" class="hover:text-[#ff5c35] transition-colors">Partners</a></li>
                    </ul>
                </div>

            </div>
            
            <!-- Bottom Bar -->
            <div class="pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                <div>
                    &copy; 2024 California Software Company Limited. All rights reserved.
                </div>
                <div class="flex gap-6">
                    <a href="#" class="hover:text-white">Privacy Policy</a>
                    <a href="#" class="hover:text-white">Terms of Service</a>
                    <a href="#" class="hover:text-white">Security</a>
                </div>
            </div>
        </div>
      </footer>

    </div>
  `
})
export class AppComponent {
  mobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }
}
