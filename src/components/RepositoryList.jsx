const uniformName = 'uniform2'


export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <li>
                    <strong>{uniformName}</strong>
                    <p>Form in React</p>

                    <a href="#">
                        Acessar repositórios
                    </a>
                </li>

                <li>
                    <strong>uniform</strong>
                    <p>Form in React</p>

                    <a href="#">
                        Acessar repositórios
                    </a>
                </li>

                <li>
                    <strong>uniform</strong>
                    <p>Form in React</p>

                    <a href="#">
                        Acessar repositórios
                    </a>
                </li>
            </ul>
        </section>
    )
}