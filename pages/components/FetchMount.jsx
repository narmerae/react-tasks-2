import React, {useEffect} from 'react';

const FetchMount = () => {
    const [fetchData, setFetchData] = React.useState([{}]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setFetchData([data]);
            });
    }, []);
    return (
        <div>
            {
                fetchData.map((titles) => (
                    <h1 key={titles.id}>{titles.body}</h1>
                ))
            }
        </div>
    );
};

export default FetchMount;