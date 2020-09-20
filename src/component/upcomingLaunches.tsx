import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUpcomingSpaceLaunch } from "../stateManager/actions";

export default function UpcomingLaunches() {
  const { upcomingSpaceLaunch } = useSelector((state: ROOTSTATE) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getUpcomingSpaceLaunch("https://api.spacexdata.com/v3/launches/upcoming")
    );
  }, [dispatch]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Flight Number </th>
            <th>Mission Name</th>
            <th>Launch Date</th>
            <th>Launch Site</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {upcomingSpaceLaunch.map((sx) => (
            <tr key={sx.flightNumber}>
              <th>{sx.flightNumber}</th>
              <th>{sx.missionName}</th>
              <th>{sx.launchDate}</th>
              <th>{sx.launchSite}</th>
              <th>{sx.details}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
