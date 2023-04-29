import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams();
    const categoriesNews = useLoaderData();
    return (
        <div>
            {id && <h5>This category News: {categoriesNews.length}</h5>}
            {
                categoriesNews.map(category => <NewsCard key={category._id} news = {category} ></NewsCard>)
            }
        </div>
    );
};

export default Category;