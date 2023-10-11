import "../styles/Perfil.css";
import foto1 from "../images/foto1.jpg";
import foto2 from "../images/foto2.jpg";
import foto3 from "../images/foto3.jpg";
import foto4 from "../images/foto4.jpg";
import foto5 from "../images/foto5.jpg";
import foto6 from "../images/foto6.jpg";
import foto7 from "../images/foto7.jpg";
import foto8 from "../images/foto8.jpg";
import foto9 from "../images/foto9.jpg";
import foto10 from "../images/foto10.jpg";
import logo from "../images/logo.jpg";
import {useState, useEffect, useLayoutEffect, useContext, useRef} from "react";
import { CharacterContext } from "../contex/CharacterContext";

function Perfil(){
    // hook de "useState"
    // dentro del () se pone lo que se desea ver al inicio
    const [character, setCharacter] = useState(logo);
    const [description_Character, setDescription_Character] = useState();
    const [ name_Character, setName_Character ] = useContext(CharacterContext);
    const sectionRef = useRef(null);
    const [backgroundColor, setBackgroundColor] = useState();
    const select_Character = (foto, color)=>{
        setBackgroundColor(color);
        setCharacter(foto)
    };
    //hook de "useEffect"
    useEffect(()=>{
        const names = ["Luffy", "Zoro", "Nami", "Ussop", "Jimbe", "Nico Robin", "Sanji", "Chopper", "Brook", "Franky"];
        if (character===foto1){
            setName_Character(names[0]);
        }else if (character===foto2){
            setName_Character(names[1]);
        }else if (character===foto3){
            setName_Character(names[2]);
        }else if (character===foto4){
            setName_Character(names[3]);
        }else if (character===foto5){
            setName_Character(names[4]);
        }else if (character===foto6){
            setName_Character(names[5]);
        }else if (character===foto7){
            setName_Character(names[6]);
        }else if (character===foto8){
            setName_Character(names[7]);
        }else if (character===foto9){
            setName_Character(names[8]);
        }else if (character===foto10){
            setName_Character(names[9]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[character])
    useLayoutEffect(()=>{
        const descriptions = ["Es el capitán y fundador de los Piratas de Sombrero de Paja así como un de los Cuatro Emperadores que gobiernan los mares del Nuevo Mundo.",
            "Es el combatiente principal de los Piratas de Sombrero de Paja, uno de sus dos espadachines y uno de los oficiales principales de la Gran Flota de Sombrero de Paja.",
            "Es una pirata y la navegante de los Piratas del Sombrero de Paja , así como una de los oficiales principales de la Gran Flota de Sombrero de Paja.",
            "Es el francotirador de los Piratas de Sombrero de Paja y uno de los oficiales principales de la Gran Flota de Sombrero de Paja.",
            "Es el timonel de los Piratas de Sombrero de Paja y uno de los oficiales principales de la Gran Flota de Sombrero de Paja.",
            "Es la arqueóloga de los Piratas de Sombrero de Paja, así como una de los oficiales principales de la Gran Flota de Sombrero de Paja.",
            "Es el cocinero de los Piratas de Sombrero de Paja, así como uno de los oficiales principales de la Gran Flota de Sombrero de Paja.",
            "Es el médico de los Piratas de Sombrero de Paja, así como uno de los oficiales principales de la Gran Flota de Sombrero de Paja.",
            "Es el músico de los Piratas de Sombrero de Paja, uno de sus dos espadachines y uno de los oficiales principales de la Gran Flota de Sombrero de Paja.",
            "Es el carpintero naval de los Piratas de Sombrero de Paja y uno de los oficiales principales de la Gran Flota de Sombrero de Paja."
        ];
        if (character===foto1){
            setDescription_Character(descriptions[0]);
        }else if (character===foto2){
            setDescription_Character(descriptions[1]);
        }else if (character===foto3){
            setDescription_Character(descriptions[2]);
        }else if (character===foto4){
            setDescription_Character(descriptions[3]);
        }else if (character===foto5){
            setDescription_Character(descriptions[4]);
        }else if (character===foto6){
            setDescription_Character(descriptions[5]);
        }else if (character===foto7){
            setDescription_Character(descriptions[6]);
        }else if (character===foto8){
            setDescription_Character(descriptions[7]);
        }else if (character===foto9){
            setDescription_Character(descriptions[8]);
        }else if (character===foto10){
            setDescription_Character(descriptions[9]);
        }
    },[character])
      

    return (
        <>
        <h1 className="title">{name_Character}</h1>
        <div ref={sectionRef} className="section" style={{ backgroundColor }}>
            <div className="container">
                    <div onClick={()=>select_Character(foto1, "red")}>
                        <img src={foto1} alt="" />
                    </div>
                    <div onClick={()=>select_Character(foto2, "green")}>
                        <img src={foto2} alt="" />
                    </div>
                    <div onClick={()=>select_Character(foto3, "darkorange")}>
                        <img src={foto3} alt="" />
                    </div>
                    <div onClick={()=>select_Character(foto4, "firebrick")}>
                        <img src={foto4} alt="" />
                    </div>
                    <div onClick={()=>select_Character(foto5, "darkcyan")}>
                        <img src={foto5} alt="" />
                    </div>
                    <div onClick={()=>select_Character(foto6, "darkblue")}>
                        <img src={foto6} alt="" />
                    </div>
                    <div onClick={()=>select_Character(foto7, "darkgoldenrod")}>
                        <img src={foto7} alt="" />
                    </div>
                    <div onClick={()=>select_Character(foto8, "peru")}>
                        <img src={foto8} alt="" />
                    </div>
                    <div onClick={()=>select_Character(foto9, "dimgrey")}>
                        <img src={foto9} alt="" />
                    </div>
                    <div onClick={()=>select_Character(foto10, "darkviolet")}>
                        <img src={foto10} alt="" />
                    </div>
            </div>
            <div className="container2">
                    <div></div>
                    <div className="container_description">
                        <div className="FotoCharacter">
                            <img src={character} alt="" />
                        </div>
                        <div className="section_description">
                            <h3>
                                {name_Character}
                            </h3>
                            <p>
                                {description_Character}
                            </p>
                        </div>

                    </div>
            </div>
        </div>
            
        </>
    )
}

export default Perfil;