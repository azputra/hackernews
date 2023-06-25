import React from 'react'
import { useSelector } from 'react-redux'
import NewsItem from './newsItem'

export default function NewsList ({news}) {
    const isLoading = useSelector((state) => state.globalReducer.isLoading);
    return (
        <>
        {   
            news.length === 0 ? 
            "":
            news.map((item, index) => {
                const itemKey = `${item.id}-${index}`;
                return(<NewsItem key={itemKey} title={item.title} itemKey={itemKey} index={index + 1} time={item.time} score={item.score} source={item.by} url={item.url} commentsCount={item.descendants}/>)
            })
        }
        {isLoading && (
            <div className="flex justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 mr-3 border-t-4 border-b-4 border-orange-500"></div>
                <span className="text-gray-500">Loading...</span>
            </div>
        )}
        </>
    )
}