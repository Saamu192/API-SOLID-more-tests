import { Appointment } from "../entities/appointment";

export interface AppointmensRepository {
  create(appointment: Appointment): Promise<void>;

  findOverLappingAppointment(
    startsAt: Date,
    endsAt: Date
  ): Promise<Appointment | null>;
}
