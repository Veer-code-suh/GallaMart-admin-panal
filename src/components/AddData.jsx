import React, {useState} from 'react'
// import "./new.css";

import { db, storage } from "../Firebase/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes,getDownloadURL} from "firebase/storage";

const AddData = () => {


    const [productName,setProductName] = useState('')
    const [productPrice,setProductPrice] = useState('')
    const [productQuantity,setProductQuantity] = useState('')
    const [productCategory,setProductCategory] = useState('')
    const [productType,setProductType] = useState('')
    const [productDescription,setProductDescription] = useState('')
    const [productImage,setProductImage] = useState(null)
    const [productImageUrl,setProductImageUrl] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

        if(productImage ==null){
            alert("Please select product image")
            return
        }
        else {
            const imageRef = ref(storage, `ProductImages/${productImage.name}`)
            uploadBytes(imageRef, productImage)
            .then(() => {
    
                getDownloadURL(imageRef)
                .then((url) => {
                    // console.log(url)

                    const productData = {
                        productName,
                        productPrice,
                        productQuantity,
                        productCategory,
                        productType,
                        productDescription,
                        productImageUrl: url,
                        id: new Date().getTime().toString(),
                    }
                //    console.log(productData)
                    try {
                       const docRef = addDoc(collection(db,"ProductData"), productData);
                       alert("Data added successfully",docRef.id);
                    } catch (error) {
                       alert(error.message);
                    } 


                })
            })
            .catch((error) => {
                alert(error,"something went wrong")
            });
        }   
     
    }

    return (
        <div className="form-outer">
                <h1>Add Product Data</h1>
                <hr/>
                <form className="form-inner">
                    <label>Product Name :</label>
                    <input type="text" name="Product_name"
                        onChange={(e) => { setProductName(e.target.value) }} />
                    <br />
                    <label>Product Description :</label>
                    <input type="text" name="Product_description"
                        onChange={(e) => { setProductDescription(e.target.value) }} />
                    <br />
                    <label>Product Quantity : </label>
                      <input type="text" name="product_quantity"
                      onChange={(e)=>{setProductQuantity(e.target.value)}}/>
                        <br/>
                        <label>Product Price :</label>
                            <input type="number" name="Product_price"
                                onChange={(e) => { setProductPrice(e.target.value) }}
                            />

                         <div className="form-row">

                        
                        <div className="form-col">
                            <label>Product Type :</label>

                            <select name="Product_type" onChange={(e) => { setProductType(e.target.value) }}>
                                <option value="null">Select Product Type</option>
                                <option value="food-item">Food Product</option>
                                <option value="home-item">Home Product</option>
                                <option value="daily-item">Daily Product</option>
                            </select>
                        </div>
                    
                        <div className="form-col">
                            <label>Product Category :</label>
                            <select name="Product_category" onChange={(e) => { setProductCategory(e.target.value) }}>
                                <option value="null">Select Product Category</option>
                                <option value="food-item">Food</option>
                                <option value="home-item">Baby Care</option>
                                <option value="daily-item">Personal Care</option>
                                <option value="home-item">Home Care</option>
                            </select>
                        </div>  
                    <div/>
                    <div className="form-col">
                        <label>Product Image :</label>
                       <input type="file" name="Product_image"
                        onChange={(e) => { setProductImage(e.target.files[0]) }}
                        />
                    </div>
                   
                    </div>
                    <button onClick={handleSubmit}>Add Product</button>
                </form>
            </div>
        
    )
}

export default AddData