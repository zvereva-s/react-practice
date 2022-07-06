import styles from './postList.module.css';

function PostList({items}){
    const elements = items.map(({ id, url, title, text }) => <li key={id} className={styles[`post-list-item`]}><img className={styles[`post-list-img`]} src={url} alt={title} width='250' /><h4 className={styles[`post-list-item-title`]}>{title}</h4><p className={styles[`post-list-item-text`]}>{text}</p></li>)
 
    return (<>
        <h2 className={styles[`post-list-title`]}>Post List</h2>
            <ul className={styles[`post-list`]}>
                {elements}
            </ul></>)

}
export default PostList;