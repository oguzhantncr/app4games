export interface Game {
  id:                 number;
  slug:               string;
  name:               string;
  released:           Date;
  tba:                boolean;
  background_image:   string;
  rating:             number;
  rating_top:         number;
  ratings:            Rating[];
  ratings_count:      number;
  reviews_text_count: number;
  added:              number;
  added_by_status:    AddedByStatus;
  metacritic:         number;
  playtime:           number;
  suggestions_count:  number;
  updated:            Date;
  user_game:          null;
  reviews_count:      number;
  saturated_color:    Color;
  dominant_color:     Color;
  platforms:          PlatformElement[];
  parent_platforms:   ParentPlatform[];
  genres:             Genre[];
  stores:             Store[];
  clip:               null;
  tags:               Genre[];
  esrb_rating:        EsrbRating;
  short_screenshots:  ShortScreenshot[];
}

export interface GameDetails {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms: MetacriticPlatform[];
  released: string;
  tba: boolean;
  updated: Date;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: any;
  reactions: any;
  added: number;
  added_by_status: AddedByStatus;
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: string;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: string;
  youtube_count: string;
  reviews_text_count: string;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  esrb_rating: EsrbRating;
  platforms: PlatformElement[];
}

export interface MetacriticPlatform {
  metascore: number;
  url: string;
}

export interface AddedByStatus {
  yet:     number;
  owned:   number;
  beaten:  number;
  toplay:  number;
  dropped: number;
  playing: number;
}

export enum Color {
  The0F0F0F = "0f0f0f",
}

export interface EsrbRating {
  id:   number;
  name: string;
  slug: string;
}

export interface ParentPlatformInfo {
  id:   number;
  name: string;
  slug: string;
}

export interface Genre {
  id:               number;
  name:             string;
  slug:             string;
  games_count:      number;
  image_background: string;
  domain?:          Domain;
  language?:        Language;
}

export enum Domain {
  AppsAppleCOM = "apps.apple.com",
  EpicgamesCOM = "epicgames.com",
  GogCOM = "gog.com",
  MarketplaceXboxCOM = "marketplace.xbox.com",
  MicrosoftCOM = "microsoft.com",
  NintendoCOM = "nintendo.com",
  PlayGoogleCOM = "play.google.com",
  StorePlaystationCOM = "store.playstation.com",
  StoreSteampoweredCOM = "store.steampowered.com",
}

export enum Language {
  Eng = "eng",
}

export interface ParentPlatform {
  platform: ParentPlatformInfo;
}

export interface PlatformElement {
  platform:        PlatformPlatform;
  released_at:     Date | null;
  requirements: Requirements | null;
}

export interface PlatformPlatform {
  id:               number;
  name:             string;
  slug:             string;
  image:            null;
  year_end:         null;
  year_start:       number | null;
  games_count:      number;
  image_background: string;
}

export interface Requirements {
  minimum:      string;
  recommended?: string;
}

export interface Rating {
  id:      number;
  title:   Title;
  count:   number;
  percent: number;
}

export enum Title {
  Exceptional = "exceptional",
  Meh = "meh",
  Recommended = "recommended",
  Skip = "skip",
}

export interface ShortScreenshot {
  id:    number;
  image: string;
}

export interface Store {
  id:    number;
  store: Genre;
}
