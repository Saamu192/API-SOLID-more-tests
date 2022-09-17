import { getOverlappingDaysInIntervals } from "date-fns";
import { Appointment } from "../entities/appointment";
import { AppointmensRepository } from "../repositories/appointments.repository";

interface ICreateAppointmentRequest {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

type ICreateAppointmentResponse = Appointment;

export class CreateAppointment {
  constructor(private appointmentsRepository: AppointmensRepository) {}
  async execute({
    customer,
    endsAt,
    startsAt,
  }: ICreateAppointmentRequest): Promise<ICreateAppointmentResponse> {
    const overLappingAppointment =
      await this.appointmentsRepository.findOverLappingAppointment(
        startsAt,
        endsAt
      );
    if (overLappingAppointment) {
      throw new Error("Another appointment overlaps this appointment dates");
    }

    const appointment = new Appointment({ customer, endsAt, startsAt });

    await this.appointmentsRepository.create(appointment);

    return appointment;
  }
}
