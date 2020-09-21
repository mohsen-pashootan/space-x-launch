import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../sharedComponent/loading";
import Pagination from "../sharedComponent/pagination";
import { getPastSpaceLaunch, pastPageChanged } from "./../stateManager/actions";
import "./launches.module.css";

export default function PastLaunches() {
  const { pastSpaceLaunch, searchedplan, loading } = useSelector(
    (state: ROOTSTATE) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPastSpaceLaunch("https://api.spacexdata.com/v3/launches/past"));
  }, [dispatch]);

  function handlePageChange(pageNumber: number) {
    dispatch(pastPageChanged(pageNumber));
  }

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
          {pastSpaceLaunch
            .filter((item) =>
              item.launchSite.toLowerCase().includes(searchedplan.toLowerCase())
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
      <Pagination onPageChange={handlePageChange} />
    </>
  );
}
