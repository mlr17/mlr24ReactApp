import React from 'react';

export default function Main() {
    //第二次修改
    const datas = [
        {title:'mlr',age:25},
        {title:'hr',age:24},
        {title:'hk',age:10}
    ]
    const renderEle = (datas)=>{
        return datas.map((data)=>{
            return (
                <li key={data.title} >{`${data.title}今年${data.age}了`}</li>
            )
        })
    }
    return (
        <main>
            <article>
                <h2>Welcome to my home page!</h2>
                <p>This is a demo page for the CSS preprocessor LESS.</p>
            </article>
            <ul>{renderEle(datas)}</ul>
        </main>
    )
}