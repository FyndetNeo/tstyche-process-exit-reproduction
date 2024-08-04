/* eslint-disable */
/* prettier-ignore */

export type introspection_types = {
    'Book': { kind: 'OBJECT'; name: 'Book'; fields: { 'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'year': { name: 'year'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; }; };
    'Boolean': unknown;
    'Int': unknown;
    'Query': { kind: 'OBJECT'; name: 'Query'; fields: { 'book': { name: 'book'; type: { kind: 'OBJECT'; name: 'Book'; ofType: null; } }; 'books': { name: 'books'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'Book'; ofType: null; }; } }; }; };
    'String': unknown;
};

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  name: never;
  query: 'Query';
  mutation: never;
  subscription: never;
  types: introspection_types;
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}