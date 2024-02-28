import appConfig from '@/app/configs/app.config';
import { ReactComponentProps } from '@/app/react-component-properties.type';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AppTitleBanner({className}: ReactComponentProps) {
    return (
        <div className={'flex items-center justify-center ' + className}>
            <div className='flex items-center'>
                <FontAwesomeIcon icon={faCodeCompare} style={{ color: 'red', fontSize: '1.5rem' }} />
                <span className='mx-2 text-2xl font-semibold text-white'>{appConfig.meta.title}</span>
            </div>
        </div>
    );
}

export default AppTitleBanner;
