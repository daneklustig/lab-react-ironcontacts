import React from "react";

const OneContact = ({ name, img, popularity, removeContact, id }) => {
  console.log(img);

  return (
    <tr>
      <td>
        <img className="profile-photo" src={img} alt="" />
      </td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td><button onClick={removeContact}>Delete</button></td>
    </tr>
  );
};

const Contact = props => {
  console.log(props.contacts);
  return (
    <div>
      <button onClick={props.randomContact}>Add a random Contact</button>
      <button onClick={props.sortName}>Sort by Name</button>
      <button onClick={props.sortPopularity}>Sort by Popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        <ul>
          {props.contacts.map((oneContact, id) => (
            <OneContact
              key={id}
              img={oneContact.pictureUrl}
              name={oneContact.name}
              popularity={oneContact.popularity}
              removeContact={oneContact.removeContact}
            />
          ))}
        </ul>
      </table>
    </div>
  );
};

/* // when using a class component, we need to call the render() function


  render() {
    return(
    <div>
      <table style={{width:"100%"}}>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table>
    </div>
    )}
} */

export default Contact;
