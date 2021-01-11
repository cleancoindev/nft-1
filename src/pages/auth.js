import React, { useEffect, useContext } from "react";
import SEO from "../components/seo";
import WalletButton from "../components/wallet";
import { Link } from "gatsby";
import nft from "../components/images/nft.png";
import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";
import Layout from "../components/layout";
import { FaHeart } from "react-icons/fa";
import share from "../components/images/share.svg";
import Cookies from "universal-cookie";
import { Context as AuthContext } from "../context/AuthContext";

function Auth() {
  const [email, setEmail] = React.useState("");
  const [showModal, setShowModal] = React.useState(false); // login modal
  const [loading, setLoading] = React.useState(false);
  const [magic, setMagic] = React.useState(null);

  const {
    attemptSigninFromCookie,
    state: { isLoggedIn },
  } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoggedIn) {
      attemptSigninFromCookie();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    (async () => {
      const m = new Magic("pk_test_7FF6C3036AF5DE22", {
        extensions: [new OAuthExtension()],
      });
      setMagic(m);
    })();
  }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const login = async () => {
    setLoading(true);
    await magic.preload;
    try {
      await magic.auth.loginWithMagicLink({
        email: email,
        //redirectURI: "https://tryshowtime.netlify.app/profile/",
        redirectURI: "http://localhost:8000/profile/",
      });
      const did = await magic.user.generateIdToken({
        //setting 30 day expiration
        lifespan: 60 * 60 * 24 * 30,
      });
      const cookies = new Cookies();
      cookies.set("did", did, { path: "/" });
      setLoading(false);
      setShowModal(false);
      window.location.reload(true);
    } catch (err) {
      setLoading(false);
      setShowModal(false);
      console.log(err);
    }
  };

  return (
    <div className="bg-black text-white font-bol">
      <div
        className="container mx-auto px-5 pt-20 pb-10 flex-col items-center"
        id="auth"
      >
        <h1 className="text-5xl mb-4 uppercase text-center mx-auto">
          Discover and showcase <br />
          your favorite digital art
        </h1>

        {isLoggedIn ? (
          <div className="flex justify-center">
            <a
              href="/profile/"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-md"
              style={{
                background: "#E45CFF",
              }}
            >
              My Profile
            </a>
          </div>
        ) : (
          <>
            <div className="flex justify-center">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-md"
                style={{
                  background: "#E45CFF",
                }}
              >
                Sign in / Sign up with Email
              </button>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 bg-black rounded-t">
                          <span className="font-bol text-xl text-white">
                            Showtime
                          </span>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-white h-6 w-6 text-2xl hover:text-red-500 block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        <div className="relative p-6 flex-auto">
                          <label className="block">
                            <input
                              value={email}
                              onChange={handleEmail}
                              className="border border-gray-400 font-book px-3 py-2 mt-2 block w-full rounded text-black"
                              placeholder="hello@tryshowtime.com"
                            />
                          </label>
                          <button
                            onClick={login}
                            style={{ transition: "all .15s ease" }}
                            type="button"
                            className="text-white py-2 px-8 mt-4 focus:outline-none bg-black hover:bg-gray-800 hover:shadow-xl rounded-full"
                          >
                            {loading ? "Loading..." : "Log in with email"}
                          </button>
                        </div>
                        <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                          <Link
                            className="text-black font-demi text-lg py-3 px-2 hover:text-purple-700 rounded outline-none focus:outline-none mr-1 mb-1"
                            style={{ transition: "all .15s ease" }}
                            to="/privacy/"
                          >
                            Privacy
                          </Link>
                          <Link
                            className="text-black font-demi text-lg px-2 py-3 hover:text-purple-700 rounded outline-none focus:outline-none mr-1 mb-1"
                            style={{ transition: "all .15s ease" }}
                            to="/terms/"
                          >
                            Terms
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>

            <div className="flex justify-center mt-6">
              <span className="text-white text-lg inline-flex lg:px-24">
                or
              </span>
            </div>
            <div className="flex justify-center mt-6">
              <button
                className="inline-flex text-white bg-indigo-500 border-0 py-3 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                style={{
                  background:
                    "linear-gradient(to bottom right, #52FF78, #008AA8)",
                }}
              >
                Connect Wallet
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Auth;
