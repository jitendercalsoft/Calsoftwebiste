import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-partner',
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="bg-slate-50">
      <!-- Hero Section -->
      <header class="relative bg-slate-900 pt-24 pb-20 text-white overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Partner With Calsoft
          </h1>
          <p class="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Grow with a Trusted Software Brand. Offer proven CRM, ERP, POS, or eCommerce solutions without building them from scratch.
          </p>
          <button (click)="scrollToForm()" class="px-8 py-4 bg-[#ff5c35] text-white rounded-lg text-base font-bold hover:bg-[#e04824] transition-all shadow-lg active:translate-y-px">
            Become a Partner
          </button>
        </div>
      </header>
      
      <!-- Trusted Brands -->
      <div class="bg-white py-12 border-b border-slate-200">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p class="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by a network of high-growth partners</p>
            <div class="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-slate-500">
                <span class="text-2xl font-semibold font-serif italic">GrowthLeap</span>
                <span class="text-2xl font-semibold tracking-wide">Innovatech</span>
                <span class="text-2xl font-semibold font-mono">Digital Nexus</span>
                <span class="text-2xl font-semibold">ScaleUp</span>
                <span class="text-2xl font-semibold tracking-tighter">MarketMinds</span>
            </div>
        </div>
      </div>

      <!-- Program Overview -->
      <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-slate-900">Program Overview</h2>
            </div>
            <div class="grid md:grid-cols-3 gap-8 text-center">
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <div class="text-5xl font-extrabold text-[#ff5c35] mb-2">50%</div>
                    <h3 class="text-lg font-bold text-slate-800 mb-2">Commission Rate</h3>
                    <p class="text-sm text-slate-500">Earn a 50% commission on every qualified sale for the first 12 months.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <div class="text-5xl font-extrabold text-blue-600 mb-2">90</div>
                    <h3 class="text-lg font-bold text-slate-800 mb-2">Day Payment Window</h3>
                    <p class="text-sm text-slate-500">Get paid when someone you refer becomes a customer within 90 days.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <div class="text-5xl font-extrabold text-indigo-600 mb-2">Suite</div>
                    <h3 class="text-lg font-bold text-slate-800 mb-2">Customizable Products</h3>
                    <p class="text-sm text-slate-500">Promote a flexible, scalable platform tailored for various business needs.</p>
                </div>
            </div>
        </div>
      </section>

      <!-- OEM Section -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div class="pr-8">
                <h2 class="text-3xl font-bold text-slate-900 mb-4">OEMs Using Calsoft the Right Way!</h2>
                <p class="text-slate-600 leading-relaxed">
                    From embedding our CRM, POS, or ERP into their product stack to offering white-labeled platforms, OEMs are leveraging Calsoft to accelerate delivery, cut dev costs, and scale faster, all while keeping their brand in front.
                </p>
            </div>
            <div>
                <img class="rounded-lg shadow-xl" src="https://www.calsoftgroup.com/ecom-gateway/ecom-svc-core-1.0-SNAPSHOT/api/core/download?fileName=/home/omguser.png" alt="OEM Solutions Diagram">
            </div>
        </div>
      </section>

      <!-- Who's a Good Fit? -->
      <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 max-w-3xl mx-auto">
                <h2 class="text-3xl font-bold text-slate-900 mb-4">Who’s a Good Fit?</h2>
                <p class="text-slate-600">Our Partner program is ideal for industry associations, publishers, website owners, hosting providers, influencers, Calsoft customers, and any business eager to promote Calsoft’s solutions and earn great rewards.</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Influencers -->
                <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <h3 class="font-bold text-slate-900 mb-2">Influencers & Publishers</h3>
                    <p class="text-sm text-slate-600">Share our products with your community and watch your commissions grow.</p>
                </div>
                 <!-- Agencies -->
                <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <h3 class="font-bold text-slate-900 mb-2">Digital Marketing Agencies</h3>
                    <p class="text-sm text-slate-600">Empower your clients by implementing our streamlined digital solutions.</p>
                </div>
                 <!-- Hosting -->
                <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <h3 class="font-bold text-slate-900 mb-2">Hosting Providers</h3>
                    <p class="text-sm text-slate-600">Boost customer satisfaction with powerful add-ons for your clients.</p>
                </div>
                 <!-- Associations -->
                <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <h3 class="font-bold text-slate-900 mb-2">Industry or Trade Associations</h3>
                    <p class="text-sm text-slate-600">Deliver greater value and help your members digitize their workflows.</p>
                </div>
            </div>
        </div>
      </section>
      
      <!-- Benefits Grid -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-slate-900">Benefits of Becoming a Partner</h2>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="flex items-start gap-4">
                    <img class="w-16 h-16" src="https://www.calsoftgroup.com/ecom-gateway/ecom-svc-core-1.0-SNAPSHOT/api/core/download?fileName=/home/1RecurringRevenueModell.png" alt="Recurring Revenue Model">
                    <div>
                        <h4 class="font-bold text-slate-800">Recurring Revenue Model</h4>
                        <p class="text-sm text-slate-500">Earn residual income for as long as your referred clients stay active.</p>
                    </div>
                </div>
                <div class="flex items-start gap-4">
                    <h4 class="font-bold text-slate-800">No Investment or Inventory Needed</h4>
                </div>
                <div class="flex items-start gap-4">
                    <h4 class="font-bold text-slate-800">Free Access to Sales Tools & Demos</h4>
                </div>
                <div class="flex items-start gap-4">
                    <h4 class="font-bold text-slate-800">Zero Commercial Commitment</h4>
                </div>
                <div class="flex items-start gap-4">
                    <h4 class="font-bold text-slate-800">Flexible Business Opportunities</h4>
                </div>
                <div class="flex items-start gap-4">
                    <h4 class="font-bold text-slate-800">Exclusive Partner Discounts</h4>
                </div>
                 <div class="flex items-start gap-4">
                    <h4 class="font-bold text-slate-800">Dedicated Support & Training</h4>
                </div>
                 <div class="flex items-start gap-4">
                    <h4 class="font-bold text-slate-800">Wide Product Range</h4>
                </div>
                 <div class="flex items-start gap-4">
                    <h4 class="font-bold text-slate-800">Global Opportunity</h4>
                </div>
            </div>
        </div>
      </section>

      <!-- Get Started Section -->
      <section id="partner-form" class="py-24 bg-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-10">
            <h2 class="text-3xl font-extrabold text-slate-900 mb-4">Let's build something great together.</h2>
            <p class="text-lg text-slate-600">
              Ready to take the next step? Fill out the form or use our direct signup portal to initiate the partnership process.
            </p>
          </div>
          <div class="grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-200">
             <!-- Form -->
             <div>
                <h3 class="text-2xl font-bold text-slate-900 mb-6">Partnership Inquiry</h3>
                <form class="space-y-6">
                    <div>
                        <label class="block text-sm font-semibold text-slate-700 mb-2">Name *</label>
                        <input type="text" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#ff5c35] focus:border-transparent outline-none transition-all">
                    </div>
                     <div>
                        <label class="block text-sm font-semibold text-slate-700 mb-2">Enter Number *</label>
                        <input type="tel" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#ff5c35] focus:border-transparent outline-none transition-all">
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                        <input type="email" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#ff5c35] focus:border-transparent outline-none transition-all">
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-slate-700 mb-2">Company Name *</label>
                        <input type="text" class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#ff5c35] focus:border-transparent outline-none transition-all">
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-slate-700 mb-2">Partner Category *</label>
                        <select class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#ff5c35] focus:border-transparent outline-none transition-all bg-white">
                            <option>Influencer / Publisher</option>
                            <option>Digital Marketing Agency</option>
                            <option>Hosting Provider</option>
                            <option>Industry / Trade Association</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <button type="submit" class="w-full bg-[#ff5c35] text-white font-bold text-lg py-4 rounded-lg hover:bg-[#e04824] transition-colors shadow-md active:translate-y-px">
                        Submit Inquiry
                    </button>
                </form>
             </div>
             <!-- Steps -->
             <div class="bg-indigo-50 p-8 rounded-xl border border-indigo-100">
                <h3 class="text-2xl font-bold text-slate-900 mb-8">Get Started</h3>
                <ol class="relative border-l border-indigo-200 space-y-12">                  
                    <li class="ml-6">            
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-indigo-200 rounded-full -left-3 ring-4 ring-white">1</span>
                        <h4 class="font-semibold text-indigo-900">Application Review</h4>
                        <p class="text-sm text-slate-600">Our team reviews your company profile and potential synergies.</p>
                    </li>
                    <li class="ml-6">
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-indigo-200 rounded-full -left-3 ring-4 ring-white">2</span>
                        <h4 class="font-semibold text-indigo-900">Discovery Session</h4>
                        <p class="text-sm text-slate-600">A strategic meeting to align objectives and partnership scope.</p>
                    </li>
                    <li class="ml-6">
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-indigo-200 rounded-full -left-3 ring-4 ring-white">3</span>
                        <h4 class="font-semibold text-indigo-900">Onboarding</h4>
                        <p class="text-sm text-slate-600">Formalizing the agreement and giving you access to our ecosystem.</p>
                    </li>
                </ol>
             </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-24 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div class="space-y-4">
            @for (faq of faqs; track $index; let i = $index) {
              <div class="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden transition-all duration-300">
                <button (click)="toggleFaq(i)" class="w-full flex justify-between items-center text-left p-6">
                  <span class="font-bold text-lg text-slate-900">{{ faq.question }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-slate-500 transition-transform duration-300" [class.rotate-180]="openFaqIndex() === i">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                @if (openFaqIndex() === i) {
                  <div class="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                    <p [innerHTML]="faq.answer"></p>
                  </div>
                }
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    html { scroll-behavior: smooth; }
  `]
})
export class PartnerComponent {
  openFaqIndex = signal<number | null>(null);

  faqs: FaqItem[] = [
    { question: 'What is the Calsoft Partner Program?', answer: 'Our program allows businesses and individuals to earn commissions by promoting Calsoft\'s suite of software solutions.' },
    { question: 'How does the commission structure work?', answer: 'You earn a 50% commission on every qualified sale for the first 12 months. Payments are made for any customer who signs up within 90 days of your referral.' },
    { question: 'Who can join the program?', answer: 'We welcome digital agencies, consultants, influencers, publishers, hosting providers, and trade associations.' },
    { question: 'How do I get started?', answer: 'Simply fill out the inquiry form on this page. Our team will review your application and schedule a discovery session.' },
    { question: 'Are there any costs to join the program?', answer: 'No, the Calsoft Partner Program is completely free to join. There are no hidden fees or minimum sales requirements.' },
  ];

  toggleFaq(index: number) {
    this.openFaqIndex.update(current => (current === index ? null : index));
  }

  scrollToForm() {
    const element = document.getElementById('partner-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
