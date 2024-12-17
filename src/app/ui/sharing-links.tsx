import styles from '@/styles/ui/sharing-links.module.scss';
import {
    FacebookIcon,
    FacebookShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    XIcon
} from 'react-share';

function SharingLinks() {
    const url = window?.location.href;

    return (
        <div className={styles.container}>
            <p className={styles.label}>Share</p>
            <div className={styles.icons}>
                <FacebookShareButton url={url}>
                    <FacebookIcon round={true} className={styles.icon}/>
                </FacebookShareButton>
                <TwitterShareButton url={url}>
                    <XIcon round={true} className={styles.icon}/>
                </TwitterShareButton>
                <TelegramShareButton url={url}>
                    <TelegramIcon round={true} className={styles.icon}/>
                </TelegramShareButton>
                <WhatsappShareButton url={url}>
                    <WhatsappIcon round={true} className={styles.icon}/>
                </WhatsappShareButton>
            </div>
        </div>
    );
}

export default SharingLinks;
