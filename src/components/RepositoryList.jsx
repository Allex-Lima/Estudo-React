import { RepositoryItem } from "./RepositoryItem.jsx"

const repository = {
    name: 'uniform',
    discription: 'Forms in React',
    link: "https://github.com/Allex-Lima/Estudo-React"
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}