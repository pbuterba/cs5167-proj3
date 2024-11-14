export function getDateOfWeek(dayOfWeek, hour, minutes) {
    const now = new Date();
    const currentDay = now.getDay();
    const distance = (dayOfWeek - currentDay + 7) % 7 - (dayOfWeek < currentDay ? 7 : 0);
    const targetDate = new Date(now);
    targetDate.setDate(now.getDate() + distance);
    targetDate.setHours(hour, minutes, 0, 0);

    return targetDate;
}
