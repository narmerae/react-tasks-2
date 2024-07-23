import React, {useEffect} from 'react';

function FetchDataOnPropChange() {
    const [fetchData, setFetchData] = React.useState([{}]);
    const [id, setId] = React.useState('');
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setFetchData([data]);
            })
    },[id])
    const onChangeHandler = (event) => {
        setId(event.target.value);
    }
    return (
        <div>
            <input onChange={onChangeHandler} name="id" id="bigid"/>
            {
                fetchData.map((data) => (
                    <h1 key={data.id}>{data.body}</h1>
                ))
            }
        </div>
    );
}

export default FetchDataOnPropChange;