import {IContactData} from "../../utils/constants"
import styles from "../../styles/Home.module.css"

/**
 * Props for the contact component
*/
interface IContactProps {
    /**
     * Data for a single contact
    */
    contact: IContactData
}

/**
 * Displays a single clickable contact with an icon and a link
*/
const Contact = ({contact} : IContactProps) => {
    // opens link in a new tab
    return (
        <a
            href={contact.link}
            target="_blank"
            rel="noreferrer"
        >
            <div
                className={styles.contact}
            >
                {contact.icon}
            </div>
        </a>
    );
}

export default Contact