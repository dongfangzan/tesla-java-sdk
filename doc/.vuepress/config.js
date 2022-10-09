module.exports = {
    title: 'Tesla Java SDK',
    description: '读书使人进步',
    head: [
        ['link', { rel: 'icon', href: '/tesla-logo.png' }],
        ['meta', { name: 'keywords', content: '电子书,PDF,ePub,doc,document,文档,中文文档,编程,人工智能,AI,大数据,bigdata,云计算,java,c#,c++,c,python,php,sql,swift,go,golang,js,javascript,css,html,elasticsearch,es,ELK,入门教程,计算机,IT,k8s,book,docker,系统架构' }]
    ],
    base: '/',
    markdown: {
        lineNumbers: true
    },
    plugins: [
        [
            '@vuepress/google-analytics', {
            'ga': 'G-Z718YJ6MRQ'
        }
        ],
        [
            '@renovamen/vuepress-plugin-baidu-tongji', {
            'ba': '10befa5b7f9ac8db7ba52074ce7553a7'
        }
        ]
    ],
    themeConfig: {
        logo: '/tesla-logo.png',
        lastUpdated: '最后更新',
        nav: [
            { text: '首页', link: '/' },
            { text: 'Gitee', link: 'https://gitee.com/mortise-and-tenon/tesla-java-sdk' }
        ],
        sidebar: [
            {
                title: '简介',
                path: '/',
                children: []
            },
            {
                title: '基础API',
                path: '/basics',
                children: [
                    '/basics/authentication.html',
                    '/basics/vehicles.html'
                ]
            }
            // {
            //     title: '状态',
            //     path: '/state',
            //     children: [
            //         '/state/data.html',
            //         '/state/charge.html'
            //     ]
            // },
            // {
            //     title: '指令',
            //     path: '/basics',
            //     children: [
            //         '/basics/authentication.html'
            //     ]
            // },
            // {
            //     title: '流',
            //     path: '/basics',
            //     children: [
            //         '/basics/authentication.html'
            //     ]
            // },
            // {
            //     title: '自动泊车/召唤',
            //     path: '/basics',
            //     children: [
            //         '/basics/authentication.html'
            //     ]
            // },
            // {
            //     title: '字典',
            //     path: '/basics',
            //     children: [
            //         '/basics/authentication.html'
            //     ]
            // }
        ]

    }
};