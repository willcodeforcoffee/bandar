import React from 'react';
import { AppConstants } from './AppConstants';
import { GraphQLContext } from './graphql/GraphQLProvider';

interface AppProps {
  constants: AppConstants;
}

function App(props: AppProps): JSX.Element {
  return (
    <GraphQLContext graphqlEndpoint={props.constants.paths.graphql}>
      <div className="prose">
        <h1>React is Working</h1>
        <p>This means React Rails is working</p>
      </div>
    </GraphQLContext>
  );
}

export { App };
