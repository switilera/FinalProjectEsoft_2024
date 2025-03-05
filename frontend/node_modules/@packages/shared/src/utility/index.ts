import dayjs from 'dayjs';

export const getFormatDate = (date: Date) => {
    return dayjs(date).format('HH:mm:ss');
}

export const currencyFormatter = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
        style: "currency",
        currency: "RUB",
        maximumSignificantDigits: 6
    }).format(price)
}
