
import { news } from '../../utils/auth'
import './Main.css'
import { useState, useEffect } from 'react';
import { Header } from '../Header/Header'
import {
    useNavigate
} from "react-router-dom";
import { observer } from "mobx-react"
export const Main = observer((props) => {
    const [uncos, setUncos] = useState(JSON.parse(localStorage.getItem('news')) || [])
    const [last, setLast] = useState(10)
    const [first, setFirst] = useState(0)
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const getNews = async () => {
        let response = await news()
        setUncos(response.data.news.concat(response.data.news).concat(response.data.news))
        localStorage.setItem('news', JSON.stringify(response.data.news.concat(response.data.news).concat(response.data.news)))
    }
    useEffect(() => {
        getNews()
    }, [])

    function createMarkup(item) {
        return { __html: item.body };
    }
    function moreNews() {
        if (last > uncos.length) {
            setLast(10)
            setFirst(0)
            setMessage('На данный момент это все новости')
        }
        setLast((curent) => curent + 10)
        setFirst((curent) => curent + 10)
    }
    function showNews(item) {
        navigate(`/news/${item.id}`)
    }
    return (
        <div className="main">
            <Header />
            <div className="main__content">
                <div className="main__container">
                    {uncos.slice(first, last).map((el) => (
                        <div className="main__card" onClick={() => showNews(el)}>
                            <h2 className="card__title">{el.title}</h2>
                            <img src={el.image_url} className="card__img" alt={el.title} />
                            <h3 dangerouslySetInnerHTML={createMarkup(el)}></h3>
                        </div>
                    ))}
                </div>
                <button className="main__btn" onClick={moreNews}>Больше новостей</button>
                <h1>{message}</h1>
            </div>
        </div>
    )
}) 