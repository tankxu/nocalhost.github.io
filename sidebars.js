/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    // Intro
    {
      type: 'doc',
      label: 'Introduction',
      id: 'introduction',
    },
    // Getting Start
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'quick-start',
        'installation',
      ]
    },
    // Guides
    {
      type: 'category',
      label: 'User Guides',
      collapsed: false,
      items: [
        'guides/manage-cluster',
        // Deploy
        {
          type: 'category',
          label: 'Deployment',
          items: [
            'guides/deploy/deploy-app',
            // 'guides/deploy/deploy-from-helm',
            'guides/deploy/deploy-demo',
          ]
        },
        'guides/develop-service',
        // Debugging
        { 
          type: 'category',
          label: 'Debugging',
          items: [
            'guides/debug/overview',
            'guides/debug/remote-debug',
            'guides/debug/access-terminal', 
            'guides/debug/log-viewer',
          ]
        },
        // Remote Run
        'guides/remote-run',
        // Hot Reload
        'guides/hot-reload',
        // 'guides/clear-pvc',
      ]
    },
    // Configurations
    {
      type: 'category',
      label: 'Configuration',
      collapsed: false,
      items: [
        'config/config',
        'config/config-overview',
        {
          type: 'category',
          label: 'Spec',
          items: [
            'config/config-spec',
            'config/config-dev-container',
            'config/config-enhance',
            {
              type: 'category',
              label: 'Pattern',
              items: [
                'config/config-pattern',
              ]
            },
            'config/config-develop',
          ]
        },
        'config/configure',
        {
          type: 'category',
          label: 'Deploy',
          items: [
            'config/config-deployment',
            'config/config-deployment-quickstart',
            'config/config-deployment-spec',
            'config/config-deployment-advance',
            'config/config-deployment-syntax'
          ]
        },
      ]
    },
    // Best Practice
    {
      type: 'category',
      label: 'Best Practices',
      collapsed: false,
      items: [
        // Compatible
        {
          type: 'doc',
          label: 'Kubernetes Compatibilities',
          id: 'practice/cloud/k8s-compatible'
        },
        // Working with Cloud
        // {
        //   type: 'category',
        //   label: 'Working with Cloud',
        //   items: [
        //     'practice/cloud/tencent-tke',
        //     'practice/cloud/rancher-rke',
        //     'practice/cloud/ali-ack',
        //     'practice/cloud/google-gke',
        //     'practice/cloud/amazon-eks',
        //     'practice/cloud/ms-azure'
        //   ]
        // },
      ]
    },
    // Advanced
    {
      type: 'category',
      label: 'Advanced Guides',
      items: [
        // CLI Reference
        {
          type: 'category',
          label: 'CLI',
          items: [
            {
              type: 'autogenerated',
              dirName: 'cli'
            },
          ]
        },
        // Nocalhost Server
        {
          type: 'category',
          label: 'Nocalhost Server',
          items: [
            'server/server-overview',
            'server/deploy-server',
            'server/manage-user',
            'server/manage-cluster',
            // DevSpace
            {
              type: 'category',
              label: 'Manage DevSpace',
              items: [
                'server/manage-devspace-iso',
                'server/manage-devspace-mesh'
              ]
            },
            'server/manage-app'
          ]
        },
        // Nocalhost Dep
        'server/nh-dep',
      ]
    },
    //Reference
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/nh-config',
      ]
    },
    // FAQ
    'faq/faq',
    // Changelogs
    { 
      type: 'category',
      label: 'Changelogs',
      items: [
        'changelogs/0.4.x',
        'changelogs/0.5.x',
        'changelogs/0.6.x'
      ]
    }
  ],
};
