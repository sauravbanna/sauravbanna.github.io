import styles from "../styles/Home.module.css"
import {CONTACTS, IContactData} from "../utils/constants"
import Contact from "./Contact/Contact"

/**
 * Displays a list of contact methods with icons and links
*/
const Contacts = () => {
    return (
        <div
            className={styles.contacts}
            id="Contacts"
        >
            {CONTACTS.map((ele : IContactData, index: number) => {
                return (
                    <Contact key={`Contact${index}`} contact={ele}/>
                );
            })}
        </div>


    );
}

export default Contacts