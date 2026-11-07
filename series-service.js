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

// C1
export function renameSeries(series, id, newTitle) {
  return series.map(s => {
    if (s.id === id) {
      return { ...s, title: newTitle };
    }
    return s;
  });
}

// C2
export function addSeason(series, showId, season) {
  return series.map(s => {
    if (s.id === showId)
    {
      return {
        ...s,
        seasons: [...s.seasons, season]
      }
    }
    return s;
  })
}

// C3
export function addEpisode(series, showId, seasonNumber, episode) {
  return series.map(s => {
    if (s.id === showId)
    {
      return {
        ...s,
        seasons: s.seasons.map(season => {
          if (season.number === seasonNumber){
            return {...season, episodes: [...season.episodes, episode]}
          }
          return season;
        })
      }
    }
    return s;
  })
}