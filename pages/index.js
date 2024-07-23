import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Counter from "@/pages/components/Counter";
import ToggleText from "@/pages/components/ToggleText";
import TextInput from "@/pages/components/TextInput";
import ThemeToggle from "@/pages/components/ThemeToggle";
import LogOnMount from "@/pages/components/LogOnMount";
import FetchMount from "@/pages/components/FetchMount";
import Photos from "@/pages/components/Photos";
import DocumentTitleUpdater from "@/pages/components/DocumentTitleUpdater";
import IntervalComponent from "@/pages/components/IntervalComponent";
import FetchDataOnPropChange from "@/pages/components/FetchDataOnPropChange";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Counter/>
        <ToggleText/>
        <TextInput/>
      <ThemeToggle/>
        <LogOnMount/>
        <FetchMount/>
        <DocumentTitleUpdater/>
        <IntervalComponent/>
      <FetchDataOnPropChange/>
    </div>
  );
}
