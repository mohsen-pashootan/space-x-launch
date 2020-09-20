export const INIT_STATE = {
  pastSpaceLaunch: [],
  upcomingSpaceLaunch: [],
  loading: false,
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
      console.log("loading");

      return {
        ...state,
        loading: true,
      };

    case "PAST_LAUNCH":
      console.log(action.payload);
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
      const pastTotal = newPastLaunch.length;
      console.log(newPastLaunch);

      return {
        ...state,
        pastSpaceLaunch: [...newPastLaunch],
        totalCount: pastTotal,
        loading: false,
      };

    case "UPCOMING_LAUNCH":
      console.log("up");
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
      console.log(newUpcomingLaunch);
      return {
        ...state,
        upcomingSpaceLaunch: [...newUpcomingLaunch],
        loading: false,
      };

    default:
      return state;
  }
}
