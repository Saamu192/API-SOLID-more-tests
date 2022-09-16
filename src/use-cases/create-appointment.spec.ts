import { describe, it, expect } from "vitest";
import { Appointment } from "../entities/appointment";
import { CreateAppointment } from "./create-appointments";

describe("Create Appointment", () => {
  it("should be able to create an appointment", () => {
    const createAppointment = new CreateAppointment();
    const startsAt = new Date();
    const endsAt = new Date();

    endsAt.setDate(endsAt.getDate() + 1);
    expect(
      createAppointment.execute({
        customer: "Samu",
        startsAt,
        endsAt,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });
});
