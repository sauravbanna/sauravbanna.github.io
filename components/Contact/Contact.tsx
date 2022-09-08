import {IContactData} from "../../utils/constants"
import styles from "../../styles/Home.module.css"

interface IContactProps {
    contact: IContactData
}

const Contact = ({contact} : IContactProps) => {
    return (
        <a
            href={contact.link}
            target="_blank"
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