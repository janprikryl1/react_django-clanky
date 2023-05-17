

import { BrowserRouter, Link } from 'react-router-dom';


function ArticleArray({items}) {
    /*const showItem = (item) => {
        return (<tr>
            <th scope="row">{item.id}</th>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.subject}</td>
            <td>{item.author}</td>
        </tr>);
    }*/
    return (
    <div className="container">
        <div className="row">
            <h2>Články</h2>
        </div>
        <div className="row">
            {items.map((item) => (
                <div className="col-sm" key={item.id}>
                    <h3><Link  to={{ pathname: '/detail', search: `?name=${encodeURIComponent(item.name)}&subject=${encodeURIComponent(item.subject)}&author=${encodeURIComponent(item.author)}&text=${encodeURIComponent(item.text)}` }}>{item.name}</Link></h3>
                    <p>{item.subject}</p>
                    <p>{item.author}</p>
                    <p>{item.text}</p>
                    <p>{item.date_time}</p>
                </div>
            ))}    
        </div>
    </div>
    )
}
export default ArticleArray;