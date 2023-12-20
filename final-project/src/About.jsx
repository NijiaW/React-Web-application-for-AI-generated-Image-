import './About.css';
import Carousel from './Carousel';

const imagePaths = ["https://images.unsplash.com/photo-1539922289330-2c9728ee7202?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm90dG5lc3QlMjBpc2xhbmR8ZW58MHx8MHx8fDA%3D",
"https://images.unsplash.com/photo-1625657332720-4472846b40a4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
 "https://images.unsplash.com/photo-1598298230762-e4cbaf605f4a?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 "https://images.unsplash.com/photo-1580808603682-8432a1eee613?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 "https://images.unsplash.com/photo-1517396520367-0f624e365431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 "https://images.unsplash.com/photo-1541068864300-43208de6826d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHJvdHRuZXN0fGVufDB8fDB8fHww",
 "https://images.unsplash.com/photo-1605080643191-517a0d26f6ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 "https://images.unsplash.com/photo-1589472385979-f4fd77f2edfc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJvdHRuZXN0fGVufDB8fDB8fHww",
 "https://images.unsplash.com/photo-1577021307655-7f9785f40e2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm90dG5lc3R8ZW58MHx8MHx8fDA%3D",
];
function About(){
    return(
        
        <main className="main" id="main-content">
            <div className="about">
                <h2 className="main_title">Quokkas's Home - Rottnest Island </h2>
                <Carousel images={imagePaths}/>
                <div className="paragraph">
                    <p>Rottnest Island, situated just off the coast of Western Australia near Perth, is an idyllic natural haven renowned for its pristine beaches, clear waters, and the cheerful presence of the quokka. This small, endearing marsupial has become synonymous with the island, thriving in this protected and car-free environment. The quokka, with its brown-grey fur and sociable demeanor, navigates the diverse habitats of Rottnest Island, from the coastal heathlands to the eucalyptus woodlands, with remarkable adaptability. The island’s mild climate, plentiful food sources, and lack of natural predators create an ideal sanctuary for these creatures. Quokkas are herbivores and primarily nocturnal, spending the day resting in the shade of dense vegetation and foraging for leaves, stems, and bark in the cooler hours. Known for their curiosity and lack of fear towards humans, quokkas have a reputation for being the world’s friendliest animals, often approaching visitors, which has contributed to the island's popularity as a tourist destination. Rottnest Island not only offers a unique glimpse into the life of these adorable marsupials but also serves as a vital refuge, playing a crucial role in the conservation of the species.</p>
                    <p>Adapted to a mainly nocturnal lifestyle, quokkas seek to evade daytime heat and predators, emerging under the protective cover of night to forage for food. Their diet primarily comprises leaves, stems, and bark, which they zestfully nibble while roaming through forests and other vegetated areas. Quokkas have a unique reproductive trait: a phenomenon known as embryonic diapause, allowing the delay of embryo development if environmental conditions are not optimal or if the previous joey (baby quokka) hasn’t vacated the pouch..</p>            
                </div>
            </div>
        </main>
    );
}
export default About;