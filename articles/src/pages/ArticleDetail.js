import { BrowserRouter, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function ArticleDetail() {
    const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get('name');
  const subject = params.get('subject');
  const author = params.get('author');
  const text = params.get('text');
    return(
        <div className="container">
            <div className="row">
                <h1>{name}</h1>
                <h1>{subject}</h1>
                <h1>{author}</h1>
                <h1>{text}</h1>
            </div>
        </div>
    )
}
export default ArticleDetail;