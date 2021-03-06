import pkg from "chai";
import { dateTimeHelper } from "../main/app.js";

console.log(dateTimeHelper);

const helper = dateTimeHelper;
const { expect } = pkg;

describe("getTodayYearMonthData", function () {
  it("getTodayYearMonthData", function () {
    expect(helper.getTodayYearMonthData().length).to.be.equal(10);
  });
});

describe("getThisWeekRange", function () {
  it("getThisWeekRange", function () {
    expect(helper.getThisWeekRange().length).to.be.equal(2);
  });
});

describe("getBrowserTimeZoneOffset", function () {
  it("getBrowserTimeZoneOffset", function () {
    expect(helper.getBrowserTimeZoneOffset()).to.be.equal("+06:00:00");
  });
});

describe("getHourMinuteFromMin", function () {
  it("getHourMinuteFromMin", function () {
    console.log(helper.getHourMinuteFromMin(3121));
    expect(helper.getHourMinuteFromMin(3121)).to.be.equal("52 Hours 1 Min");
  });
});
