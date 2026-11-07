// A1
export const getEpisodeTitle = (show, seasonIndex, episodeIndex) => {
  return show?.seasons?.[seasonIndex]?.episodes?.[episodeIndex]?.title;
};

// A2
export const getLastSeasonNumber = show => {
  return show?.seasons?.[show.seasons.length - 1]?.number ?? 0;
};

// A3
export const getNextSeasonYear = show => {
  return show?.nextSeason?.year ?? "No announcement";
}