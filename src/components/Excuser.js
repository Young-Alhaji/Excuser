import { useState } from "react";
import axios from "axios";
import styles from '../modules/excuser.module.css';
import DisplayExcuse from "./DisplayExcuse";
const Excuser = () => {
    const [click, setclick] = useState('')
    const [cat, setcat] = useState('')
    const url= 'https://excuser.herokuapp.com/v1/excuse/office'
    const url2= 'https://excuser.herokuapp.com/v1/excuse/family'
     const url3= 'https://excuser.herokuapp.com/v1/excuse/party'
    const url4= 'https://excuser.herokuapp.com/v1/excuse/college'
    

    const office=()=>{
        axios.get(url).then((res)=>{
                setcat(res.data[0].category)
                setclick(res.data[0].excuse)
                
        })
    }

    const family=()=>{
        axios.get(url2).then((res)=>{
                setcat(res.data[0].category)
                setclick(res.data[0].excuse)
                
        })
    }

    const party=()=>{
        axios.get(url3).then((res)=>{
                setcat(res.data[0].category)
                setclick(res.data[0].excuse)
                
        })
    }

    const college=()=>{
        axios.get(url4).then((res)=>{
                setcat(res.data[0].category)
                setclick(res.data[0].excuse)
                
        })
    }

    return ( 
        <>
        
        
        <DisplayExcuse office={office} family={family} party={party} college={college} cat={cat} click={click}/>
        </>
     );
}
 
export default Excuser;