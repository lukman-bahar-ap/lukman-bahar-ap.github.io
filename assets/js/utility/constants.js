export const BASE_URL_API = 'https://api.football-data.org/v2/';
export const TOKEN_API_KEY = '1283a36c25874c2793063ff9cdd05b74';
export const PRIMIER_LEAGUE = '2021';
/*end point*/
export const STANDINGS_URL = `${BASE_URL_API}competitions/${PRIMIER_LEAGUE}/standings`;
export const TEAMS_URL = `${BASE_URL_API}teams/`;
export const MATCHES_URL = `${BASE_URL_API}competitions/PL/matches`;
/*header*/
export const HEADERS = {
    'X-Auth-Token': TOKEN_API_KEY
}