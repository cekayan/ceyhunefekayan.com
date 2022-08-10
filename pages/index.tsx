import type { NextPage } from "next";
import Head from "next/head";
import Avatar from "../components/Avatar";
import Layout from "../components/Layout";
import { ChevronDoubleDownIcon } from "@heroicons/react/outline";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ceyhun Efe Kayan</title>
        <meta
          name="description"
          content="Ceyhun Efe Kayan's Academic Biography Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Navbar />
        <Avatar />
        <ChevronDoubleDownIcon className="w-6 h-6" />
      </Layout>
      {/* <Layout>
        <p>
          Ullamco laborum duis duis anim esse anim cillum ex exercitation culpa.
          Officia ut magna ipsum laborum in sint consequat ipsum mollit amet
          officia nulla veniam. Fugiat et minim reprehenderit irure ex quis
          incididunt enim reprehenderit irure. Cupidatat voluptate nulla minim
          reprehenderit veniam magna. Voluptate aliqua laborum id pariatur
          laboris consectetur anim amet. Ad dolor ea eiusmod nisi est.
        </p>
      </Layout> */}
    </>
  );
};

export default Home;
