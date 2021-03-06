const filterChartDataBetweenDates = function (start, end, data) {
  end = new Date(end - (end % 86400000) + 86400000);
  let res = [];
  data.forEach(item => {
    let dateMs = new Date(item.date_ms);
    if (dateMs >= start && dateMs <= end) {
      res.push(item);
    }
  });
  return res;
};

export default filterChartDataBetweenDates;
