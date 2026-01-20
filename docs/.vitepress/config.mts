import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Dast Language",
    description: "A pragmatic, type-safe programming language for modern development.",
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        // defined in .vitepress/theme/index.ts for custom rich aesthetics if needed,
        // but default theme is quite good. We will customize via CSS.
        logo: '/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/00-overview' },
            { text: 'Reference', link: '/reference/syntax' },
            { text: 'GitHub', link: 'https://github.com/cpunion/dast-lang' }
        ],
        sidebar: [
            {
                text: 'Introduction',
                items: [
                    { text: 'Overview', link: '/guide/00-overview' },
                    { text: 'Language Design', link: '/guide/implementation-roadmap' },
                ]
            },
            {
                text: 'Core Concepts',
                items: [
                    { text: 'Type System', link: '/guide/01-type-system' },
                    { text: 'Error Handling', link: '/guide/02-error-handling' },
                    { text: 'Modules & Packages', link: '/guide/03-module-package' },
                    { text: 'Memory Management', link: '/guide/07-memory-management' },
                    { text: 'Thread Safety', link: '/guide/08-thread-safety' },
                    { text: 'Async Model', link: '/guide/09-async-model' },
                ]
            },
            {
                text: 'Advanced Features',
                items: [
                    { text: 'Generics (Comptime)', link: '/guide/04-generics-comptime' },
                    { text: 'Comptime Details', link: '/guide/05-comptime-detailed' },
                    { text: 'Advanced Generics', link: '/guide/06-advanced-generics' },
                    { text: 'Macro System', link: '/guide/10-macro-system' },
                    { text: 'FFI Interop', link: '/guide/17-ffi-interop' },
                    { text: 'Hot Reload', link: '/guide/18-hot-reload' },
                ]
            },
            {
                text: 'Tooling & Ecosystem',
                items: [
                    { text: 'Package Management', link: '/guide/11-package-management' },
                    { text: 'Testing Framework', link: '/guide/12-testing-framework' },
                    { text: 'Standard Library', link: '/guide/13-standard-library' },
                    { text: 'Toolchain', link: '/guide/15-toolchain' },
                    { text: 'Platform Support', link: '/guide/16-platform-support' },
                ]
            },
            {
                text: 'Compiler Internals',
                items: [
                    { text: 'IR Specification', link: '/guide/19-ir-spec' },
                    { text: 'Bootstrap', link: '/guide/20-bootstrap' },
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/cpunion/dast-lang' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2026 cpUnion'
        },
        search: {
            provider: 'local'
        }
    },
    appearance: 'dark', // Force dark mode for "premium" feel initially, or allow toggle
})
