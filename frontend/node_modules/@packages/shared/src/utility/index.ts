import dayjs from 'dayjs';

export const getFormatDate = (date: Date) => {
    return dayjs(date).format('HH:mm:ss');
}
