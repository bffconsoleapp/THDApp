const sampleAppointments = [
  {
    id: "1",
    field1: "Appointment 1",
    field2: "Description 1",
    field3: "Details 1",
    products: [{ id: "1", field1: "Product 1", field2: "Detail" }],
    customers: [
      {
        id: "1",
        field1: "Customer 1",
        field2: "Detail",
        field3: "More Detail"
      }
    ]
  }
];

const resolvers = {
  Query: {
    appointments: () => sampleAppointments,
    products: () =>
      sampleAppointments.reduce((acc, val) => acc.concat(val.products), []),
    customers: () =>
      sampleAppointments.reduce((acc, val) => acc.concat(val.customers), [])
  },
  Mutation: {
    editApplyForFinance: (_, { input }) => {
      // Placeholder logic where you'd update the finance amount
      const appointment = sampleAppointments.find(
        (appointment) => appointment.id === input.appointmentId
      );
      if (appointment) {
        // Presuming only logging here
        console.log(`Finance Amount for Appointment ID ${input.appointmentId}: ${input.financeAmount}`);
        return appointment;
      } else {
        return null;
      }
    }
  }
};

export default resolvers;