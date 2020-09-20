import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPastSpaceLaunch } from "./../stateManager/actions";

export default function PastLaunches() {
  const { pastSpaceLaunch, searchedplan } = useSelector(
    (state: ROOTSTATE) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPastSpaceLaunch("https://api.spacexdata.com/v3/launches/past"));
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
          {pastSpaceLaunch
            .filter((item) =>
              item.launchSite.toLowerCase().includes(searchedplan.toLowerCase())
            )
            .map((sx) => (
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
