export const getToday = (): string => {
  var today = new Date();
  var dd: string | number = today.getDate();
  var mm: string | number = today.getMonth() + 1; // January is 0
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  var todayDate = mm + "/" + dd + "/" + yyyy;
  return todayDate;
};

export const getFormattedDate = (date: Date): string => {
  var dd: string | number = date.getDate();
  var mm: string | number = date.getMonth() + 1; // January is 0
  var yyyy = date.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  return mm + "/" + dd + "/" + yyyy;
};

export const getCurrentYear = ():string => {
  return new Date().getFullYear().toString();
}

export const getCurrentMonth = (): string => {
  let month = new Date().getMonth() + 1

  if (month < 10) {
    return `0${month}`
  } else {
    return month.toString()
  }
};
