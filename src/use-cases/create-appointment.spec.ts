import { describe, it, expect } from "vitest";
import { Appointment } from "../entities/appointment";
import { getFutureDate } from "../entities/tests/utils/get-future-date";
import { CreateAppointment } from "./create-appointments";

describe("Create Appointment", () => {
  it("should be able to create an appointment", () => {
    const createAppointment = new CreateAppointment();
    const startsAt = getFutureDate("2022-08-10");
    const endsAt = getFutureDate("2022-08-11");

    startsAt.setDate(startsAt.getDate() + 1);
    endsAt.setDate(endsAt.getDate() + 2);
    expect(
      createAppointment.execute({
        customer: "Samu",
        startsAt,
        endsAt,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });
});
