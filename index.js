const loadUsers = async () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, name: "Jhon"},
                {id: 2, name: "Jane"},
            ])
        }, 2000);
    })
}

const loadRepositories = async () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Erro no Repositorio"))
        }, 2000);
    })
}

const loadEvents = async () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, name: "Event 1"},
                {id: 2, name: "Event 2"}
            ])
        }, 2000);
    })
}

const loadAll = async () => {
    try {
        const result = await Promise.allSettled([
            loadUsers(),
            loadRepositories(),
            loadEvents(),
        ])

        console.log(result)
    } catch (error) {
        console.log(error);
    }
}

loadAll()