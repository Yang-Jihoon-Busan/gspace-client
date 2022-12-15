import { useState, useEffect, useContext, } from 'react';
import { AppContext } from '../../contexts/app-context';


const useSearchPosting = (page, setPage, category, trigger) => {
    const [ loading, setLoading ] = useState(false);
    const [ fetched, setFetched ] = useState(false);
    const [ rows, setRows ] = useState();
    const [ mayMore, setMayMore ] = useState(true);

    const { simplefetch } = useContext(AppContext);

    useEffect(() => {
        setRows([]);
        setFetched(false);
        setMayMore(true);
        setPage(1);
    }, [ category, trigger ]);
    
    useEffect(() => {
        if (!mayMore) return;
        if (category) {
            setLoading(true);
            
            const params = { page, category };
            simplefetch('get', '/posting/search_posting.php', { params })
            .then(data => {
                setRows(rows => {
                    const result = rows.concat(data.rows);
                    return result;
                });
                setMayMore(data.rows.length === data.rows_in_page);
                setFetched(true);
            })
            .finally(() => { setLoading(false); });
        }
    }, [ page, category, mayMore, trigger ]);

    return { loading, fetched, rows };
}



export default useSearchPosting;