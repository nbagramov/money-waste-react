import React, { useState } from 'react';
import { TopElementsProps } from "../../utils/interfaces";
import './styles.css'

const TopElements = ({getPurchase = (): void => {}}: TopElementsProps): JSX.Element => {
    const [place, setPlace] = useState<string>('')
    const [price, setPrice] = useState<number>()

    const getDate = () => {
        const today = new Date()
        let month: number | string = today.getMonth() + 1;
        if (month < 10){ month = '0' + month }
        return (today.getDate() + '.' + month + '.' + today.getFullYear());
    }

    const getNewPurchase = () => {
        const date = getDate()
        if (place && price) {
            getPurchase({place, price, date})
            setPlace('')
        }
    }

    return (
        <div className="top-elements-container">
            <h1 className="title">Учёт моих расходов</h1>
            <div className="get-info-line">
                <div className="input-container-where">
                    <span className="text-input">Куда было потрачено:</span>
                    <input
                        value={place}
                        className="input-where"
                        placeholder="Куда было потрачено"
                        onChange={(event) =>  setPlace(event.target.value)}
                    />
                </div>
                <div className="input-container-how-much">
                    <span className="text-input">Сколько было потрачено:</span>
                    <input
                        className="input-how-much"
                        placeholder="Сколько было потрачено"
                        type="number"
                        onChange={(event) => setPrice(Number(event.target.value))}
                    />
                </div>
                <div className="button-container">
                    <button className="button" onClick={getNewPurchase}>Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default TopElements;