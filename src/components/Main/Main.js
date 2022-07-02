import { news } from '../../utils/auth'
import './Main.css'
import { useState, useEffect } from 'react';
import { Header } from '../Header/Header'
import {
    useNavigate
} from "react-router-dom";
import { ActionCard } from '../UI/Card/Card';
import { Btn } from '../UI/Button/Button';
export const Main = ((props) => {
    const [uncos, setUncos] = useState([])
    const [last, setLast] = useState(10)
    const [first, setFirst] = useState(0)
    const [message, setMessage] = useState('')
    const [disable, setDisable] = useState(false)
    const navigate = useNavigate()
    const getNews = async () => {
        let response = await news()
        setUncos(response.data.news.concat(response.data.news))
    }
    useEffect(() => {
        getNews()
    }, [])

    function moreNews() {
        if (last > uncos.length) {
            setMessage('На данный момент это все новости')
            setDisable(true)
        } else {
            setLast((curent) => curent + 10)
            setFirst((curent) => curent + 10)
        }

    }
    function showNews(item) {
        navigate(`/news/${item.id}`)
    }
    console.log(last, uncos.length)
    return (
        <div className="main">
            <Header />
            {uncos
                ? <div className="main__content">
                    <div className="main__container">
                        {uncos.slice(first, last).map((card) => (
                            <ActionCard
                                showNews={showNews}
                                card={card}
                                key={card.id} />
                        ))}
                    </div>
                    <Btn disable={disable} type="button" onClick={moreNews} text="Больше новостей" />
                    <h1>{message}</h1>
                </div>
                : ''}
        </div>
    )
}) 