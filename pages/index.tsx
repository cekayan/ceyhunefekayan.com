import type { NextPage } from "next";
import Head from "next/head";
import Avatar from "../components/Avatar";
import { ChevronDoubleDownIcon } from "@heroicons/react/outline";
import Header from "../components/Header";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useEffect } from "react";
import EducationSection from "../components/Education";
import Publications from "../components/Publications";
import Research from "../components/Research";

const Home: NextPage = () => {
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    console.log(height);
  }, [height]);
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
      <main className="absolute h-full w-full bg-slate-900 text-white flex-1 overflow-auto">
        <div className="h-full flex flex-col justify-center">
          <Avatar />
          <div className="absolute bottom-4 w-full flex justify-center">
            <ChevronDoubleDownIcon className="w-6 h-6" />
          </div>
        </div>
        <div className="h-full">
          <EducationSection />
        </div>
        <div className="h-full">
          <Publications />
        </div>
        <div className="h-full">
          <Research />
        </div>
      </main>
    </>
  );
};

export default Home;
