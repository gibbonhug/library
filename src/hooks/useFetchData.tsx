import { useState, useEffect } from 'react';

/**
 * Fetching data 
 * @param url: URL of the JSON data to fetch
 * type param DataType: type of data (type param)
 * @returns An object to be destructured:
 * - data: the fetched data (type of DataType 'param')
 * - setData: setState for data
 * - isLoadingData: true if data has not been returned / no error
 * - setIsLoadingData: setState for isLoadingData
 * - isError: true if data could not be fetched
 * - setIsError: setState for isError
 * - error: The error for logging (of type Error)
 * - setError: setState for setError
 */
function useFetchData<DataType>(url: string) {
    /**
     * The data to fetch
     */
    const [data, setData] = useState<DataType | null>(null);
    /**
     * Boolean if fetch is loading
     */
    const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
    /**
     * Boolean if there was an error retrieving data
     */
    const [isError, setIsError] = useState<boolean>(false);
    /**
     * For logging errors
     */
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        // we will abort fetch requests if user navigates away
        const abortController = new AbortController();
        const signal = abortController.signal;
        console.log('use usffect fetch cdata');

        fetch(url, { signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('There was an error retrieving data');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoadingData(false);
                setIsError(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    // do not update state of component
                } else {
                    setIsLoadingData(false);
                    setIsError(true);
                    setError(err);    
                }
            });

        // cleanup function
        return (() =>
            abortController.abort()
        );
    }, [url]);

    return {
        data, setData, isLoadingData, setIsLoadingData,
        error, setError, isError, setIsError
    }
}

export default useFetchData;