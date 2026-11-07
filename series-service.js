// A1
export function getEpisodeTitle(show, seasonIndex, episodeIndex) {
  return show?.seasons?.[seasonIndex]?.episodes?.[episodeIndex]?.title;
};

// A2
export function getLastSeasonNumber(show) {
  return show?.seasons?.[show.seasons.length - 1]?.number ?? 0;
};

// A3
export function getNextSeasonYear(show) {
  return show?.nextSeason?.year ?? "No announcement";
}

// B1
export function getById(series, id) {
  return series.find(show => show.id === id);
}

// B2
export function getSeasonsCount(series) {
  return series.map(s => {
    return {
      title: s.title, seasons: s.seasons.length
    };
  })
}

// B3
export function hasTopEpisode(show, minRating) {
  return show.seasons.some(season =>
    season.episodes.some(episode =>
      episode.rating >= minRating
    )
  );
}

// B4
export function getCreatorsFrom(series, country) {
  return series.filter(s => s.creator.country === country).map(s => s.creator.name);
}

// B5
export function sortByStartYear(series) {
  return [...series].sort((a, b) => a.startYear - b.startYear);
}

