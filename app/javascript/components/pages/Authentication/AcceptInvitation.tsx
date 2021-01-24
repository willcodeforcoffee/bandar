import * as React from "react";
import { useQueryString } from "../../utils/useQueryString";

export function AcceptInvitation(): JSX.Element {
  console.log("AcceptInvitation!");
  const token = useQueryString().get("invitation");
  return (
    <div id="Authentication_AcceptInvitation">
      <h1>Accept Invitation Token {token}</h1>
    </div>
  );
}
