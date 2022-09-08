import styles from "../styles/Home.module.css"
import {CONTACTS, IContactData} from "../utils/constants"
import Contact from "./Contact/Contact"

const Contacts = () => {
    return (
        <div
            className={styles.contacts}
            id="contacts"
        >
            {CONTACTS.map((ele : IContactData) => {
                return (
                    <Contact contact={ele}/>
                );
            })}
        </div>


    );
}

export default Contacts