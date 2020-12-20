import React from "react";
import Leaderboard from "../components/leaderboard";
import Creators from "../components/nft";
import SEO from "../components/seo";
import { Link } from 'gatsby';
import WalletButton from '../components/wallet';

function IndexPage() {
    return (
        <div>
            <SEO
                keywords={[`showtime`, `ethereum`, `token`, `nft`]}
                title="Profile"
            />
            <header class="font-bol bg-white">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/" class="flex items-center mb-4 md:mb-0">
                        <span className="font-bol text-2xl">Showtime</span>
                    </Link>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    </nav>
                    <WalletButton />
                </div>
            </header>
            <Creators />
            <Leaderboard />
        </div>
    );
}

export default IndexPage;
