import type { NextPage } from "next";
import Head from "next/head";
import Bio from "../components/Bio";
import { ChevronDoubleDownIcon } from "@heroicons/react/outline";
import Header from "../components/Header";
import EducationSection from "../components/Education";
import Publications from "../components/Publications";
import Research from "../components/Research";

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
      <main className="absolute h-full w-full flex-1 overflow-auto bg-slate-900 text-white">
        <div className="flex h-full flex-col justify-center">
          <Bio />
          <div className="absolute bottom-4 flex w-full justify-center">
            <ChevronDoubleDownIcon className="h-6 w-6" />
          </div>
        </div>
        <div className="min-h-full">
          <EducationSection />
        </div>
        <div className="min-h-full">
          <Publications />
        </div>
        <div className="min-h-full">
          <Research />
        </div>
      </main>
    </>
  );
};

export default Home;
