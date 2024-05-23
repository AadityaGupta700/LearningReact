import {useEffect, useState} from 'react';
function useCurrencyInfo(currency){
    const [data,setData]=useState({});
    useEffect(() =>{
         fetch (`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
         .then((response) => {
            return response.json()
            })
            .then((data) => {
                setData(data[currency]);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        },[currency])
        
        return data;
    }
export default useCurrencyInfo;
