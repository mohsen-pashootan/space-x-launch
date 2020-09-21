export const INIT_STATE = {
  mainPastSpaceLaunch: [],
  pastSpaceLaunch: [],
  mainUpcomingSpaceLaunch: [],
  upcomingSpaceLaunch: [],
  loading: false,
  searchedplan: "",
  pageSize: 10,
  itemsCount: null,
  currentPage: 1,
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
      const newPastLaunch: LAUNCH[] = action.payload.map(
        (item) =>
          new ShuttleProduct({
            missionName: item.mission_name,
            flightNumber: item.flight_number,
            launchDate: new Date(item.launch_date_utc).toUTCString(),
            details: item.details,
            launchSite: item.launch_site.site_name_long,
          })
      );
      const count = newPastLaunch.length;
      const landingList = Paginate(
        newPastLaunch,
        state.currentPage,
        state.pageSize
      );

      return {
        ...state,
        mainPastSpaceLaunch: [...newPastLaunch],
        pastSpaceLaunch: [...landingList],
        loading: false,
        itemsCount: count,
      };

    case "UPCOMING_LAUNCH":
      const newUpcomingLaunch: LAUNCH[] = action.payload.map(
        (item) =>
          new ShuttleProduct({
            missionName: item.mission_name,
            flightNumber: item.flight_number,
            launchDate: new Date(item.launch_date_utc).toUTCString(),
            details: item.details,
            launchSite: item.launch_site.site_name_long,
          })
      );
      const upComingCount = newUpcomingLaunch.length;
      const upComingList = Paginate(
        newUpcomingLaunch,
        state.currentPage,
        state.pageSize
      );

      return {
        ...state,
        mainUpcomingSpaceLaunch: [...newUpcomingLaunch],
        upcomingSpaceLaunch: [...upComingList],
        loading: false,
        itemsCount: upComingCount,
      };

    case "SEARCHED_TEXT":
      return {
        ...state,
        searchedplan: action.payload,
      };

    case "PAST_PAGE_CHANGED":
      const remainPastList = Paginate(
        state.mainPastSpaceLaunch,
        action.payload,
        state.pageSize
      );

      return {
        ...state,
        currentPage: action.payload,
        pastSpaceLaunch: [...remainPastList],
      };

    case "UPCOMING_PAGE_CHANGED":
      const remainUpcomingList = Paginate(
        state.mainUpcomingSpaceLaunch,
        action.payload,
        state.pageSize
      );
      return {
        ...state,
        currentPage: action.payload,
        upcomingSpaceLaunch: [...remainUpcomingList],
      };

    default:
      return state;
  }
}

function Paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const newItems = [...items].slice(startIndex, endIndex);
  return newItems;
}
