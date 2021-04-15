import moment from 'moment';


const Notes = ({list}) => {

    return (
        <div className="noteContainer">
            {list.map((item, index) =>
            <div key={index} id="notes">
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <p>{moment.utc(item.createdAt).format('MMMM do YYYY, h:mma')}</p>
            </div>
            )}
        </div>
    )

};

export default Notes;