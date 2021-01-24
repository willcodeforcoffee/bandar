import { useLocation } from "react-router-dom";

// A custom hook that builds on useLocation to parse
// the query string for you.
// From: https://reactrouter.com/web/example/query-parameters
function useQueryString(): URLSearchParams {
  return new URLSearchParams(useLocation().search);
}

export { useQueryString };
