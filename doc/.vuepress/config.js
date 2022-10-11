module.exports = {
    title: 'Tesla Json API（非官方，中文版）',
    description: '加速全球向可持续能源的转变',
    head: [
        ['link', { rel: 'icon', href: '/tesla-logo.png' }],
        ['meta', { name: 'keywords', content: '特斯拉,Model Y,Model S,Model X,Model 3,Tesla,api,tesla' }],
        [ 'script', {}, `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?10befa5b7f9ac8db7ba52074ce7553a7";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();`
        ]
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
        ]
    ],
    themeConfig: {
        logo: '/tesla-logo.png',
        lastUpdated: '最后更新',
        nav: [
            { text: '首页', link: '/' },
            { text: '关于我', link: '/about-me.html'},
            { text: 'Gitee', link: 'https://gitee.com/mortise-and-tenon/tesla-java-sdk' },
            { text: 'Github', link: 'https://github.com/dongfangzan/tesla-java-sdk' }
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
                    '/basics/auth_tool.html',
                    '/basics/vehicles.html'
                ]
            },
            {
                title: '状态',
                path: '/state',
                children: [
                    '/state/data.html',
                    '/state/vehicle.html',
                    '/state/charge.html',
                    '/state/climate.html',
                    '/state/drive.html',
                    '/state/GUI.html',
                    '/state/config.html',
                    '/state/mobile.html',
                    '/state/nearby.html'
                ]
            },
            {
                title: '指令',
                path: '/command',
                children: [
                    '/command/wake.html',
                    '/command/alerts.html',
                    '/command/remote-start.html',
                    '/command/homelink.html',
                    '/command/speed-limit.html'
                ]
            },{
                title: '关于我',
                path: '/about-me.html',
                children: []
            }
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