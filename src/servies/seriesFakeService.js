const series = [
  {
    id: 1,
    name: "Grey's Anathomy",
    episodeName: "Danger Zone",
    description: `In a flashback to Iraq in 2007, the events leading up to Megan’s kidnapping are revealed. In present day, Owen and Megan hash out old wounds.`,
    image: "greys_anathomy.jpg",
    season: 14,
    episode: 5,
    formats: ["1080p HDTV", "HTDV"],
    builtInSubs: true,
    isLocal: false
  },
  {
    id: 2,
    name: "Arrow",
    image: "arrow.jpg",
    season: 2,
    episode: 1,
    formats: ["1080p HDTV", "720p HDTV", "HTDV"],
    builtInSubs: true,
    isLocal: false
  },
  {
    id: 3,
    name: "Billions",
    image: "billions.jpg",
    season: 3,
    episode: 2,
    formats: ["1080p HDTV", "720p HDTV", "HTDV"],
    builtInSubs: true,
    isLocal: false
  },
  {
    id: 4,
    name: "Bull",
    image: "bull.jpg",
    season: 1,
    episode: 5,
    formats: ["720p HDTV", "HTDV"],
    builtInSubs: false,
    isLocal: false
  },
  {
    id: 5,
    name: "Suits",
    image: "suits.jpg",
    season: 7,
    episode: 3,
    formats: ["1080p HDTV", "720p HDTV", "HTDV"],
    builtInSubs: true,
    isLocal: false
  },
  {
    id: 6,
    name: "Walking Dead",
    image: "walking_dead.jpg",
    season: 5,
    episode: 3,
    formats: ["1080p HDTV", "720p HDTV", "HTDV"],
    builtInSubs: true,
    isLocal: false
  },
  {
    id: 7,
    name: "בלתי נראה",
    image: "invisible.jpg",
    season: 1,
    episode: 3,
    formats: ["1080p HDTV", "720p HDTV", "HTDV"],
    builtInSubs: true,
    isLocal: true
  },
  {
    id: 8,
    name: "נינג'ה ישראל",
    image: "ninja_israel.jpg",
    season: 1,
    episode: 5,
    formats: ["1080p HDTV", "720p HDTV", "HTDV"],
    builtInSubs: true,
    isLocal: true
  },
  {
    id: 9,
    name: "משחקי השף",
    image: "shef_games.jpg",
    season: 1,
    episode: 8,
    formats: ["1080p HDTV", "720p HDTV", "HTDV"],
    builtInSubs: true,
    isLocal: true
  },
  {
    id: 10,
    name: "The Four",
    image: "the_four.jpg",
    season: 1,
    episode: 1,
    formats: ["1080p HDTV", "720p HDTV", "HTDV"],
    builtInSubs: true,
    isLocal: true
  },
  {
    id: 11,
    name: "המנצח",
    image: "the_winner.jpg",
    season: 1,
    episode: 6,
    formats: ["1080p HDTV", "720p HDTV", "HTDV"],
    builtInSubs: true,
    isLocal: true
  },
  {
    id: 12,
    name: "קיסריה אקספרס",
    image: "kesaria_express.jpg",
    season: 1,
    episode: 6,
    formats: ["1080p HDTV", "720p HDTV", "HTDV"],
    builtInSubs: true,
    isLocal: true
  }
];

export function getSeries() {
  return series;
}

export function getEpisode(id) {
  return series.filter(s => s.id === id);
}
