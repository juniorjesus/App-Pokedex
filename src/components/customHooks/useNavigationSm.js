import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hideMenu } from '../../redux/NavigationSm/NavigationSmActions';

const useNavigationSm = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (window.matchMedia('(max-width: 767.98px)').matches) {
            dispatch(hideMenu());
        }
    }, [dispatch]);
}

export default useNavigationSm;