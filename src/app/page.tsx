import Image from "next/image";
import { Search, PieChart, DollarSign, Building, TrendingUp, FileText, Users, Handshake } from "lucide-react";
import Link from "next/link";

// County budget data
const countyData = {
  fiscal_year: "2024-25",
  total_budget: 864693549,
  general_fund: 821275592,
  departments: [
    { name: "Health Services Agency", budget: 308836576, category: "Health" },
    { name: "Human Services Department", budget: 204094151, category: "Social Services" },
    { name: "Sheriff-Coroner", budget: 109296935, category: "Public Safety" },
    { name: "Public Works", budget: 112986418, category: "Infrastructure" },
    { name: "District Attorney", budget: 25945630, category: "Public Safety" },
    { name: "Probation", budget: 37733127, category: "Public Safety" },
    { name: "Parks & Recreation", budget: 15105681, category: "Recreation" },
    { name: "Planning", budget: 19701679, category: "Development" },
    { name: "Personnel", budget: 7942701, category: "Administration" },
    { name: "Board of Supervisors", budget: 3713293, category: "Administration" },
    { name: "County Admin Office", budget: 14040618, category: "Administration" },
    { name: "Public Defender", budget: 17984026, category: "Public Safety" },
  ]
};

// Categories for money flow visualization
const categories = [
  { name: "Health", total: 308836576, color: "bg-green-500" },
  { name: "Social Services", total: 204094151, color: "bg-purple-500" },
  { name: "Public Safety", total: 194863718, color: "bg-red-500" },
  { name: "Infrastructure", total: 112986418, color: "bg-blue-500" },
  { name: "Administration", total: 29651337, color: "bg-gray-500" },
  { name: "Development", total: 19701679, color: "bg-yellow-500" },
  { name: "Recreation", total: 15105681, color: "bg-teal-500" },
];

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <span className="text-4xl">🐕</span>
                DOGE Santa Cruz
              </h1>
              <p className="text-slate-400 mt-1">Following the Money • Santa Cruz County Government</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400">Fiscal Year</p>
              <p className="text-2xl font-bold">2024-25</p>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Banner */}
      <div className="bg-emerald-600 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-4">
            <DollarSign className="w-10 h-10 opacity-80" />
            <div>
              <p className="text-sm opacity-80">Total Budget</p>
              <p className="text-3xl font-bold">{formatCurrency(countyData.total_budget)}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Building className="w-10 h-10 opacity-80" />
            <div>
              <p className="text-sm opacity-80">General Fund</p>
              <p className="text-3xl font-bold">{formatCurrency(countyData.general_fund)}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Users className="w-10 h-10 opacity-80" />
            <div>
              <p className="text-sm opacity-80">Departments</p>
              <p className="text-3xl font-bold">{countyData.departments.length}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <TrendingUp className="w-10 h-10 opacity-80" />
            <div>
              <p className="text-sm opacity-80">Category Slices</p>
              <p className="text-3xl font-bold">{categories.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex gap-8">
            <a href="#" className="py-4 border-b-2 border-emerald-600 text-emerald-600 font-semibold">
              💰 Budget
            </a>
            <a href="#" className="py-4 border-b-2 border-transparent text-slate-600 hover:text-slate-900">
              🏢 Departments
            </a>
            <a href="#" className="py-4 border-b-2 border-transparent text-slate-600 hover:text-slate-900">
              🤝 Vendors
            </a>
            <a href="#" className="py-4 border-b-2 border-transparent text-slate-600 hover:text-slate-900">
              🏛️ Officials
            </a>
            <a href="#" className="py-4 border-b-2 border-transparent text-slate-600 hover:text-slate-900">
              🌐 Money Trail
            </a>
            <a href="#" className="py-4 border-b-2 border-transparent text-slate-600 hover:text-slate-900">
              📄 Contracts
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-8 px-4">
        
        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search departments, vendors, officials, contracts..." 
              className="w-full pl-10 pr-4 py-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg"
            />
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <PieChart className="w-5 h-5" />
              Spending by Category
            </h2>
            <div className="space-y-3">
              {categories.map((cat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded ${cat.color}`}></div>
                  <span className="flex-1 font-medium text-slate-700">{cat.name}</span>
                  <span className="text-slate-600">{formatCurrency(cat.total)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Handshake className="w-5 h-5" />
              Money Trail (Coming Soon)
            </h2>
            <div className="bg-slate-100 rounded-lg p-4 text-center py-12">
              <p className="text-slate-500 mb-2">📊 Visualization of money flow</p>
              <p className="text-sm text-slate-400">
                We're requesting vendor payment data from the County.<br/>
                Once received, we'll map the complete money trail.
              </p>
              <div className="mt-4 inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm">
                📨 CPRA Request Submitted (April 2, 2026)
              </div>
            </div>
          </div>
        </div>

        {/* Department Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b border-slate-200">
            <h2 className="text-xl font-bold text-slate-800">Department Spending</h2>
          </div>
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Department</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Category</th>
                <th className="text-right py-3 px-4 font-semibold text-slate-700">Budget</th>
                <th className="text-right py-3 px-4 font-semibold text-slate-700">% of Total</th>
              </tr>
            </thead>
            <tbody>
              {countyData.departments
                .sort((a, b) => b.budget - a.budget)
                .map((dept, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="py-3 px-4 font-medium text-slate-800">{dept.name}</td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-2 py-1 bg-slate-200 text-slate-600 text-xs rounded">
                        {dept.category}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right font-mono text-slate-700">
                      {formatCurrency(dept.budget)}
                    </td>
                    <td className="py-3 px-4 text-right text-slate-500">
                      {((dept.budget / countyData.total_budget) * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Vendor Section - Placeholder */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Vendor Payments
          </h2>
          <div className="text-center py-8 bg-slate-50 rounded-lg">
            <p className="text-slate-500">Vendor payment data coming soon</p>
            <p className="text-sm text-slate-400 mt-1">
              Request submitted via CPRA for FY 2023-24 through 2025-26
            </p>
          </div>
        </div>

        {/* Data Source */}
        <div className="mt-8 text-center text-sm text-slate-500">
          <p>Budget data source: Santa Cruz County Adopted Budget FY 2024-25</p>
          <p className="mt-1">https://www2.santacruzcountyca.gov/AuditorBudget/2024-2025/</p>
        </div>
      </main>
    </div>
  );
}
