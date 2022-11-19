import { rootAction } from '@/store/root-action'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(rootAction, dispatch)
}
