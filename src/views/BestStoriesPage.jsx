import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import NewsList from '../components/newsList'
import Swal from 'sweetalert2'

export default function BestStoriesPage () {
    const dispatch = useDispatch()
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const isLoading = useSelector((state) => state.globalReducer.isLoading);
    
    useEffect(() => {
        fetchData();
        setupScrollListener();
    }, []);

    const fetchData = async () => {
        dispatch({type: "IS_LOADING",payload: true});
        try {
            const response = await axios.get(`https://hacker-news.firebaseio.com/v0/beststories.json`);
            const newsIds = response.data.slice((page - 1) * 20, page * 20);
            const newsPromises = newsIds.map((id) =>
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            );
            const newsData = await Promise.all(newsPromises);
            const newsItems = newsData.map((res) => res.data);
            setNews((prevNews) => [...prevNews, ...newsItems]);
            setPage(page + 1);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            })
        }
        dispatch({type: "IS_LOADING",payload: false});
    };

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollHeight - scrollTop === clientHeight && !isLoading) {
            fetchData();
            window.scrollBy(0, -100);
        }
    };
    
    const setupScrollListener = () => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    };

    return (
        <>
            <NewsList fetchData={fetchData} news={news} page={page}/>
        </>
    )
}