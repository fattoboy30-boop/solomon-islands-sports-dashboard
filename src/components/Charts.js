'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const COLORS = ['#003580', '#FFD700', '#228B22', '#CE1126', '#8B4513', '#9370DB', '#F97316']

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="text-white font-semibold text-sm">{label || payload[0].name}</p>
        <p className="text-white/70 text-xs mt-1">
          {payload[0].value} {payload[0].value === 1 ? 'event' : 'events'}
        </p>
      </div>
    )
  }
  return null
}

export default function Charts({ chartData }) {
  return (
    <div className="mb-8">
      {/* Section Header */}
      <div className="section-header">
        <h2>Analytics</h2>
        <div className="section-line" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Events by Year */}
        <div className="glass p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Events by Year</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={chartData.eventsByYear} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis
                dataKey="year"
                tick={{ fontSize: 12, fill: 'rgba(255,255,255,0.5)' }}
                axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              />
              <YAxis
                tick={{ fontSize: 12, fill: 'rgba(255,255,255,0.5)' }}
                axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="count"
                radius={[6, 6, 0, 0]}
                fill="url(#barGradient)"
              />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFD700" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#003580" stopOpacity={0.7} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Events by Sport */}
        <div className="glass p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Events by Sport</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={chartData.eventsBySport}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={4}
                dataKey="count"
                stroke="none"
              >
                {chartData.eventsBySport.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    fillOpacity={0.85}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {chartData.eventsBySport.map((entry, index) => (
              <div key={entry.sport} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-xs text-white/60 capitalize">{entry.sport}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
