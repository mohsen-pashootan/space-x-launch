type ROOTSTATE = {
  mainPastSpaceLaunch: LAUNCH[];
  mainUpcomingSpaceLaunch: LAUNCH[];
  pastSpaceLaunch: LAUNCH[];
  upcomingSpaceLaunch: LAUNCH[];
  loading: false;
  searchedplan: "";
  pageSize: number;
  itemsCount: number;
  currentPage: number;
};

type LAUNCH = {
  missionName: string;
  launchDate: object;
  flightNumber: number;
  details: string;
  launchSite: string;
};
