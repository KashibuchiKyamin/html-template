import { gridjsLanguageConfig, gridjsStyleConfig } from "./myGridjsConfig.js";
const tableOfServerSide = new gridjs.Grid({
    columns: [
        "名前",
        "メールアドレス",
        {
            name: "電話番号",
            sort: false
        }
    ],
    sort: true,
    language: gridjsLanguageConfig,
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
    style: gridjsStyleConfig,
    sort: {
        multiColumn: false,
        server: {
            url: () => tableData,
            body: (prev, columns) => {
                console.log(`sort-prev:${prev}`);
                console.log(`sort-columns:${columns}`);
                return null;
            }
        }
    },
    pagination: {
        limit: 5,
        server: {
            url: () => tableData,
            body: (prev, page, limit) => {
                console.log(`pagination-prev:${prev}`);
                console.log(`pagination-page:${page}`);
                console.log(`pagination-limit:${limit}`);
                return null;
            }
        }
    }
}).render(document.getElementById("gridjs-table"));
