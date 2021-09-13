import React, { useState } from 'react';
import { IPurchase } from '../../utils/interfaces';
import { getDate } from '../../utils/getDate';
import './styles.css'

interface TopElementsProps {
    addPurchase: (arg0: IPurchase) => void;
}

const TopElements = ({addPurchase = (): void => {}}: TopElementsProps): JSX.Element => {
    const [place, setPlace] = useState<string>('')
    const [price, setPrice] = useState<number | undefined>()

    const onSubmit = () => {
        const date = getDate()
        const id = new Date().getTime();

        if (place && (price || price === 0)) {
            addPurchase({id, place, price, date,  isEdit: false})
            setPlace('')
            setPrice(undefined)
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
                        value={price === undefined ? '' : price}
                        className="input-how-much"
                        placeholder="Сколько было потрачено"
                        type="number"
                        onChange={(event) => setPrice(Number(event.target.value))}
                    />
                </div>
                <div className="button-container">
                    <button className="button" onClick={onSubmit}>Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default TopElements;