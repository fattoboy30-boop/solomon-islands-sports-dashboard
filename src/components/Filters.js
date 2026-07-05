'use client'

export default function Filters({ sports, years, competitions, opponents, filters, onFilterChange, onClearFilters }) {
  const hasActiveFilters = Object.values(filters).some(v => v !== '')

  return (
    <div className="mb-8">
      {/* Section Header */}
      <div className="section-header">
        <h2>Filters</h2>
        <div className="section-line" />
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-sm text-[#60a5fa] hover:text-[#93c5fd] transition-colors ml-4"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="glass p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Sport</label>
            <select
              value={filters.sport}
              onChange={(e) => onFilterChange('sport', e.target.value)}
              className="glass-select"
            >
              <option value="">All Sports</option>
              {sports.map(sport => (
                <option key={sport} value={sport}>{sport.charAt(0).toUpperCase() + sport.slice(1)}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Year</label>
            <select
              value={filters.year}
              onChange={(e) => onFilterChange('year', e.target.value)}
              className="glass-select"
            >
              <option value="">All Years</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Competition</label>
            <select
              value={filters.competition}
              onChange={(e) => onFilterChange('competition', e.target.value)}
              className="glass-select"
            >
              <option value="">All Competitions</option>
              {competitions.map(comp => (
                <option key={comp} value={comp}>{comp}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Opponent</label>
            <select
              value={filters.opponent}
              onChange={(e) => onFilterChange('opponent', e.target.value)}
              className="glass-select"
            >
              <option value="">All Opponents</option>
              {opponents.map(opp => (
                <option key={opp} value={opp}>{opp}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filter Tags */}
        {hasActiveFilters && (
          <div className="mt-4 flex flex-wrap gap-2">
            {filters.sport && (
              <span className="filter-tag">
                Sport: {filters.sport}
                <button onClick={() => onFilterChange('sport', '')}>×</button>
              </span>
            )}
            {filters.year && (
              <span className="filter-tag">
                Year: {filters.year}
                <button onClick={() => onFilterChange('year', '')}>×</button>
              </span>
            )}
            {filters.competition && (
              <span className="filter-tag">
                Competition: {filters.competition}
                <button onClick={() => onFilterChange('competition', '')}>×</button>
              </span>
            )}
            {filters.opponent && (
              <span className="filter-tag">
                Opponent: {filters.opponent}
                <button onClick={() => onFilterChange('opponent', '')}>×</button>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
