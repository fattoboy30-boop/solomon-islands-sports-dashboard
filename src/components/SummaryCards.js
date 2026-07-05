'use client'

const SPORT_CONFIG = {
  football: { icon: '⚽', color: 'green', gradient: 'from-green-500/20 to-green-600/10', glow: '#228B22' },
  athletics: { icon: '🏃', color: 'blue', gradient: 'from-blue-500/20 to-blue-600/10', glow: '#3B82F6' },
  rugby: { icon: '🏉', color: 'purple', gradient: 'from-purple-500/20 to-purple-600/10', glow: '#8B4513' },
  basketball: { icon: '🏀', color: 'orange', gradient: 'from-orange-500/20 to-orange-600/10', glow: '#F97316' },
  olympics: { icon: '🏅', color: 'red', gradient: 'from-red-500/20 to-red-600/10', glow: '#CE1126' }
}

export default function SummaryCards({ stats }) {
  const mainStats = [
    { label: 'Total Events', value: stats.totalEvents, accent: '#FFD700', glow: 'rgba(255, 215, 0, 0.15)' },
    { label: 'Sports Covered', value: Object.keys(stats.bySport).length, accent: '#003580', glow: 'rgba(0, 53, 128, 0.15)' },
    { label: 'Top Performers', value: stats.topPerformers.length, accent: '#228B22', glow: 'rgba(34, 139, 34, 0.15)' },
    { label: 'Recent Results', value: stats.recentResults.length, accent: '#CE1126', glow: 'rgba(206, 17, 38, 0.15)' }
  ]

  return (
    <div className="mb-8">
      {/* Section Header */}
      <div className="section-header">
        <h2>Overview</h2>
        <div className="section-line" />
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {mainStats.map((stat, i) => (
          <div key={i} className="glass stat-card relative overflow-hidden">
            <div className="stat-glow" style={{ background: stat.glow }} />
            <div className="relative z-10">
              <div className="text-4xl font-bold text-white mb-1" style={{ color: stat.accent }}>
                {stat.value}
              </div>
              <div className="text-sm text-white/60 font-medium">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Sport Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {Object.entries(stats.bySport).map(([sport, data]) => {
          const config = SPORT_CONFIG[sport] || { icon: '🏆', color: 'gray', gradient: 'from-gray-500/20 to-gray-600/10', glow: '#6B7280' }
          return (
            <div key={sport} className={`glass relative overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient}`} />
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${config.glow}, transparent)` }} />
              <div className="relative z-10 p-5">
                <div className="text-3xl mb-3">{config.icon}</div>
                <div className="text-lg font-bold text-white capitalize mb-1">{sport}</div>
                <div className="text-sm text-white/50">
                  {data.count} {data.count === 1 ? 'event' : 'events'}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
