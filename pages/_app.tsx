import Layout from "@/components/layout";
import LoginModal from "@/components/loginModal";
import RegModal from "@/components/registerModal";
import Modal from "@/components/sideBar/modal";
import { store } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <LoginModal />
        <RegModal />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
