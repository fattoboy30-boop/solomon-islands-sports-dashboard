export function getSports(data) {
  return [...new Set(data.map(row => row.sport))].sort();
}

export function getYears(data) {
  return [...new Set(data.map(row => row.date ? row.date.substring(0, 4) : null).filter(Boolean))].sort().reverse();
}

export function getCompetitions(data) {
  return [...new Set(data.map(row => row.competition))].filter(Boolean).sort();
}

export function getOpponents(data) {
  return [...new Set(data.map(row => row.opponent_or_country))].filter(Boolean).sort();
}

export function filterData(data, filters = {}) {
  return data.filter(row => {
    if (filters.sport && row.sport !== filters.sport) return false;
    if (filters.year && row.date && !row.date.startsWith(filters.year)) return false;
    if (filters.competition && row.competition !== filters.competition) return false;
    if (filters.opponent && row.opponent_or_country !== filters.opponent) return false;
    return true;
  });
}

export function getSummaryStats(data) {
  const stats = {
    totalEvents: data.length,
    bySport: {},
    recentResults: [],
    topPerformers: []
  };

  data.forEach(row => {
    if (!stats.bySport[row.sport]) {
      stats.bySport[row.sport] = { count: 0, results: [] };
    }
    stats.bySport[row.sport].count++;
    stats.bySport[row.sport].results.push(row);
  });

  stats.recentResults = data
    .filter(row => row.date)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 10);

  const athletePerformance = {};
  data.forEach(row => {
    if (row.athlete_or_team && !athletePerformance[row.athlete_or_team]) {
      athletePerformance[row.athlete_or_team] = { sport: row.sport, events: 0 };
    }
    if (row.athlete_or_team) {
      athletePerformance[row.athlete_or_team].events++;
    }
  });

  stats.topPerformers = Object.entries(athletePerformance)
    .map(([name, info]) => ({ name, ...info }))
    .sort((a, b) => b.events - a.events)
    .slice(0, 10);

  return stats;
}

export function getChartData(data) {
  const byYear = {};
  const bySport = {};

  data.forEach(row => {
    if (row.date) {
      const year = row.date.substring(0, 4);
      if (!byYear[year]) byYear[year] = 0;
      byYear[year]++;
    }

    if (!bySport[row.sport]) bySport[row.sport] = 0;
    bySport[row.sport]++;
  });

  return {
    eventsByYear: Object.entries(byYear)
      .map(([year, count]) => ({ year, count }))
      .sort((a, b) => a.year.localeCompare(b.year)),
    eventsBySport: Object.entries(bySport)
      .map(([sport, count]) => ({ sport, count }))
      .sort((a, b) => b.count - a.count)
  };
}
