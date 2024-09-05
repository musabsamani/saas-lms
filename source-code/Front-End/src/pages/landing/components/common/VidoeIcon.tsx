import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    className?: string;
    iconClassName: string
    animateClassName?: string
}

const VidoeIcon = ({ className, iconClassName, animateClassName }: Props) => {
    return (
        <span className={`cursor-pointer relative h-20 w-20 bg-white rounded-full flex items-center justify-center ${className}`}>
            <span className={`absolute w-full h-full rounded-full bg-white animate-[videoIcon_2s_linear_infinite] ${animateClassName}`}></span>
            <FontAwesomeIcon icon={faPlay} className={`rtl relative text-3xl ${iconClassName}`} />
        </span>
    );
}

export default VidoeIcon;
