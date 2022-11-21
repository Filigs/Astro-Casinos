import { withRouter } from "next/router";

function Loader({ router }) {
  return <main>{"loading..."}</main>;
}

export default withRouter(Loader);
