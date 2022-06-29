import { Header } from '../Header/Header';
import './NewsPage.css';
import { oneNews } from '../../utils/auth'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { requestTransform } from '../../utils/auth'
export const NewsPage = (() => {
    const data = useSelector(state => state.auth)
    const [news, setNews] = useState({})
    let { id } = useParams();
    const getNews = async () => {
        if (data) {
            requestTransform(data)
            let response = await oneNews(id)
            setNews(response.data.news)
        }
    }
    useEffect(() => {
        getNews()
    }, [])
    function createMarkup() {
        return { __html: news.body };
    }
    const navigate = useNavigate()
    return (
        <div className='news-page'>
            <Header />
            {news
                ? <div className="news-page__card">
                    <h2 className="news-page__title">{news.title}</h2>
                    <img src={news.image_url} className="news-page__img" alt={news.title} />
                    <h3 dangerouslySetInnerHTML={createMarkup()}></h3>
                    <button className="news-page__btn" onClick={() => navigate('/news')}>Вернуться ко всем новостям</button>
                </div>
                : ''
            }
        </div>
    )
})