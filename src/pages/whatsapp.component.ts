import { Component, signal, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  id: number;
  text: string;
  sender: 'me' | 'them';
}

@Component({
  selector: 'app-whatsapp',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="pt-10 pb-12 px-4 max-w-7xl mx-auto">
      <div class="mb-10 text-center max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-slate-900 mb-4">WhatsApp Chatbot & CRM</h1>
        <p class="text-slate-600 text-lg">
          Close deals where the conversation happens. Centralize chats, automate responses with our no-code builder, and manage bulk outreach securely.
        </p>
      </div>

      <div class="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex h-[650px] mb-12">
        
        <!-- Sidebar -->
        <div class="w-80 border-r border-slate-200 flex flex-col bg-slate-50">
           <div class="p-4 bg-slate-100 border-b border-slate-200">
             <h3 class="font-bold text-slate-700">Inbox</h3>
           </div>
           <div class="flex-1 overflow-y-auto">
             <div class="p-4 bg-white border-l-4 border-indigo-600 hover:bg-indigo-50 cursor-pointer transition-colors">
               <div class="flex justify-between mb-1">
                 <span class="font-bold text-slate-900">Sarah Connor</span>
                 <span class="text-xs text-slate-400">10:42 AM</span>
               </div>
               <p class="text-sm text-slate-500 truncate">Does the enterprise plan include API access?</p>
               <span class="inline-block mt-2 px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded">WhatsApp</span>
             </div>
             <!-- Mock Items -->
             <div class="p-4 hover:bg-slate-100 cursor-pointer transition-colors opacity-60">
               <div class="flex justify-between mb-1">
                 <span class="font-bold text-slate-900">Kyle Reese</span>
                 <span class="text-xs text-slate-400">Yesterday</span>
               </div>
               <p class="text-sm text-slate-500 truncate">Great, thank you!</p>
               <span class="inline-block mt-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded">Facebook</span>
             </div>
           </div>

           <!-- Interactive Tip -->
           <div class="mt-auto p-4 bg-indigo-50 border-t border-indigo-100">
             <h4 class="font-bold text-indigo-900 text-xs mb-2 uppercase">Try this demo:</h4>
             <ul class="text-[11px] text-indigo-800 space-y-2 list-disc pl-3 leading-tight">
               <li>Type a message and press Enter to simulate a conversation.</li>
               <li>Notice how automated replies can handle initial queries.</li>
               <li>See how context (Deal Stage: Qualification) is visible at the top to give reps full context.</li>
             </ul>
           </div>
        </div>

        <!-- Chat Area -->
        <div class="flex-1 flex flex-col bg-[#e5ddd5]">
           <!-- Header -->
           <div class="bg-white p-4 border-b border-slate-200 flex justify-between items-center shadow-sm z-10">
             <div class="flex items-center gap-3">
               <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">SC</div>
               <div>
                 <h4 class="font-bold text-slate-800">Sarah Connor</h4>
                 <p class="text-xs text-slate-500">Lead • Qualification Stage</p>
               </div>
             </div>
             <button class="text-indigo-600 font-medium text-sm hover:underline">View Deal Details</button>
           </div>

           <!-- Messages -->
           <div class="flex-1 overflow-y-auto p-6 space-y-4" #scrollContainer>
              @for (msg of messages(); track msg.id) {
                <div class="flex" [class.justify-end]="msg.sender === 'me'">
                  <div class="max-w-[70%] p-3 rounded-lg shadow-sm text-sm relative"
                       [class.bg-white]="msg.sender === 'them'"
                       [class.rounded-tl-none]="msg.sender === 'them'"
                       [class.bg-[#dcf8c6]]="msg.sender === 'me'"
                       [class.rounded-tr-none]="msg.sender === 'me'">
                     
                     <p class="text-slate-900">{{ msg.text }}</p>
                     
                     <span class="text-[10px] text-slate-400 block text-right mt-1">10:45 AM</span>
                  </div>
                </div>
              }
           </div>

           <!-- Input -->
           <div class="bg-white p-4 border-t border-slate-200">
             <div class="flex gap-2">
               <input 
                 [(ngModel)]="newMessage" 
                 (keydown.enter)="sendMessage()"
                 type="text" 
                 placeholder="Type a message..." 
                 class="flex-1 bg-slate-100 border-none rounded-full px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none">
               <button (click)="sendMessage()" class="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-sm">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
               </button>
             </div>
           </div>
        </div>
      </div>
      
      <!-- Key Features Grid (Updated as per user request) -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div class="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
           <div class="text-green-600 mb-3">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
           </div>
           <h5 class="font-bold text-slate-800 mb-2">Template Message Management</h5>
           <p class="text-sm text-slate-600">Create and manage WhatsApp template messages directly in the chatbot and Meta for smooth customer outreach.</p>
        </div>

        <div class="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
           <div class="text-green-600 mb-3">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
           </div>
           <h5 class="font-bold text-slate-800 mb-2">Contact Group Creation</h5>
           <p class="text-sm text-slate-600">Organize your contacts into groups for better segmentation and targeted communication.</p>
        </div>

        <div class="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
           <div class="text-green-600 mb-3">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
           </div>
           <h5 class="font-bold text-slate-800 mb-2">Bulk Messaging</h5>
           <p class="text-sm text-slate-600">Send bulk WhatsApp messages quickly and securely to reach multiple customers at once.</p>
        </div>

        <div class="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
           <div class="text-green-600 mb-3">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="8" x="2" y="2" rx="2"/><path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"/><path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"/><path d="M10 22c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2"/><path d="M4 22c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2"/><rect width="8" height="8" x="14" y="14" rx="2"/></svg>
           </div>
           <h5 class="font-bold text-slate-800 mb-2">No-Code Bot Flow Builder</h5>
           <p class="text-sm text-slate-600">Design automated chatbot flows easily without any coding knowledge.</p>
        </div>

        <div class="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
           <div class="text-green-600 mb-3">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h10"/><path d="M6 12h12"/><path d="M4 18h14"/></svg>
           </div>
           <h5 class="font-bold text-slate-800 mb-2">Interactive Buttons & Lists</h5>
           <p class="text-sm text-slate-600">Engage users with quick reply buttons and list messages to guide them through conversations.</p>
        </div>

        <div class="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
           <div class="text-green-600 mb-3">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 4v2"/><path d="M4 15h2"/><path d="M4 9h2"/><path d="M15 20v2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 4v2"/><path d="M9 20v2"/></svg>
           </div>
           <h5 class="font-bold text-slate-800 mb-2">Website & QR Code Integration</h5>
           <p class="text-sm text-slate-600">Connect customers instantly using a WhatsApp chat link or QR code on your website and marketing materials.</p>
        </div>
        
        <!-- CRM Integration (Full Width) -->
        <div class="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow md:col-span-2 lg:col-span-3 border-t-2 border-green-500">
           <div class="flex items-center gap-4">
              <div class="text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 16v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4.5a2.5 2.5 0 1 1 4 0V5h10a2 2 0 0 1 2 2h4.5a2.5 2.5 0 0 1 0 5H20v1.5a2.5 2.5 0 0 1-5 0V12a2.5 2.5 0 0 1 0-5H6"/><path d="M9 9h3"/><path d="M9 13h3"/><path d="M9 17h3"/></svg>
              </div>
              <div>
                  <h5 class="font-bold text-slate-800 mb-1">CRM Integration</h5>
                  <p class="text-sm text-slate-600">Seamlessly integrate the WhatsApp chatbot with your CRM to manage leads, customer data, and conversations in one place.</p>
              </div>
           </div>
        </div>

      </div>

       <!-- SEO Content Area -->
      <div class="border-t border-slate-200 pt-12">
        <h2 class="text-2xl font-bold text-slate-900 mb-6 text-center">The Future of Sales is Conversational</h2>
        <div class="grid md:grid-cols-2 gap-12 text-slate-600 leading-relaxed">
           <div>
             <h3 class="font-bold text-slate-900 mb-2">Why WhatsApp?</h3>
             <p class="mb-4">
               With over 2 billion active users, WhatsApp is where your customers live. It offers open rates of <strong>98%</strong> compared to email's 20%. By integrating the <strong>WhatsApp Business API</strong> directly into Calsoft CRM, you allow your team to manage thousands of conversations without swapping devices or losing context.
             </p>
             <h3 class="font-bold text-slate-900 mb-2">24/7 Automated Chatbots</h3>
             <p>
               Deploy intelligent, no-code chatbots to qualify leads, answer frequently asked questions, and book meetings around the clock. Your chatbot acts as a first-response agent, ensuring every inbound query gets an instant reply, even when your team is offline. This frees up your reps to focus on high-value conversations.
             </p>
           </div>
           <div>
             <h3 class="font-bold text-slate-900 mb-2">Social Selling on Autopilot</h3>
             <p class="mb-4">
               Running ads on Facebook or Instagram? Use the "Click to WhatsApp" objective. Calsoft CRM's <strong>Auto-Capture</strong> feature instantly creates a new lead profile in your CRM the moment they message you, ensuring that social traffic is captured, assigned, and nurtured immediately.
             </p>
             <h3 class="font-bold text-slate-900 mb-2">Build Your Custom Bot Flow</h3>
             <p>
               Go beyond simple replies. Use our visual, no-code builder to design custom conversation flows. Qualify leads, answer complex queries, and route conversations to the right specialist only when a human touch is needed. Automate your entire lead qualification process.
             </p>
           </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-20 pt-12 border-t border-slate-200">
        <h2 class="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">Can I keep my existing WhatsApp number?</h3>
                <p class="text-slate-600 text-sm">Yes, you can migrate your existing number to the WhatsApp Business API. Note that once migrated, it cannot be used on the standard WhatsApp mobile app.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">Is there an extra cost for WhatsApp messages?</h3>
                <p class="text-slate-600 text-sm">Yes, WhatsApp charges a small fee per conversation (24-hour window) initiated by the business. User-initiated conversations are often free or cheaper.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">Does it support images and videos?</h3>
                <p class="text-slate-600 text-sm">Yes, you can send and receive images, videos, PDFs, and documents directly within the CRM interface.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">What happens if I get blocked?</h3>
                <p class="text-slate-600 text-sm">We provide tools to manage your "Quality Rating" and ensure compliance with Meta's policies to prevent blocking. We also support template pre-approval.</p>
            </div>
        </div>
      </div>
    </div>
  `
})
export class WhatsappComponent {
  messages = signal<Message[]>([
    { id: 1, text: "Hi, I'm interested in your Enterprise plan.", sender: 'them' },
    { id: 2, text: "Hello Sarah! Great to hear. What specific features are you looking for?", sender: 'me' },
    { id: 3, text: "Does it include API access?", sender: 'them' },
    { id: 4, text: "Yes, it includes full API access and 24/7 support.", sender: 'me' },
  ]);

  newMessage = '';

  sendMessage() {
    if (!this.newMessage.trim()) return;
    this.messages.update(msgs => [...msgs, { id: Date.now(), text: this.newMessage, sender: 'me' }]);
    this.newMessage = '';
    
    // Auto reply simulation
    setTimeout(() => {
       this.messages.update(msgs => [...msgs, { id: Date.now(), text: "That sounds perfect. How do I sign up?", sender: 'them' }]);
    }, 2000);
  }
}