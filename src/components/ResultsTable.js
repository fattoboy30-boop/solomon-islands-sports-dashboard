'use client'

const SPORT_ICONS = {
  football: '⚽',
  athletics: '🏃',
  rugby: '🏉',
  basketball: '🏀',
  olympics: '🏅'
}

export default function ResultsTable({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="glass p-8 text-center">
        <div className="text-4xl mb-4">📊</div>
        <h3 className="text-lg font-semibold text-white mb-2">No Results Found</h3>
        <p className="text-white/50">Try adjusting your filters to see more data.</p>
      </div>
    )
  }

  return (
    <div className="mb-8">
      {/* Section Header */}
      <div className="section-header">
        <h2>Detailed Results</h2>
        <div className="section-line" />
        <span className="text-sm text-white/40 ml-4">{data.length} records</span>
      </div>

      <div className="glass p-2 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="glass-table">
            <thead>
              <tr>
                <th>Sport</th>
                <th>Athlete / Team</th>
                <th>Event</th>
                <th>Opponent</th>
                <th>Date</th>
                <th>Result</th>
                <th>Competition</th>
                <th>World Standard</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>
                    <span className={`sport-badge sport-badge-${row.sport}`}>
                      <span>{SPORT_ICONS[row.sport] || '🏆'}</span>
                      {row.sport}
                    </span>
                  </td>
                  <td className="font-medium text-white">{row.athlete_or_team}</td>
                  <td>{row.event_or_match}</td>
                  <td>{row.opponent_or_country || <span className="text-white/30">-</span>}</td>
                  <td>
                    <span className="text-white/70">
                      {row.date ? new Date(row.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '-'}
                    </span>
                  </td>
                  <td>
                    <span className="font-bold text-[#FFD700]">{row.result}</span>
                  </td>
                  <td>
                    <span className="text-white/70">{row.competition}</span>
                  </td>
                  <td>
                    <span className="text-xs text-white/50">
                      {row.world_standard_type}: <span className="text-white/70">{row.world_standard_value}</span>
                    </span>
                  </td>
                  <td>
                    {row.source_url ? (
                      <a
                        href={row.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="source-link"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Source
                      </a>
                    ) : (
                      <span className="text-white/30">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
