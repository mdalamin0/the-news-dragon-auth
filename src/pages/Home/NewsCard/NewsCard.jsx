import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='ms-2 flex-grow-1'>
                    <h6 className='mb-0'>{author?.name}</h6>
                    <p><small> {moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link> </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1 d-flex align-items-center '>
                    <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
                    <span className='ms-3'>{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;