
export const dateParser = (date: string) => {
    const b = date?.toString().split(/\D+/);
    const formattedDate = b ? new Date(Date.UTC(+b[0], +b[1] - 1, +b[2], +b[3], +b[4], +b[5], +b[6])) : null
    return formattedDate
}