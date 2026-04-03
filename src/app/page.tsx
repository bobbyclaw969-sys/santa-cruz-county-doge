import Image from "next/image";
import { Search, PieChart, DollarSign, Building } from "lucide-react";

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

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);
}

function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
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
              <p className="text-slate-400 mt-1">County Government Spending Tracker</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400">Fiscal Year</p>
              <p className="text-2xl font-bold">2024-25</p>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Banner */}
      <div className="bg-blue-600 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <PieChart className="w-10 h-10 opacity-80" />
            <div>
              <p className="text-sm opacity-80">Departments</p>
              <p className="text-3xl font-bold">{countyData.departments.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Department Spending</h2>
        
        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search departments..." 
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Department Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
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

        {/* Data Source */}
        <div className="mt-8 text-center text-sm text-slate-500">
          <p>Data source: Santa Cruz County Adopted Budget FY 2024-25</p>
          <p className="mt-1">https://www2.santacruzcountyca.gov/AuditorBudget/2024-2025/</p>
        </div>
      </main>
    </div>
  );
}
