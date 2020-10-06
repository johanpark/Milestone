import React, { useState, useEffect } from 'react';
import { dbService } from 'fbase';


const Twitt = ({userObj}) =>{ 
    const [JHtwitt, setJHtwitt] = useState("");
    const [JHtwitts, setJHtwitts] = useState([]);
    useEffect(() =>{
        dbService.collection("JHtwitts").onSnapshot((snapshot) => { //onSnapshot  change db realtime
            const JHtwittArray = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setJHtwitts(JHtwittArray);
          });
    },[]);
    const onSubmit = async(event) => {
        event.preventDefault();
        await dbService.collection("JHtwitts").add({
            text: JHtwitt,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        });
        setJHtwitt("");
    };
    const onChange =(event) => {
        const {
            target: {value},
        } = event;
        setJHtwitt(value);
    }
    return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={JHtwitt}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="JHtwitt" />
      </form>
      <div>
        {JHtwitts.map((JHtwitt) => (
          <div key={JHtwitt.id}>
            <h4>{JHtwitt.text}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Twitt;