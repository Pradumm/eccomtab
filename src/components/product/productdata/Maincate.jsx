import React from 'react'
import { Link } from 'react-router-dom/dist'
import { useFetchApi } from '../../Api/uesFatchapi'
const Maincate = () => {

    const { data, loading } = useFetchApi("http://143.244.142.0/api/v1/parts/categories/")

    if (!data || data.length === 0) {
        return (
            <div>
                <p>No categories with subcategories found.</p>
            </div>
        );
    }
    const categoriesWithSubcategories = data.filter((category) => category.subcat.length > 0);
    

    function getSubcategoryById(categoryId) {
        const category = data.results.find((cat) => cat.id === categoryId);

        category.subcat.forEach((subcategory) => {
          console.log(subcategory.name);
        });

     
      }

      const categoryId = 6;
    //   getSubcategoryById(categoryId);


    return (

        <>
            {
                categoriesWithSubcategories?.map((category, index) => {

                    return (
                        <div className="" key={category.id}>
                            <Link to={`/Testshop/${category.id}`} type="button" className="nav-link cat-nav">
                            {category.name}
                            </Link>

                        </div>
                    )
                })
            }
        </>

    )
}

export default Maincate