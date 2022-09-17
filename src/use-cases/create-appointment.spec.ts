import { describe, it, expect } from "vitest";
import { Appointment } from "../entities/appointment";
import { getFutureDate } from "../entities/tests/utils/get-future-date";
import { InMemoryAppointmensRepository } from "../repositories/in-memory/in-memory-appointmens-repository";
import { CreateAppointment } from "./create-appointments";

describe("Create Appointment", () => {
  it("should be able to create an appointment", () => {
    const appointmentsRepository = new InMemoryAppointmensRepository();
    const createAppointment = new CreateAppointment(appointmentsRepository);
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
  it("should not be able to create an appointment with overlapping dates", async () => {
    const startsAt = getFutureDate("2022-08-10");
    const endsAt = getFutureDate("2022-08-15");
    const appointmentsRepository = new InMemoryAppointmensRepository();
    const createAppointment = new CreateAppointment(appointmentsRepository);
    await createAppointment.execute({
      customer: "Samu",
      startsAt,
      endsAt,
    });
    expect(
      createAppointment.execute({
        customer: "Samu",
        startsAt: getFutureDate("2022-08-10"),
        endsAt: getFutureDate("2022-08-15"),
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
