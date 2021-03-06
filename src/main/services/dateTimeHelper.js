class DateTimeHelperObj {
  constructor() {}

  getTodayYearMonthData = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    mm = mm < 10 ? "0" + mm : mm;
    dd = dd < 10 ? "0" + dd : dd;
    var yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  getThisWeekRange = () => {
    var date = new Date();
    var returnDate = [];
    var dayNo = date.getDay();
    var init = dayNo;
    //alert("dasdd");
    var offsetDate = new Date();
    offsetDate.setDate(date.getDate() - init);
    returnDate[0] = this.getDateForTableFilterMonthDateYear(offsetDate);

    offsetDate = new Date();
    offsetDate.setDate(date.getDate() - init + 6);
    returnDate[1] = this.getDateForTableFilterMonthDateYear(offsetDate);
    return returnDate;
  };

  getDateForTableFilterMonthDateYear = function (date) {
    var yyyy = date.getFullYear();
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    dd = dd < 10 ? "0" + dd : dd;
    var monthName = this.getMonthFromNumber(mm);

    return monthName + " " + dd + ", " + yyyy;
  };

  getMonthFromNumber = function (month) {
    switch (month) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Aug";
      case 9:
        return "Sep";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      case 12:
        return "Dec";
    }
  };

  getBrowserTimeZoneOffset = function () {
    var timeZoneOffsetInMinute = new Date().getTimezoneOffset();
    if (timeZoneOffsetInMinute < 0) {
      var timezoneOffsetInHMS = this.getHourMinuteSecondFromSeconds(
        timeZoneOffsetInMinute * -1 * 60
      );
      return "+" + timezoneOffsetInHMS;
    } else {
      var timezoneOffsetInHMS = this.getHourMinuteSecondFromSeconds(
        timeZoneOffsetInMinute * 60
      );
      return "-" + timezoneOffsetInHMS;
    }
  };

  getHourMinuteSecondFromSeconds = function (totalSeconds) {
    var hours = Math.floor(totalSeconds / (60 * 60));

    var divisorForMinutes = totalSeconds % (60 * 60);
    var minutes = Math.floor(divisorForMinutes / 60);

    var divisorForSeconds = divisorForMinutes % 60;
    var seconds = Math.ceil(divisorForSeconds);

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return hours + ":" + minutes + ":" + seconds;
  };

  getHourMinuteFromMin = function (totalMin) {
    var hour = Math.floor(totalMin / 60);
    var min = Math.floor(totalMin % 60);
    var hourString = "";
    var minString = "";

    if (hour <= 1) hourString = "Hour";
    else hourString = "Hours";

    if (min <= 1) minString = "Min";
    else minString = "Mins";

    return hour + " " + hourString + " " + min + " " + minString;
  };
}

export const DateTimeHelper = (() => {
  return new DateTimeHelperObj();
})();
