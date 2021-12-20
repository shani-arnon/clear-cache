import moment from 'moment';

export const getBuildDate = (epoch) => {
    const buildDate = moment(epoch).format("DD-MM-YYYY HH:MM");
    return buildDate;
};

export const refreshCacheAndReload = () => {
    console.log('refreshCacheAndReload is on!', { caches });
    if (caches) {
        // Service worker cache should be cleared with caches.delete()
        caches.keys().then((names) => {
            for (const name of names) {
                caches.delete(name);
            }
        });
    }
    // delete browser cache and hard reload
    window.location.reload(true);
};

export const buildDateGreaterThan = (latestDate, currentDate) => {
    const momLatestDateTime = moment(latestDate);
    const momCurrentDateTime = moment(currentDate);

    if (momLatestDateTime.isAfter(momCurrentDateTime)) {
        return true;
    } else {
        return false;
    }
};