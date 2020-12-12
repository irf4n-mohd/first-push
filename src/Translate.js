
import React,{useState,useEffect} from 'react';
import axios from 'axios';
const Translate =({language,text})=>{
    const[data,setData]=useState('');
    useEffect(()=>{
        const DoIt=async()=>{
            const {data} =await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                params:{
                    q:text,
                    target:language,
                    key:"AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                }
            });
            setData(data.data.translations[0].translatedText);
        }
        if(language&&text!==''){
            DoIt();
        }
    },[language,text])
    return(
        <div>
            <h4>convertedText</h4>
            <hr/>
            <h2>{data}</h2>
        </div>
    )
}
export default Translate;