import moment from "moment";

export const periodToString = (period: Period) => {

  if(!period){
    return "--/--/--"
  }
  const from = moment(period.from).format("MMM YYYY");
  const to = moment(period.to).format("MMM YYYY");
  return `${from} - ${to}`;
};