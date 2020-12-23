import React, { useEffect, useState } from 'react';
import { FaInstagram, FaRegHeart, FaTwitter } from 'react-icons/fa';

const Item = (props) => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const { tokenId, address } = props.match.params;
        fetchList(tokenId, address);
    }, []);

    const fetchList = (tokenId, address) => {
        fetch(`https://api.opensea.io/api/v1/asset/${address}/${tokenId}`)
            .then((response) => response.json())
            .then((data) => {
                const result = {
                    imageUrl: data.image_url,
                    name: data.name,
                    collectionName: data.collection.name,
                    description: data.description,
                    permalink: data.permalink,
                };
                setItem(result);
            })
            .catch((e) => console.log(e.message));
    };

    return (
        <>
            <div class="p-4 lg:w-1/2 hover:shadow-xl" style={{ transition: "all .15s ease" }}>
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={item.imageUrl} />
                    <div class="flex-grow sm:pl-8">
                        <h2 class="title-font font-medium text-lg text-black font-bol">{item.name}</h2>
                        <h3 class="text-gray-500 mb-3">Owned by Alex Masmej</h3>
                        <p class="mb-4">{item.description}</p>
                        <span class="inline-flex">
                            <a class="text-black hover:text-pink-600">
                                <FaInstagram />
                            </a>
                            <a class="ml-2 text-black hover:text-blue-600">
                                <FaTwitter />
                            </a>
                            <a class="ml-2 hover:text-red-600">
                                <FaRegHeart />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Item;