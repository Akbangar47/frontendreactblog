import React, {  useEffect, useState } from 'react'
import Card from '../Component/Card'

const Hollywood = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        const url = "https://akbangar.herokuapp.com/api/holly";
        fetch(url).then(res => res.json())
            .then(res => setData(res)  )
    },[])
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Hollywood</h1>
            <div className="main__container">
                <div className='rightbar'>
                    {
                        data.filter((article) => { return article.category === "Hollywood" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                fulldescription = {n.description}
                            />
                        ))
                    }
                   
                </div>

                
                     <div className='ad'>
                     <img
                      id="adv"
                      src="https://sslimages.shoppersstop.com/sys-master/root/hf5/h56/13098245750814"
                       alt=""
                       />
                    </div>
            </div>
        </div>
    )
}
export default Hollywood