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
        ],
        [ 'script', {}, `  
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z718YJ6MRQ');`
        ],
        [ 'script', {src:'https://www.googletagmanager.com/gtag/js?id=G-Z718YJ6MRQ'}]
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
                title: '基础 API',
                path: '/basics',
                children: [
                    '/basics/authentication.html',
                    '/basics/auth_tool.html',
                    '/basics/vehicles.html'
                ]
            },
            {
                title: '状态 State',
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
                title: '指令 Command',
                children: [
                    '/command/wake.html',
                    '/command/alerts.html',
                    '/command/remote-start.html',
                    '/command/homelink.html',
                    '/command/speed-limit.html',
                    '/command/valet-mode.html',
                    '/command/sentry-mode.html',
                    '/command/door.html',
                    '/command/frunk-trunk.html',
                    '/command/windows.html',
                    '/command/charging.html',
                    '/command/climate.html',
                    '/command/media.html',
                    '/command/sharing.html',
                    '/command/software-update.html'
                ]
            },
            {
                title: '流 Streaming',
                path: '/streaming/',
                children: []
            },
            {
                title: '字典 Option Code',
                path: 'option-code.html',
                children: []
            },
            {
                title: '关于我',
                path: '/about-me.html',
                children: []
            }
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