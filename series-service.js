export const getEpisodeTitle = (show, seasonIndex, episodeIndex) => {
  return show?.seasons?.[seasonIndex]?.episodes?.[episodeIndex]?.title;
};

