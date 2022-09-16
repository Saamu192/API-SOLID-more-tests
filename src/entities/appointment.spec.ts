import { test, expect } from "vitest";
import { Appointment } from "./appointment";
import { getFutureDate } from "./tests/utils/get-future-date";

test("create an appointment", () => {
  const endsAt = getFutureDate("2022-08-11");
  const startsAt = getFutureDate("2022-08-10");

  const appointment = new Appointment({
    customer: "Samuel Persuhn",
    startsAt,
    endsAt,
  });
  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual("Samuel Persuhn");
});

test("cannot create an appointment whit end date before start date", () => {
  const startDate = getFutureDate("2022-08-10");
  const endDate = getFutureDate("2022-08-09");

  startDate.setDate(startDate.getDate() + 2);
  endDate.setDate(endDate.getDate() + 1);

  expect(() => {
    return new Appointment({
      customer: "Samuel Persuhn",
      startsAt: startDate,
      endsAt: endDate,
    });
  }).toThrow();
});
