import { Header } from '../Header/Header';
import './NewsPage.css';
import { oneNews } from '../../utils/auth'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ActionCard } from '../UI/Card/Card';
import { Btn } from '../UI/Button/Button';
export const NewsPage = (() => {
    const [news, setNews] = useState({})
    let { id } = useParams();
    const getNews = async () => {
        let response = await oneNews(id)
        setNews(response.data.news)
    }
    useEffect(() => {
        getNews()
    }, [])
    const navigate = useNavigate()
    return (
        <div className='news-page'>
            <Header />
            {news
                ?
                <div className="news-page__card">
                    <ActionCard
                        width="100%"
                        card={news} />
                    <Btn onClick={() => navigate('/news')} text="Вернуться ко всем новостям" />
                </div>
                : ''
            }
        </div>
    )
})
