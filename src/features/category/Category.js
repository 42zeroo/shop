import React from 'react'
import styles from './Category.module.css';
import {changeCategory, selectCategory} from './categorySlice'
import {useDispatch} from 'react-redux'
import {Link} from "react-router-dom"

const categories = ["Sporty wodne", "Wspinaczka", "Pilka nozna", "Wyscigi"]
const Category = () => {
    const dispatch = useDispatch();
    return (
        <>
        <div style={{display: "flex"}}>
            {
                categories.map(catName => {
                    const linkTo = "/shop/category/"+catName;
                    return (
                        <div className={styles.row}>
                            <Link
                            to={linkTo}
                            className={styles.button}
                            onClick={()=> dispatch(changeCategory(catName))}
                            >
                                {catName}
                            </Link>
                        </div>
                        )
                }
                    
                )
            }

        </div>
        
        </>
        
    )
}

export default Category
