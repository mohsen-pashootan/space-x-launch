type ROOTSTATE = {
  pastSpaceLaunch: LAUNCH[];
  upcomingSpaceLaunch: LAUNCH[];
  loading: false;
  searchedplan: "";
};

type LAUNCH = {
  missionName: string;
  launchDate: object;
  flightNumber: number;
  details: string;
  launchSite: string;
};
