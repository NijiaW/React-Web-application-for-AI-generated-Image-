import { useEffect, useRef } from 'react';
import './Album.css';
import Button from './Button';
import { useState } from 'react';

const card_list =[
    {
        name: "Quokka Watch",
        path: "https://images.unsplash.com/photo-1517396520367-0f624e365431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cXVva2thfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        alt: " two quokkas stand alert on the sandy ground",
        title: "A baby quokka lives in its mum's bag",
        context: "On the white sands that blanket the ground, two quokkas stand, their fur dusted with the earth's natural tones. The foreground quokka, with eyes like deep pools reflecting the sky, seems to stand guard, vigilant and focused, while its companion in the background forages quietly. Together, they embody the gentle rhythm of life on the sandy shores of their island home.",
        button_visual : "button",
        id: 1,
    },
    {
        name: "Quokka Family",
        path: "https://images.unsplash.com/photo-1516703995331-215d1188db0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cXVva2thfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        alt: "Little quokka with its family",
        title: "Little quokka with its family",
        context: "Beneath the gaze of a mature quokka, a tiny joey peeks out into the world with wide-eyed wonder, finding comfort in the warmth of its mother's embrace. In the quiet sanctuary of their shaded retreat, life's simple beginnings are cherished in the stillness of a gentle morning.",
        button_visual : "button",
        id: 2,
    },
    {
        name: "Curious Quokka",
        path: "https://images.unsplash.com/photo-1513333420772-7b64ad15ca96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVva2thfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        alt: "Curious Quokka with a pose both inquisitive and serene",
        title: "Curious Quokka",
        context: "With a backdrop of dappled sunlight filtering through the trees, a quokka stands front and center, its gaze meeting the camera with a pose both inquisitive and serene. Quokkas have little fear of humans and commonly approach people closely, particularly on Rottnest Island, where they are abundant.",
        button_visual : "button",
        id: 3,
    },
    {
        name: "Quokka Baby",
        path: "https://images.unsplash.com/photo-1577021121271-de79349d7191?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cXVva2thfGVufDB8fDB8fHww",
        alt: "Quokka baby embarked on his daily adventure",
        title: "Quokka baby",
        context: "The quokka baby embarked on his daily adventure, a small piece of apple clutched tightly in his paw. With a curious glint in his eye and a smile that seemed to light up the coastline, he paused to savor the moment, feeling the warm sea breeze ruffle his fur.",
        button_visual:"button",
        id: 4,
    },
    {
        name: "Quokka's Gentle Inquiry",
        path: "https://images.unsplash.com/photo-1661099027575-7b0f80a9837b?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Quokka's Gentle Inquiry",
        title: "Quokka's Gentle Inquiry by standing poised on its hind legs",
        context: "Amidst the arid backdrop of branches and earth, a quokka stands poised on its hind legs, delivering a gaze as warm as the sun-drenched land it calls home. Its fur, tinged with the hues of the island's rich soil, glows under the soft light, highlighting the creature's inquisitive and genial nature.",
        button_visual:"button",
        id: 5,
    },
    {
        name: "Curious Quokka Greeting",
        path: "https://images.unsplash.com/photo-1591461533628-520b630a477b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "a curious quokka stands upright, gazing into the camera with an expression of innocent inquiry.",
        title: "Curious Quokka Greeting",
        context: "In the soft, diffused light of the Australian afternoon, a curious quokka stands upright, gazing into the camera with an expression of innocent inquiry. Its small paws dangle gently in front of it, as if caught mid-motion, enhancing its endearing charm, which seem to sparkle with a friendly welcome.",
        button_visual:"button",
        id: 6,
    },
];

function Album(){
    
    const cards2html = (card_list) => {
        return card_list.map(item =>

                        <div className="card" key = {item.name}>
                            <h2 className="card_title">{item.name}</h2>
                            <img src={item.path} alt={item.alt} title={item.title}/>
                            <div className="card-text">
                                <p>{item.context} </p>
                            </div>
                            <Button type="button" visual={item.button_visual} text={`${likeCount[item.id]} \u2665`} onClick={() => {
                                setLikeCount({...likeCount, [item.id]: likeCount[item.id] + 1});
                            }}/>
                        </div>
                )
    } 
    
    const [likeCount, setLikeCount] = useState(card_list.reduce((obj, item) => {
        obj[item.id] = 0;
        return obj
    }, {}));

    const [list, setList] = useState(
        cards2html(card_list)
    );

    const [sortOrder, setSortOrder] = useState(-1);

    useEffect(() => {
        card_list.sort(function(a, b){
            return sortOrder * (likeCount[a.id] - likeCount[b.id]);
        }); // sort a list using a compare function.
        setList(cards2html(card_list));
    }, [sortOrder]); 

    useEffect(() => {
        setList(cards2html(card_list));
    }, [likeCount]); 


    return(
        <main id="main-content">
            <button id="sortButton" onClick={() => {
                setSortOrder(-sortOrder);
            }}>
                {sortOrder === 1 ? <span className="boldArrow">{`\u2665 sort \u2B06`}</span> : <span className="boldArrow">{`\u2665 sort \u2B07`}</span>}
            
            </button>
            <div className="cards" >
            {list}
            </div>
        </main>

    );
}
export default Album;