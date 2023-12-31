import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import AppLayout from "../../components/AppLayout/AppLayout";

export default function NewPost(props) {
  return (
    <div>
      <h1>post page</h1>
    </div>
  );
}

NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withApiAuthRequired(() => {
  return {
    props: {},
  };
});
