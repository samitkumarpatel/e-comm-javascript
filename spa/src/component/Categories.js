import React from 'react'
import logo from '../logo.svg';
import Category from './Category';

const Categories = ({refresh=false}) => {
    const [categories, setCategories] = React.useState([]);
    const apiHost = process.env.REACT_APP_API_HOST;
    const fetchCategories = () => {
        fetch(`${apiHost}/api/category`)
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error));
    }
    
    // if (refresh) {
    //     fetchCategories();
    // }

    React.useEffect(() => {
        fetchCategories();
    }, [refresh]);

    return (
        <div className='categories__result'>
            { categories.length > 0 ? 
                categories.map(category => <Category key={category._id} category={category} />) : 
                <p>No categories found</p> }
        </div>
    )
}

export default Categories