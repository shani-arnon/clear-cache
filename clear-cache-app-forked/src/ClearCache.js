import React, { useState, useEffect } from "react";
import packageJson from "../package.json";
import { buildDateGreaterThan, refreshCacheAndReload } from "./utils/utils";

function withClearCache(Component) {
  function ClearCacheComponent(props) {
    const [isLatestBuildDate, setIsLatestBuildDate] = useState(false);

    useEffect(() => {
      fetch("/meta.json")
        .then((response) => response.json())
        .then((meta) => {
          const latestVersionDate = meta.buildDate;
          const currentVersionDate = packageJson.buildDate;
          // console.log('latestVersionDate', latestVersionDate);
          // console.log('currentVersionDate', currentVersionDate);

          const shouldForceRefresh = buildDateGreaterThan(
            latestVersionDate,
            currentVersionDate
          );

          if (shouldForceRefresh) {
            console.log({ shouldForceRefresh });
            setIsLatestBuildDate(false);
            // refreshCacheAndReload();
          } else {
            setIsLatestBuildDate(true);
          }
        });
    }, []);

    return (
      <React.Fragment>
        {isLatestBuildDate ? <Component {...props} /> : null}
      </React.Fragment>
    );
  }
  return ClearCacheComponent;
}

export default withClearCache;
