import React, {useEffect, useState} from 'react';
import moment from 'moment';

export default function NewsItem ({ title, score, source, url, commentsCount, index, time, itemKey }) {
    const [domain, setDomain] = useState("-")
    useEffect(() => {
        if(url && url !== ""){
            const tempUrl = new URL(url);
            setDomain(tempUrl.hostname)
        }
    }, [])
    
    return (
        <div key={itemKey} className="flex items-center py-2 border-b">
            <span className="flex items-center justify-center w-8 h-8 bg-gray-500 text-white font-bold text-sm mr-4">
                {index}
            </span>
            <div className="flex-grow">
                <div>
                    {
                        !url || url === ""?
                        <div className='flex'>
                            <div className="text-gray-500 hover:underline title-item">{title}</div>
                            <div className="text-gray-500 text-sm hover:underline my-auto ml-2">(does't have url)</div>
                        </div>
                        :
                        <>
                            <a href={url} className="text-blue-500 hover:underline title-item">{title} </a>    
                            {
                                !url || url === ""?
                                "-" :
                                <a href={`http://${domain}`} className="text-gray-500 text-sm hover:underline">({domain})</a>
                            }
                        </>
                    }
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                <span>{score} points</span>
                <span className="mx-2">|</span>
                <span>by {source} {moment.unix(time).fromNow()}</span>
                {
                    commentsCount || commentsCount === 0? 
                    <>
                        <span className="mx-2">|</span>
                        <span>{commentsCount} comments</span>
                    </> : ""
                }
                </div>
            </div>
        </div>
    );
};