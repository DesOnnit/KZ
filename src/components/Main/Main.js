import { news } from '../../utils/auth'
import './Main.css'
import { useState, useEffect } from 'react';
import { Header } from '../Header/Header'
import {
    useNavigate
} from "react-router-dom";
import { ActionCard } from '../UI/Card/Card';
import { Btn } from '../UI/Button/Button';
import { usePagination } from "react-use-pagination";
import { PaginationItem } from '@mui/material';
export const Main = ((props) => {
    const [uncos, setUncos] = useState([])
    const navigate = useNavigate()
    const getNews = async () => {
        let response = await news()
        setUncos(response.data.news.concat(response.data.news))
    }
    const {
        currentPage,
        totalPages,
        setNextPage,
        setPreviousPage,
        nextEnabled,
        previousEnabled,
        startIndex,
        endIndex,
        setPage,
    } = usePagination({ totalItems: uncos.length, initialPageSize: 10 });
    
    function showNews(item) {
        navigate(`/news/${item.id}`)
    }

    useEffect(() => {
        getNews()
    }, [])
   
    return (
        <div className="main">
            <Header />
            <div>
                <div className="main__content">
                    <div className="main__container">
                        {uncos.slice(startIndex, endIndex + 1).map((card) => (
                            <ActionCard
                                showNews={showNews}
                                card={card}
                                key={card.id} />
                        ))}
                    </div>
                    <div className="main__buttons">
                        <Btn onClick={setPreviousPage} disabled={!previousEnabled} text="Предыдущая страница" />
                        {[...Array(totalPages).keys()].map((el) => (
                            <PaginationItem
                                onClick={() => setPage(el)}
                                key={el}
                                page={el+1}
                                variant="outlined"
                                disabled={el===currentPage?true:false}
                                selected={el===currentPage?true:false}
                            />
                        ))}
                        <Btn onClick={setNextPage} disabled={!nextEnabled} text="Следующая страница" />
                    </div>
                </div>
            </div>
        </div>
    )
}) 