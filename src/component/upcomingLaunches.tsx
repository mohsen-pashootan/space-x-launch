import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../sharedComponent/loading";
import { getUpcomingSpaceLaunch } from "../stateManager/actions";
import "./launches.module.css";

export default function UpcomingLaunches() {
  const { upcomingSpaceLaunch, searchedplan, loading } = useSelector(
    (state: ROOTSTATE) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getUpcomingSpaceLaunch("https://api.spacexdata.com/v3/launches/upcoming")
    );
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }
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
          {upcomingSpaceLaunch
            .filter((item) =>
              item.launchSite !== null
                ? item.launchSite
                    .toLowerCase()
                    .includes(searchedplan.toLowerCase())
                : item
            )
            .map((sx) => (
              <tr key={sx.flightNumber}>
                <td>{sx.flightNumber}</td>
                <td>{sx.missionName}</td>
                <td>{sx.launchDate}</td>
                <td>{sx.launchSite}</td>
                <td>{sx.details}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
