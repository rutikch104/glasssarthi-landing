/** Main GlassSarthi product app (login / register live here). */
export const APP_URL = (process.env.REACT_APP_APP_URL || "http://13.49.84.127").replace(/\/$/, "");

export function appPath(path = "/") {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${APP_URL}${p}`;
}
