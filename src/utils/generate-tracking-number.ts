export const generateTrackingNumber = (
    prefix: string,
    digitLength: number,
): string => {
    if (digitLength <= 0) {
        throw new Error('digitLength must be greater than 0');
    }

    const timestamp = Date.now().toString();

    const timeLength = Math.min(digitLength, 6);
    const timePart = timestamp.slice(-timeLength);

    const randomLength = digitLength - timeLength;
    const randomPart =
        randomLength > 0
            ? Math.floor(Math.random() * 10 ** randomLength)
                  .toString()
                  .padStart(randomLength, '0')
            : '';

    return `${prefix}${timePart}${randomPart}`;
};
