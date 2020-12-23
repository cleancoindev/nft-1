import React from "react";
import Item from "./NFT/Item";

function Creators() {
    return (
        <section class="font-book">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex w-full mb-20 flex-wrap">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-book lg:w-1/3 lg:mb-0 font-bol">Featured</h1>
                </div>
                <div class="flex flex-wrap -m-4">
                    <Item tokenId={0} address={'0x629a673a8242c2ac4b7b8c5d8735fbeac21a6205'}/>
                </div>
            </div>
        </section>
    );
}


export default Creators; 