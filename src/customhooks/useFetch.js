import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data , setdata] = useState(null);
    const [isPending , setisPending] = useState(true);
    const [error , setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url , {signal : abortCont.signal})
            .then(res => {
                // console.log(res)
                if(!res.ok) {
                    throw Error("could not fetch the data for that resourse")
                }
                return res.json()
            })
            .then((data) => {
                setdata(data);
                setisPending(false);
                setError(null);
            })
            .catch((err) => {
                if(err.name === 'AbortError'){
                    console.log("fetch aborted");
                }
                else {
                    setisPending(false);
                    setError(err.message);
                }
            })
        }, 1000);

        return() => abortCont.abort();
    } , [url]);

    return {data , isPending , error};
}

export default useFetch;