export const INIT_STATE = {
  pastSpaceLaunch: [],
  upcomingSpaceLaunch: [],
  loading: false,
  searchedplan: "",
};

class ShuttleProduct {
  missionName: string;
  launchDate: object;
  flightNumber: number;
  details: string;
  launchSite: string;
  constructor({ missionName, launchDate, flightNumber, details, launchSite }) {
    this.missionName = missionName;
    this.flightNumber = flightNumber;
    this.launchDate = launchDate;
    this.details = details;
    this.launchSite = launchSite;
  }
}

export default function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    case "PAST_LAUNCH":
      const newPastLaunch = action.payload.map(
        (item) =>
          new ShuttleProduct({
            missionName: item.mission_name,
            flightNumber: item.flight_number,
            launchDate: new Date(item.launch_date_utc).toUTCString(),
            details: item.details,
            launchSite: item.launch_site.site_name_long,
          })
      );
      return {
        ...state,
        pastSpaceLaunch: [...newPastLaunch],
        loading: false,
      };

    case "UPCOMING_LAUNCH":
      const newUpcomingLaunch = action.payload.map(
        (item) =>
          new ShuttleProduct({
            missionName: item.mission_name,
            flightNumber: item.flight_number,
            launchDate: new Date(item.launch_date_utc).toUTCString(),
            details: item.details,
            launchSite: item.launch_site.site_name_long,
          })
      );
      return {
        ...state,
        upcomingSpaceLaunch: [...newUpcomingLaunch],
        loading: false,
      };

    case "SEARCHED_TEXT":
      return {
        ...state,
        searchedplan: action.payload,
      };

    default:
      return state;
  }
}
