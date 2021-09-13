export const getDate = () => {
    const today = new Date()
    let month: number | string = today.getMonth() + 1;
    if (month < 10){ month = '0' + month }
    return (today.getDate() + '.' + month + '.' + today.getFullYear());
}