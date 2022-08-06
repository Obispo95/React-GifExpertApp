import { GiftItem } from './GiftItem.jsx';
import { useFetchGifs } from '../hooks/useFetchGifs.js';


export const GiftGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Loading...</h2>)
            }

            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GiftItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
