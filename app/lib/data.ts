export const mockDf = {
    date: ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01'],
    salesPositive: [23.5, 34.4, 42.3, 54.2, 37.6]
}

export function MockDfTuples(){
    const nrow = mockDf.date.length
    let myList = [];
    let x;
    let y;
    for (let i = 0; i < nrow; i++) {
        x = mockDf.date[i];
        y = `${mockDf.salesPositive[i]}`;
        myList.push([x,y]);
    }
    return myList;
}