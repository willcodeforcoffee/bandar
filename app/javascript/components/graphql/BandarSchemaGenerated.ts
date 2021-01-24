/* eslint-disable */
/* REGENERATE THIS FILE BY RUNNING > bin/rails graphql:create_graphql_schema && yarn run graphql:updateTypes */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};


export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** An example field added by the generator */
  testField: Scalars['String'];
  /** Find a UserInvitation by token */
  userInvitation?: Maybe<UserInvitation>;
};


export type QueryUserInvitationArgs = {
  token: Scalars['String'];
};

export type UserInvitation = {
  __typename?: 'UserInvitation';
  acceptedAt?: Maybe<Scalars['ISO8601DateTime']>;
  createdAt: Scalars['ISO8601DateTime'];
  emailAddress: Scalars['String'];
  expiresAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  isAccepted?: Maybe<Scalars['Boolean']>;
  isExpired?: Maybe<Scalars['Boolean']>;
  isSent?: Maybe<Scalars['Boolean']>;
  sentAt?: Maybe<Scalars['ISO8601DateTime']>;
  token: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & Pick<Query, 'testField'>
);

export type UserInvitationQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type UserInvitationQuery = (
  { __typename?: 'Query' }
  & { userInvitation?: Maybe<(
    { __typename?: 'UserInvitation' }
    & Pick<UserInvitation, 'emailAddress' | 'isAccepted' | 'isSent' | 'isExpired'>
  )> }
);


export const Document = gql`
    {
  testField
}
    `;

/**
 * __useQuery__
 *
 * To run a query within a React component, call `useQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuery(baseOptions?: Apollo.QueryHookOptions<Query, QueryVariables>) {
        return Apollo.useQuery<Query, QueryVariables>(Document, baseOptions);
      }
export function useLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Query, QueryVariables>) {
          return Apollo.useLazyQuery<Query, QueryVariables>(Document, baseOptions);
        }
export type QueryHookResult = ReturnType<typeof useQuery>;
export type LazyQueryHookResult = ReturnType<typeof useLazyQuery>;
export type QueryResult = Apollo.QueryResult<Query, QueryVariables>;
export const UserInvitationDocument = gql`
    query userInvitation($token: String!) {
  userInvitation(token: $token) {
    emailAddress
    isAccepted
    isSent
    isExpired
  }
}
    `;

/**
 * __useUserInvitationQuery__
 *
 * To run a query within a React component, call `useUserInvitationQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserInvitationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserInvitationQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useUserInvitationQuery(baseOptions: Apollo.QueryHookOptions<UserInvitationQuery, UserInvitationQueryVariables>) {
        return Apollo.useQuery<UserInvitationQuery, UserInvitationQueryVariables>(UserInvitationDocument, baseOptions);
      }
export function useUserInvitationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserInvitationQuery, UserInvitationQueryVariables>) {
          return Apollo.useLazyQuery<UserInvitationQuery, UserInvitationQueryVariables>(UserInvitationDocument, baseOptions);
        }
export type UserInvitationQueryHookResult = ReturnType<typeof useUserInvitationQuery>;
export type UserInvitationLazyQueryHookResult = ReturnType<typeof useUserInvitationLazyQuery>;
export type UserInvitationQueryResult = Apollo.QueryResult<UserInvitationQuery, UserInvitationQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    