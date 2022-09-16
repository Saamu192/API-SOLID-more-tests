import { test, expect } from "vitest";
import { Appointment } from "./appointment";

test("create an appointment", () => {
  const endsAt = new Date();
  endsAt.setDate(endsAt.getDate() + 1);
  const appointment = new Appointment({
    customer: "Samuel Persuhn",
    startsAt: new Date(),
    endsAt,
  });
  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual("Samuel Persuhn");
});

test("cannot create an appointment whit end date before start date", () => {
  const startDate = new Date();
  const endDate = new Date();

  endDate.setDate(endDate.getDate() - 1);

  expect(() => {
    return new Appointment({
      customer: "Samuel Persuhn",
      startsAt: startDate,
      endsAt: endDate,
    });
  }).toThrow();
});
