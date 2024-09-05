
export const calculateTimeAgo = (date) => {
    const currentDate = new Date();
    const postDate = new Date(date);
    const timeDifference = currentDate.getTime() - postDate.getTime();
    const hoursDifference = Math.round(timeDifference / (1000 * 60 * 60));
    const daysDifference = Math.round(hoursDifference / 24);

    if (hoursDifference < 24) {
        return `${hoursDifference} ${hoursDifference === 1 ? 'hour' : 'hours'} ago`;
    } else if (daysDifference < 30) {
        return `${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago`;
    } else {
        return `30+ days ago`;

    }
};

export const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    return formattedDate;
};


export const formatDateForInput = (date) => {
    if (!date) return '';

    const d = new Date(date);
    let month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
};
