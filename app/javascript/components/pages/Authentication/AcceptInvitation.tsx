import * as React from "react";
import { useQueryString } from "components/utils/useQueryString";
import { GraphQLErrorMessage } from "components/graphql/GraphQLErrorMessage";
import { GraphQLLoadingMessage } from "components/graphql/GraphQLLoadingMessage";
import { useUserInvitationQuery, UserInvitation } from "components/graphql/BandarSchemaGenerated";
import { EmailAddressControl, Form, PasswordInputControl, TextInputControl } from "components/forms";

function InvalidInvitation(): JSX.Element {
  return (
    <div>
      <h1>Your invitation is no longer valid. Please contact the administrator for another.</h1>
    </div>
  );
}

interface DisplayUserInvitationProps {
  userInvitation: UserInvitation;
}

function DisplayUserInvitation(props: DisplayUserInvitationProps): JSX.Element {
  console.log("DisplayUserInvitation", props);
  function theInvitationIsNotValid(userInvitation: UserInvitation) {
    return userInvitation.isExpired || userInvitation.isAccepted || !userInvitation.isSent;
  }

  if (theInvitationIsNotValid(props.userInvitation)) {
    return <InvalidInvitation />;
  }

  return (
    <div>
      <h1>Accept User Invitation</h1>
      <p>Thank you for accepting the invitation to join this service.</p>
      <p>Please complete the following information:</p>
      <Form legend="User Details">
        <EmailAddressControl
          key="emailaddress"
          labelText="Email Address"
          placeholder="email@example.com"
          initialValue={props.userInvitation.emailAddress}
        />
        <TextInputControl key="fullname" labelText="Full Name" placeholder="Your name, firstname lastname" />
        <TextInputControl key="username" labelText="User Name" placeholder="Your user name or display name" />
        <PasswordInputControl key="password" labelText="Password" placeholder="Your password" />
      </Form>
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
    return <GraphQLLoadingMessage />;
  } else if (error) {
    return <GraphQLErrorMessage source="AcceptInvitation" error={error} />;
  }

  return <DisplayUserInvitation userInvitation={data.userInvitation} />;
}
