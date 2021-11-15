import { RepositoryList } from './components/RepositoryList.jsx'
import { Counter } from './components/Counter.jsx'
import './styles/global.scss'

export function App() {
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}