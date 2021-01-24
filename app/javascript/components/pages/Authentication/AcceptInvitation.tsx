import * as React from "react";
import { useQueryString } from "../../utils/useQueryString";
import { useUserInvitationQuery } from "components/graphql/BandarSchemaGenerated";

function InvalidInvitation(): JSX.Element {
  return (
    <div>
      <h1>Your invitation is no longer valid. Please contact the administrator for another.</h1>
    </div>
  );
}

export function AcceptInvitation(): JSX.Element {
  console.log("AcceptInvitation!");
  const token = useQueryString().get("invitation");
  if (token == null || token.length <= 0) {
    return <InvalidInvitation />;
  }

  const { loading, error, data } = useUserInvitationQuery({ variables: { token: token } });

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    console.error("An error happened", error);
    return (
      <div>
        <h1>An Error Occurred</h1>
        <pre>{error}</pre>
      </div>
    );
  }

  return (
    <div id="Authentication_AcceptInvitation">
      <h1>Accept Invitation Token {token}</h1>
    </div>
  );
}
