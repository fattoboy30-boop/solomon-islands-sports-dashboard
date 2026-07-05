'use client'

import { useState, useMemo, useEffect } from 'react'
import { getSports, getYears, getCompetitions, getOpponents, filterData, getSummaryStats, getChartData } from '../lib/data'
import SummaryCards from '../components/SummaryCards'
import Filters from '../components/Filters'
import Charts from '../components/Charts'
import ResultsTable from '../components/ResultsTable'

export default function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    sport: '',
    year: '',
    competition: '',
    opponent: ''
  })

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(fetchedData => {
        setData(fetchedData)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to load data:', err)
        setLoading(false)
      })
  }, [])

  const sports = useMemo(() => getSports(data), [data])
  const years = useMemo(() => getYears(data), [data])
  const competitions = useMemo(() => getCompetitions(data), [data])
  const opponents = useMemo(() => getOpponents(data), [data])

  const filteredData = useMemo(() => filterData(data, filters), [data, filters])
  const stats = useMemo(() => getSummaryStats(filteredData), [filteredData])
  const chartData = useMemo(() => getChartData(filteredData), [filteredData])

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({ sport: '', year: '', competition: '', opponent: '' })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-4 border-white/10 border-t-[#FFD700] animate-spin mx-auto" />
            <div className="absolute inset-0 w-20 h-20 rounded-full border-4 border-transparent border-b-[#003580] animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
          </div>
          <p className="text-white/70 mt-6 text-lg font-medium">Loading Solomon Islands Sports Dashboard...</p>
          <p className="text-white/40 mt-2 text-sm">Fetching sports data</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <div className="glass p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#003580] via-[#FFD700] to-[#228B22]" />
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#003580] to-[#004AAD] flex items-center justify-center shadow-lg shadow-[#003580]/30">
                  <span className="text-[#FFD700] font-bold text-2xl">SI</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#228B22] rounded-full border-2 border-[#0a1628]" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Solomon Islands
                  <span className="block text-[#FFD700]">Sports Dashboard</span>
                </h1>
                <p className="text-white/50 mt-1">Performance tracking against world standards</p>
              </div>
            </div>
          </div>
        </header>

        {/* Summary Cards */}
        <SummaryCards stats={stats} />

        {/* Filters */}
        <Filters
          sports={sports}
          years={years}
          competitions={competitions}
          opponents={opponents}
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={clearFilters}
        />

        {/* Charts */}
        <Charts chartData={chartData} />

        {/* Results Table */}
        <ResultsTable data={filteredData} />

        {/* Footer */}
        <footer className="mt-10 glass-subtle p-4 text-center">
          <p className="text-white/40 text-sm">
            Data sources: ESPN &bull; World Athletics &bull; Sofascore &bull; Olympedia
          </p>
        </footer>
      </div>
    </div>
  )
}
