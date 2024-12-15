export const currency = (value) => value?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
export const addUnit = (value) => `${value} تومان`;