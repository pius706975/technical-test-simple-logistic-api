import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const getCurrentTime = (tz: string): Date => {
    return dayjs().tz(tz).toDate();
};

export const formatDate = (date: Date, tz: string) => {
    return dayjs(date).tz(tz).format('YYYY-MM-DD HH:mm:ss.SSS Z');
};
