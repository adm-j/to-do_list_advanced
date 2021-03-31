import {useState} from 'react';

const Notes = () => {

    const [list, setList] = useState(["add new note"]);

    return (
        <div>
            {list.map((item, index) =>
            <div key={index}>
            <p>title</p>
            <p>{item}</p>
            </div>
            )}
        </div>
    )

};

export default Notes;