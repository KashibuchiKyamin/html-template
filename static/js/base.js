
new gridjs.Grid({
    columns: [
        "名前",
        "メールアドレス",
        {
            name: "電話番号",
            sort: false
        }
    ],
    sort: true,
    server: {
        url: tableData,
        method: "GET",
        body: null,
        then: data => data.data.map(card => [card.name, card.email, card.phoneNumber]),
        handle: (res) => {
            // no matching records found
            if (res.status === 404) return { data: [] };
            if (res.ok) return res.json();

            throw Error('oh no :(');
        },
        total: (data) => data.total
    },
    pagination: {
        limit: 5,
        server: {
            url: (prev, page, limit) => prev,
            body: (prev, page, limit) => {
                console.log(`prev:${prev}`);
                console.log(`page:${page}`);
                console.log(`limit:${limit}`);
                return null;
            }
        }
    }
}).render(document.getElementById("gridjs-table"));
