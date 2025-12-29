
import { Component, ElementRef, ViewChild, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as d3 from 'd3';

@Component({
  selector: 'app-reports',
  imports: [CommonModule],
  template: `
    <div class="pt-10 pb-12 px-4 max-w-7xl mx-auto">
      <div class="mb-10 text-center max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-slate-900 mb-4">Executive Analytics</h1>
        <p class="text-slate-600 text-lg">
          Data that drives dominance. Gain total visibility into sales performance, spot bottlenecks instantly, and track KPIs in real-time.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <!-- Chart 1: Revenue Forecast -->
        <div class="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col">
           <div class="mb-4">
             <h3 class="font-bold text-slate-800">Revenue by Stage</h3>
             <p class="text-xs text-slate-500 mt-1">
               Visualizes the total value of deals currently in each stage. Notice the large volume in 'Closed Won', indicating strong recent performance.
             </p>
           </div>
           <div #barChartContainer class="w-full h-[300px] flex-1"></div>
        </div>

        <!-- Chart 2: Conversion Funnel (Mocked with simple HTML/CSS for variety) -->
        <div class="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
           <h3 class="font-bold text-slate-800 mb-2">Pipeline Conversion Funnel</h3>
           <p class="text-xs text-slate-500 mb-6">
              Tracks the percentage of leads moving successfully to the next stage. This highlights process inefficiencies.
           </p>
           <div class="space-y-4">
              <div class="relative pt-1">
                <div class="flex mb-2 items-center justify-between">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      Qualification
                    </span>
                  </div>
                  <div class="text-right">
                    <span class="text-xs font-semibold inline-block text-blue-600">
                      100 Leads
                    </span>
                  </div>
                </div>
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                  <div style="width:100%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
              </div>

              <div class="relative pt-1 px-4">
                <div class="flex mb-2 items-center justify-between">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                      Proposal
                    </span>
                  </div>
                  <div class="text-right">
                    <span class="text-xs font-semibold inline-block text-indigo-600">
                      45 Leads (45%)
                    </span>
                  </div>
                </div>
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-100">
                  <div style="width:45%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
                </div>
              </div>

              <div class="relative pt-1 px-8">
                <div class="flex mb-2 items-center justify-between">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                      Negotiation
                    </span>
                  </div>
                  <div class="text-right">
                    <span class="text-xs font-semibold inline-block text-purple-600">
                      20 Leads (20%)
                    </span>
                  </div>
                </div>
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-100">
                  <div style="width:20%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                </div>
              </div>

              <div class="relative pt-1 px-12">
                <div class="flex mb-2 items-center justify-between">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                      Closed Won
                    </span>
                  </div>
                  <div class="text-right">
                    <span class="text-xs font-semibold inline-block text-green-600">
                      12 Deals (12%)
                    </span>
                  </div>
                </div>
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-100">
                  <div style="width:12%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                </div>
              </div>
           </div>
           
           <!-- Enhanced Bottleneck Alert -->
           <div class="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-100 flex gap-3">
             <div class="text-orange-600 mt-1">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
             </div>
             <div>
               <p class="text-sm font-bold text-orange-800 mb-1">Bottleneck Detected</p>
               <p class="text-xs text-orange-700 leading-relaxed">
                 Only 45% of leads move from Proposal to Negotiation. This is below the industry standard of 60%. 
                 <strong>Recommendation:</strong> Review your proposal templates or pricing strategy.
               </p>
             </div>
           </div>
        </div>
      </div>
      
      <!-- KPI Cards -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div class="bg-white p-4 rounded-xl shadow border border-slate-100 text-center">
           <p class="text-slate-500 text-xs uppercase font-bold tracking-wide mb-1">Total Revenue</p>
           <p class="text-2xl font-bold text-slate-900">$1.2M</p>
           <span class="text-green-500 text-xs font-medium">↑ 12% vs last month</span>
        </div>
        <div class="bg-white p-4 rounded-xl shadow border border-slate-100 text-center">
           <p class="text-slate-500 text-xs uppercase font-bold tracking-wide mb-1">Avg Deal Size</p>
           <p class="text-2xl font-bold text-slate-900">$15.5k</p>
           <span class="text-slate-400 text-xs font-medium">- 1% vs last month</span>
        </div>
        <div class="bg-white p-4 rounded-xl shadow border border-slate-100 text-center">
           <p class="text-slate-500 text-xs uppercase font-bold tracking-wide mb-1">Avg Cycle Time</p>
           <p class="text-2xl font-bold text-slate-900">24 Days</p>
           <span class="text-green-500 text-xs font-medium">↓ 3 days (Faster)</span>
        </div>
        <div class="bg-white p-4 rounded-xl shadow border border-slate-100 text-center">
           <p class="text-slate-500 text-xs uppercase font-bold tracking-wide mb-1">Win Rate</p>
           <p class="text-2xl font-bold text-slate-900">32%</p>
           <span class="text-green-500 text-xs font-medium">↑ 4% vs last month</span>
        </div>
      </div>

       <!-- SEO Content Area -->
      <div class="border-t border-slate-200 pt-12">
        <h2 class="text-2xl font-bold text-slate-900 mb-6 text-center">From Data to Actionable Strategy</h2>
        <div class="grid md:grid-cols-2 gap-12 text-slate-600 leading-relaxed">
           <div>
             <h3 class="font-bold text-slate-900 mb-2">Metrics That Matter</h3>
             <p class="mb-4">
               Many CRMs overwhelm you with vanity metrics. Calsoft CRM focuses on the four levers that actually drive revenue: <strong>Volume</strong> (total pipeline), <strong>Velocity</strong> (sales cycle time), <strong>Conversion</strong> (win rate), and <strong>Value</strong> (average deal size). By monitoring these KPIs in real-time, you can diagnose the health of your sales organization instantly.
             </p>
             <h3 class="font-bold text-slate-900 mb-2">Bottleneck Analysis</h3>
             <p>
               Where do your deals go to die? Our <strong>Conversion Funnel Report</strong> (shown above) visually tracks the flow of leads from one stage to the next. If you see a massive drop-off between "Proposal" and "Negotiation," you know exactly where to focus your coaching efforts or process improvements.
             </p>
           </div>
           <div>
             <h3 class="font-bold text-slate-900 mb-2">Activity vs. Outcome</h3>
             <p class="mb-4">
               You can't manage results, but you can manage activity. Our reports allow you to drill down into individual rep performance. Are they making enough calls? Are they sending enough emails? Correlate activity volume with closed revenue to identify your hardest workers and your most efficient closers.
             </p>
             <h3 class="font-bold text-slate-900 mb-2">Automated Reporting</h3>
             <p>
               Stop wasting Friday afternoons compiling spreadsheets for the board meeting. Calsoft CRM updates your dashboards in real-time. Schedule automated PDF reports to be emailed to key stakeholders every Monday morning, ensuring everyone is aligned on the targets.
             </p>
           </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-20 pt-12 border-t border-slate-200">
        <h2 class="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">Can I export the reports?</h3>
                <p class="text-slate-600 text-sm">Yes, you can export any dashboard or chart as a CSV, PDF, or Excel file for further analysis.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">Is the data real-time?</h3>
                <p class="text-slate-600 text-sm">Yes, dashboards update instantly as your team moves deals, logs calls, or closes business.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">Can I create custom reports?</h3>
                <p class="text-slate-600 text-sm">Enterprise plans include a custom report builder, allowing you to slice and dice your data by any custom field.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 class="font-bold text-slate-900 mb-2">Can I schedule email reports?</h3>
                <p class="text-slate-600 text-sm">Yes, you can set up automated email delivery of key dashboards to yourself or your stakeholders on a daily, weekly, or monthly basis.</p>
            </div>
        </div>
      </div>
    </div>
  `
})
export class ReportsComponent implements AfterViewInit {
  @ViewChild('barChartContainer') barChartContainer!: ElementRef;

  ngAfterViewInit() {
    this.createBarChart();
  }

  createBarChart() {
    const data = [
      { stage: 'Qual', value: 50000 },
      { stage: 'Prop', value: 120000 },
      { stage: 'Neg', value: 80000 },
      { stage: 'Won', value: 200000 }
    ];

    const element = this.barChartContainer.nativeElement;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = element.offsetWidth - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3.select(element).append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
      .range([0, width])
      .padding(0.2)
      .domain(data.map(d => d.stage));

    const y = d3.scaleLinear()
      .range([height, 0])
      .domain([0, 220000]);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("text-anchor", "middle")
      .style("font-family", "Inter")
      .style("font-size", "12px")
      .style("color", "#64748b");

    svg.append('g')
      .call(d3.axisLeft(y).ticks(5).tickFormat(d => `$${d/1000}k`))
      .selectAll("text")
      .style("font-family", "Inter")
      .style("font-size", "11px")
      .style("color", "#64748b");

    // Bars
    svg.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.stage)!)
      .attr('width', x.bandwidth())
      .attr('y', d => y(d.value))
      .attr('height', d => height - y(d.value))
      .attr('fill', '#6366f1')
      .attr('rx', 4);
      
    // Remove default axis lines for cleaner look
    svg.selectAll('.domain').remove();
    svg.selectAll('.tick line').attr('stroke', '#e2e8f0');
  }
}
