import React, { useEffect } from "react";
import { Link } from 'gatsby';
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

const Header = () => {
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
    <header class="font-bol bg-white">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" class="flex items-center mb-4 md:mb-0">
          <span className="font-bol text-2xl">Showtime</span>
        </Link>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="/#leaderboard" class="mr-5 text-black hover:text-gray-800 px-5 py-2 rounded-md">Leaderboard</a>
        </nav>
        <button onClick={() => setShowModal(true)} style={{ transition: "all .15s ease" }} type="button" className="text-white py-2 px-5 focus:outline-none bg-black hover:bg-gray-800 rounded">Log in</button>
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
    </header>
  );
}

export default Header;
