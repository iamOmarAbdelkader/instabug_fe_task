import filterChartDataBetweenDates from '../utils/filterChartDataBetweenDates';

let data = [
    {
      date_ms: 1641772800000, // 10 jan
      performance: 0.2
    },
    {
      date_ms: 1641859200000, // 11 jan
      performance: 0.33
    },
    {
      date_ms: 1641945600000, // 12 jan
      performance: 0.83
    },
    {
      date_ms: 1642032000000, // 13 jan
      performance: 0.31
    },
    {
      date_ms: 1642118400000, // 14 jan
      performance: 0.65
    },
    {
      date_ms: 1642204800000, // 15 jan
      performance: 0.88
    },
    {
      date_ms: 1642291200000, // 16 jan
      performance: 0.9
    }
];
test('filters by dates inclusively', () => {
    expect(filterChartDataBetweenDates( new Date(2022,0,13), new Date(2022,0,16),data).length).toBe(4);
});


test('filters by dates and return empty data incase of dates not in the range of data', () => {
    expect(filterChartDataBetweenDates( new Date(2022,4,13), new Date(2022,4,16),data).length).toBe(0);
});