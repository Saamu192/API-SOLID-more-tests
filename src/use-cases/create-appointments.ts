import { Appointment } from "../entities/appointment";

interface ICreateAppointmentRequest {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

type ICreateAppointmentResponse = Appointment;

export class CreateAppointment {
  async execute({
    customer,
    endsAt,
    startsAt,
  }: ICreateAppointmentRequest): Promise<ICreateAppointmentResponse> {
    const appointment = new Appointment({ customer, endsAt, startsAt });

    return appointment;
  }
}
