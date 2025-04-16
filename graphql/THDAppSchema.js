import { gql } from 'apollo-server';

const typeDefs = `
  type Appointment {
    id: ID!
    field1: String!
    field2: String!
    field3: String!
    products: [Product!]!
    customers: [Customer!]!
  }

  type Product {
    id: ID!
    field1: String!
    field2: String!
  }

  type Customer {
    id: ID!
    field1: String!
    field2: String!
    field3: String!
  }

  input AppointmentInput {
    id: ID!
    field1: String!
    field2: String!
    field3: String!
    products: [ProductInput!]!
    customers: [CustomerInput!]!
  }

  input ProductInput {
    id: ID!
    field1: String!
    field2: String!
  }

  input CustomerInput {
    id: ID!
    field1: String!
    field2: String!
    field3: String!
  }

  input ApplyForFinanceInput {
    appointmentId: ID!
    financeAmount: Float!
  }

  type Mutation {
    editApplyForFinance(input: ApplyForFinanceInput!): Appointment
  }

  type Query {
    appointments: [Appointment!]!
    products: [Product!]!
    customers: [Customer!]!
  }
`;

export default typeDefs;