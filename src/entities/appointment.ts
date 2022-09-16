interface AppointmentProps {
  startsAt: Date;
  endsAt: Date;
  customer: string;
}

export class Appointment {
  private props: AppointmentProps;

  get customer(): string {
    return this.props.customer;
  }

  get startsAt() {
    return this.props.startsAt;
  }

  get endsAt() {
    return this.props.endsAt;
  }

  constructor(props: AppointmentProps) {
    this.props = props;
  }
}
