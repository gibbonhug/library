import { useState, useEffect } from 'react';

/**
 * Fetching 
 * @param url: URL of the JSON data to fetch
 * @returns An array with 4 entries:
 * - data: the fetched data
 * - isLoadingData: true if data has not been returned / no error
 * - isError: true if data could not be fetched
 * - error: The error for logging (of type Error)
 */
const useFetchData: ((url: string) => [
    data: any | any[] | null, 
    isLoadingData: boolean, 
    error: Error | null,
    isError: boolean
]) = (url) => {
    /**
     * The data to fetch
     * Not sure how to type this
     */
    const [data, setData] = useState<any | any[] | null>(null);
    /**
     * Boolean to display a message if fetch is loading
     */
    const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
    /**
     * Boolean to display a message there was an error retrieving data
     */
    const [isError, setIsError] = useState<boolean>(false);
    /**
     * For logging errors
     * I am not sure how to type this
     */
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error('There was an error retrieving data');
                }
                return res.json();
            })
            .then(data => {
                // how do i type this? do I?
                setData(data);
                setIsLoadingData(false);
                setIsError(false);
                setError(null);
            })
            .catch(err => {
                setIsLoadingData(false);
                setIsError(true); 
                setError(err);
            })
    }, [url]);

    return [
        data, isLoadingData, error, isError
    ]
}

export default useFetchData;