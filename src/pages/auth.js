import React, {useEffect} from "react";
import SEO from "../components/seo";
import WalletButton from '../components/wallet';
import { Link } from 'gatsby';
import nft from '../components/images/nft.png';
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';
import Layout from "../components/layout";
import { FaHeart } from 'react-icons/fa';
import share from "../components/images/share.svg";

function Auth() {
    const [email, setEmail] = React.useState('');
    const [showModal, setShowModal] = React.useState(false); // login modal
    const [loading, setLoading] = React.useState(false);
    const [magic, setMagic] = React.useState(null);

    useEffect(() => {
        (async () => {
            const m = new Magic('pk_test_7FF6C3036AF5DE22', {
                extensions: [new OAuthExtension()],
            });
            setMagic(m);
        })()
    }, []);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const login = async () => {
        setLoading(true);
        await magic.preload;
        try {
            await magic.auth.loginWithMagicLink({ email: email, redirectURI: 'https://tryshowtime.netlify.app/profile/' });
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    }

    return (
        <Layout>
        <div className="bg-black text-white font-bol">
            <SEO
                keywords={[`showtime`, `ethereum`, `token`, `nft`]}
                title="Sign in"
            />
            <div class="container mx-auto flex px-5 py-40 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4">Discover and
        <br class="hidden lg:inline-block" />showcase digital art.
      </h1>
                    <div class="flex justify-center">
                        <button onClick={() => setShowModal(true)} class="inline-flex text-white bg-indigo-500 border-0 py-3 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg" style={{ background: 'linear-gradient(to bottom right, #9E52FF, #FF27E9)' }}>Continue with Email</button>
                        {showModal ? (
          <> 
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 bg-black rounded-t">
                    <span className="font-bol text-xl text-white">Showtime</span>
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
                      <input value={email}
                        onChange={handleEmail} className="border border-gray-400 font-book px-3 py-2 mt-2 block w-full rounded" placeholder="hello@tryshowtime.com" />
                    </label>
                    <button onClick={login} style={{ transition: "all .15s ease" }} type="button" className="text-white py-2 px-8 mt-4 focus:outline-none bg-black hover:bg-gray-800 hover:shadow-xl rounded-full">{loading ? 'Loading...' : 'Log in with email'}</button>
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
                    <div class="flex justify-center mt-6">
                        <span className="text-white text-lg inline-flex lg:px-24">or</span>
                    </div>
                    <div class="flex justify-center mt-6">
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-3 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg" style={{ background: 'linear-gradient(to bottom right, #52FF78, #008AA8)' }}>Connect Wallet</button>
                    </div>

                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <div class="h-full overflow-hidden">
                            <img class="lg:h-64 md:h-36 w-full object-cover object-center" src={nft} alt="nft" />
                            <div class="mt-6 p-1">
                                <h2 class="tracking-widest text-md mb-1">LIL MIQUELA</h2>
                                <h1 class="text-xl font-bol mb-2">Rebirth of Venus
                                </h1>
                                <p class="leading-relaxed mb-3 text-gray-200">Owned by leviathan</p>
                                <div class="flex items-center flex-wrap">
                                    <button class="inline-flex text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol"><span className="text-pink-600"><FaHeart className="h-6 w-6" /></span> <span className="text-pink-600 ml-2">233</span></button>
                                    <button class="inline-flex text-black bg-pink-600 border-0 py-2 px-2 ml-2 focus:outline-none hover:bg-pink-700 rounded text-lg"><img src={share} alt="share-button" className="h-6 w-6 items-center flex" /></button>

                                    <span class="text-gray-200 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-md pr-3 py-1 border-r-2 border-gray-200">
                                        Ξ 159
              </span>
                                    <span class="text-gray-200 inline-flex items-center leading-none text-md">
                                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>6
              </span>
                                </div>
                            </div>
                        </div>
                                    </div>
            </div>
        </div>
        </Layout>
    );
}

export default Auth;
