export default function sort(arr, obj) {
    const result = arr.map((item) => {
        if (item.date === obj.date) {
            item.distance = Number(item.distance) + Number(obj.distance);
        }
        return item;
    });
    return result;
}